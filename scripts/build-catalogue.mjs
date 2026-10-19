// Builds public/FLEET-Catalogue.pdf from the same data the website uses (macOS + Google Chrome).
//   node scripts/build-catalogue.mjs
// Re-run it whenever products change, then rebuild/deploy the site.
//
// Layout: picture-led cover, contents page, TWO products per page (a page with a very long
// spec table gets one product), a coloured model-name bar above the specs, a model tag on top of
// every machine picture, a spare-parts grid, and a picture-led closing page.
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { products } from '../src/data/products.js'
import { categories } from '../src/data/categories.js'
import { company } from '../src/data/company.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'fleet-cat-'))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// ---------- images (small JPEG copies keep the PDF light) ----------
const cache = new Map()
const img = (webPath, max = 900) => {
  if (!webPath) return null
  const key = webPath + max
  if (cache.has(key)) return cache.get(key)
  const src = path.join(root, 'public', webPath)
  if (!fs.existsSync(src)) return null
  const out = path.join(tmp, `${cache.size}.jpg`)
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', '-Z', String(max), src, '--out', out], { stdio: 'ignore' })
  const url = 'file://' + out
  cache.set(key, url)
  return url
}
const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]))
const pic = (slug, max = 700) => img(bySlug[slug]?.images?.[0], max)

// ---------- fonts (bundled, so the PDF always matches the website) ----------
const fonts = JSON.parse(fs.readFileSync(path.join(root, 'scripts/fonts/fonts.json'), 'utf8'))
const fontCss = fonts.map(([fam, w, fn]) => `@font-face{font-family:"${fam}";font-weight:${w};src:url("file://${path.join(root, 'scripts/fonts', fn)}") format("woff2")}`).join('')

// ---------- helpers ----------
const spec = (p, k) => (p.specifications.find(([a]) => a === k) || [])[1]
const modelCode = (p) => {
  const m = spec(p, 'Model')
  if (m) return String(m).replace(/\s*\(.*$/, '').trim()
  const first = p.name.split(' ')[0]            // no Model row: use the leading model word if it has a digit (e.g. FL-114A)
  return /\d/.test(first) && first.length <= 14 ? first : null
}
// the size range shown in the chip next to the model name
const sizeChip = (p) => {
  const fromName = p.name.match(/\(([^)]*["”mm][^)]*)\)\s*$/)
  if (fromName) return fromName[1].replace(/\s+/g, '')
  const w = p.specifications.find(([k]) => /^Welding range/.test(k))
  if (w) { const n = String(w[1]).match(/\d+(\.\d+)?/g)?.map(Number); if (n?.length) return `${Math.min(...n)}–${Math.max(...n)} mm` }
  for (const k of ['Capacity', 'Size', 'Cutting range', 'Cutting size', 'Bending range']) { const v = spec(p, k); if (v && String(v).length <= 24) return String(v).replace(/\s+/g, ' ') }
  return null
}
const ACCENTS = ['#2F6FDE', '#0FA3A3', '#E8920C', '#EF5B5B', '#7A4FD6', '#2F6FDE', '#0FA3A3', '#E8920C']
const catName = (c) => c.name.replace(/\s+Machines?$/i, '')

// ---------- page builders ----------
const header = (title, ac, sub = '') => `
  <header class="ph" style="--ac:${ac}">
    <div class="ph-t"><span>${esc(title)}</span>${sub ? `<em>${esc(sub)}</em>` : ''}</div>
    <div class="ph-logo">${logoUrl ? `<img src="${logoUrl}">` : ''}</div>
  </header>`
const footer = (n) => `
  <footer class="pf"><span>${esc(company.legalName)}</span><span>${esc(company.phones.join('  ·  '))}  ·  ${esc(company.emails.map((e) => e.address).join('  ·  '))}</span><b>${n}</b></footer>`

const card = (p, ac, flip, catLabel) => {
  const code = modelCode(p)
  const chip = sizeChip(p)
  const rows = p.specifications.filter(([k]) => k !== 'Model')
  const size = rows.length <= 7 ? 'roomy' : rows.length <= 12 ? 'mid' : ''
  const feats = rows.length <= 8 ? (p.features || []).slice(0, 4) : []
  const im = img(p.images[0], 900)
  return `
  <article class="card ${size}${flip ? ' flip' : ''}" data-slug="${esc(p.slug)}" style="--ac:${ac}">
    <div class="bar">
      ${code ? `<span class="code">${esc(code)}</span>` : ''}
      <span class="nm"><small>${esc(catLabel)}</small>${esc(p.name)}</span>
      ${chip ? `<span class="chip">${esc(chip)}</span>` : ''}
    </div>
    <div class="body">
      <div class="info">
        <p class="short">${esc(p.shortDescription)}</p>
        <table>
          ${code ? `<tr class="mrow"><th>MODEL</th><td>${esc(code)}</td></tr>` : ''}
          ${rows.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}
        </table>
        ${feats.length ? `<ul class="feat">${feats.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` : ''}
      </div>
      <div class="pic">
        ${code ? `<span class="tag">${esc(code)}</span>` : ''}
        ${im ? `<img src="${im}">` : ''}
      </div>
    </div>
  </article>`
}

const logoUrl = img('/images/logo/logo.png', 700)
let solo = new Set() // products that need a whole page (very long spec tables) — filled by the overflow check below

function buildHtml() {
  let page = 1
  const pages = []
  const toc = []
  const sections = categories.map((c) => ({ c, items: products.filter((p) => p.category === c.slug) })).filter((s) => s.items.length)

  // cover + contents are pages 1 and 2
  const coverPage = 1
  page = 3
  sections.forEach(({ c, items }, si) => {
    const ac = ACCENTS[si % ACCENTS.length]
    toc.push({ name: c.name, count: items.length, page })
    if (c.slug === 'spare-parts') {
      const per = 16
      for (let i = 0; i < items.length; i += per) {
        const chunk = items.slice(i, i + per)
        pages.push(`<section class="sheet">${header(c.name, ac, i ? 'continued' : c.description)}
          <div class="parts">${chunk.map((p) => `<div class="part" style="--ac:${ac}">${img(p.images[0], 460) ? `<img src="${img(p.images[0], 460)}">` : ''}<b>${esc(p.name)}</b>${i === 0 && chunk.indexOf(p) < 2 ? `<span>${esc(p.shortDescription)}</span>` : ''}</div>`).join('')}</div>
          ${footer(page)}</section>`)
        page++
      }
      return
    }
    let flip = false
    for (let i = 0; i < items.length;) {
      const a = items[i], b = items[i + 1]
      const pair = b && !solo.has(a.slug) && !solo.has(b.slug)
      const list = pair ? [a, b] : [a]
      pages.push(`<section class="sheet">${header(c.name, ac, i === 0 ? c.description : '')}
        <div class="cards ${pair ? 'two' : 'one'}">${list.map((p) => { const h = card(p, ac, flip, catName(c)); flip = !flip; return h }).join('')}</div>
        ${footer(page)}</section>`)
      page++
      i += list.length
    }
  })
  const lastPage = page

  // ---- cover (pictures in front) ----
  const coverSet = ['fl100a1-pipe-threading-machine', 'fl12a-roll-grooving-machine', 'chm2-pipe-cutting-machine', 'fl-114a-hole-saw-cutting-machine', 'hb-50-hydraulic-pipe-bender', 'fl-315h4-hdpe-butt-fusion-machine']
  const tile = (slug, i) => { const p = bySlug[slug]; const u = pic(slug, 600); return p && u ? `<div class="tile" style="--ac:${ACCENTS[i % ACCENTS.length]}"><img src="${u}"><span>${esc(modelCode(p) || p.name)}</span></div>` : '' }
  const cover = `<section class="sheet cover">
    <div class="cv-top">${logoUrl ? `<div class="cv-logo"><img src="${logoUrl}"></div>` : ''}</div>
    <div class="cv-title"><div class="bar4"></div><h1>Product Catalogue</h1><p>${esc(company.legalName)}</p><div class="bar4"></div></div>
    <div class="cv-grid">${coverSet.map(tile).join('')}</div>
    <div class="cv-foot"><b>${esc(company.strapline)}</b><span>${esc(company.phones.join('  ·  '))}</span><span>${esc(company.emails.map((e) => e.address).join('  ·  '))}</span></div>
  </section>`

  // ---- contents ----
  const contents = `<section class="sheet">${header('Contents', '#2F6FDE', 'Machines · tools · spare parts')}
    <ul class="toc">${toc.map((t, i) => `<li style="--ac:${ACCENTS[i % ACCENTS.length]}"><i></i><span>${esc(t.name)}</span><em>${t.count} item${t.count === 1 ? '' : 's'}</em><b>${t.page}</b></li>`).join('')}</ul>
    ${footer(2)}</section>`

  // ---- closing page (pictures at the back) ----
  const backSet = ['fl150a-pipe-threading-machine', 'fl9a-roll-grooving-machine', 'fl-j40-250-pipe-cutting-machine', 'fl-150a-hole-saw-cutting-machine', 'fl-40a-electric-pressure-test-pump', 'ehb-50-electric-pipe-bender']
  const back = `<section class="sheet cover back">
    <div class="cv-top">${logoUrl ? `<div class="cv-logo"><img src="${logoUrl}"></div>` : ''}</div>
    <div class="cv-title"><div class="bar4"></div><h1>Thank you</h1><p>We would be happy to help you choose the right machine</p><div class="bar4"></div></div>
    <div class="cv-grid">${backSet.map((s, i) => tile(s, i + 3)).join('')}</div>
    <div class="bk-contact">
      ${company.addresses.map((a) => `<div><b>${esc(a.label)}</b>${esc(a.text)}</div>`).join('')}
      <div><b>Phone / WhatsApp</b>${esc(company.phones.join('  ·  '))}</div>
      <div><b>Email</b>${company.emails.map((e) => `${esc(e.label)}: ${esc(e.address)}`).join('<br>')}</div>
    </div>
    <p class="bk-note">Specifications are subject to change. Please contact us to confirm details for your requirement.</p>
  </section>`

  const css = `
${fontCss}
@page{size:A4;margin:0}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:"Barlow","Helvetica Neue",Arial,sans-serif;color:#1B2433;font-size:11.5px;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.sheet{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;break-after:page;background:#fff}
.sheet:last-child{page-break-after:auto;break-after:auto}
/* page header band */
.ph{height:19mm;display:flex;align-items:center;justify-content:space-between;padding:0 12mm;background:linear-gradient(100deg,#0C1830 0%,#14264A 55%,var(--ac) 130%);color:#fff;border-bottom:1.6mm solid var(--ac)}
.ph-t span{font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:26px;letter-spacing:.04em;text-transform:uppercase}
.ph-t em{display:block;font-style:normal;font-size:10px;color:#cfd9ee;margin-top:-1px;max-width:130mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph-logo{height:13mm;background:#fff;border-radius:2mm;padding:1mm 3mm;display:flex;align-items:center}.ph-logo img{height:11mm;width:auto}
/* footer */
.pf{position:absolute;left:0;right:0;bottom:0;height:11mm;display:flex;align-items:center;justify-content:space-between;gap:6mm;padding:0 12mm;font-size:8.8px;color:#5B677A;border-top:.3mm solid #E4E8EF;background:#F5F7FA}
.pf span:nth-child(2){flex:1;text-align:center}.pf b{font-family:"Barlow Condensed",sans-serif;font-size:15px;color:#14264A;min-width:8mm;text-align:right}
/* cards: two per page */
.cards{position:absolute;left:12mm;right:12mm;top:24mm;bottom:14mm;display:grid;gap:5mm}
.cards.two{grid-template-rows:1fr 1fr}.cards.one{grid-template-rows:1fr}
.card{border:.3mm solid #DCE3EE;border-radius:2.2mm;overflow:hidden;display:flex;flex-direction:column;min-height:0;box-shadow:0 .4mm 1.6mm rgba(20,38,74,.08);background:#fff}
.bar{flex:none;display:flex;align-items:stretch;background:#14264A;color:#fff;min-height:11mm}
.bar .code{display:flex;align-items:center;padding:0 5mm;background:var(--ac);font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:24px;letter-spacing:.02em;white-space:nowrap}
.bar .nm{flex:1;display:flex;flex-direction:column;justify-content:center;padding:1.2mm 4mm;font-weight:600;font-size:13.5px;line-height:1.15;min-width:0}
.bar .nm small{font-size:8.6px;letter-spacing:.14em;text-transform:uppercase;color:#9fb4dd;font-weight:600}
.bar .chip{align-self:center;margin-right:4mm;background:#F5A524;color:#0C1830;font-weight:700;font-size:12px;padding:1mm 3.6mm;border-radius:10mm;white-space:nowrap}
.body{flex:1;min-height:0;display:flex;overflow:hidden}
.card.flip .body{flex-direction:row-reverse}
.info{flex:1 1 62%;padding:3.2mm 4mm;min-width:0;overflow:hidden}
.short{margin:0 0 2mm;color:#5B677A;font-size:11px}
table{width:100%;border-collapse:collapse;font-size:10.2px}
th,td{border-bottom:.25mm solid #E4E8EF;padding:.8mm 1.8mm;text-align:left;vertical-align:top}
th{width:33%;color:#14264A;background:#F5F7FA;font-weight:600}
tr.mrow th,tr.mrow td{background:var(--ac);color:#fff;border-bottom:0;font-weight:700;font-size:11px;letter-spacing:.04em}
.pic{flex:0 0 38%;position:relative;display:flex;align-items:center;justify-content:center;padding:9mm 3mm 3mm;background:linear-gradient(180deg,#fff,#F5F7FA)}
.pic img{max-width:100%;max-height:100%;object-fit:contain}
.tag{position:absolute;top:3mm;left:50%;transform:translateX(-50%);background:var(--ac);color:#fff;font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:17px;letter-spacing:.05em;padding:.7mm 5mm;border-radius:1.4mm;box-shadow:0 .5mm 1.4mm rgba(0,0,0,.2);white-space:nowrap}
.card.roomy table{font-size:12.2px}.card.roomy th,.card.roomy td{padding:1.9mm 2.4mm}.card.roomy .short{font-size:12.2px;margin-bottom:3.2mm}.card.roomy tr.mrow th,.card.roomy tr.mrow td{font-size:13px}
.card.mid table{font-size:11px}.card.mid th,.card.mid td{padding:1.1mm 2mm}
.feat{margin:4mm 0 0;padding:0;list-style:none}.feat li{position:relative;padding:.8mm 0 .8mm 5mm;font-size:12px;color:#1B2433}.feat li::before{content:"";position:absolute;left:0;top:2.2mm;width:2.4mm;height:2.4mm;border-radius:50%;background:var(--ac)}
.tag::after,.tile span::after{content:"";position:absolute;left:50%;bottom:-1.7mm;transform:translateX(-50%);border:1.9mm solid transparent;border-top-color:var(--ac);border-bottom:0}
/* spare parts */
.parts{position:absolute;left:12mm;right:12mm;top:25mm;bottom:15mm;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:4mm}
.part{border:.3mm solid #DCE3EE;border-top:1.1mm solid var(--ac);border-radius:1.8mm;padding:2.4mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:0;overflow:hidden}
.part img{width:100%;flex:1;min-height:0;object-fit:contain;margin-bottom:1.6mm}.part b{font-size:11px;color:#14264A;line-height:1.2}.part span{font-size:8.8px;color:#5B677A;margin-top:.8mm;line-height:1.25}
/* contents */
.toc{list-style:none;margin:0;padding:0;position:absolute;left:18mm;right:18mm;top:34mm}
.toc li{display:flex;align-items:center;gap:4mm;padding:4.4mm 0;border-bottom:.25mm dotted #b8c2d4;font-size:16px}
.toc i{width:3.2mm;height:9mm;background:var(--ac);border-radius:1mm}.toc span{flex:1;font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:25px;color:#14264A}.toc em{font-style:normal;color:#5B677A;font-size:13px}.toc b{font-family:"Barlow Condensed",sans-serif;font-size:23px;min-width:10mm;text-align:right;color:var(--ac)}
/* cover / back */
.cover{background:linear-gradient(170deg,#ffffff 0%,#EAF1FD 46%,#DFF4F3 100%);display:flex;flex-direction:column;align-items:center}
.cover::before{content:"";position:absolute;left:0;right:0;top:0;height:5mm;background:linear-gradient(90deg,#2F6FDE,#0FA3A3 35%,#F5A524 68%,#EF5B5B)}
.cv-top{margin-top:22mm}.cv-logo{background:#fff;border-radius:3mm;padding:3mm 8mm;box-shadow:0 1mm 4mm rgba(20,38,74,.12)}.cv-logo img{height:30mm;width:auto;display:block}
.cv-title{text-align:center;margin-top:12mm}.cv-title h1{font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:56px;line-height:1;letter-spacing:.05em;text-transform:uppercase;color:#2F6FDE;margin:4mm 0 2mm}
.cv-title p{margin:0;font-size:18px;color:#14264A;font-weight:600}.bar4{width:70mm;height:1.6mm;margin:0 auto;background:linear-gradient(90deg,#2F6FDE,#0FA3A3,#F5A524,#EF5B5B);border-radius:1mm}
.cv-grid{margin-top:12mm;width:176mm;display:grid;grid-template-columns:repeat(3,1fr);gap:5mm}
.tile{position:relative;height:58mm;background:#fff;border-radius:2.6mm;border-bottom:1.4mm solid var(--ac);box-shadow:0 .8mm 3mm rgba(20,38,74,.14);display:flex;align-items:center;justify-content:center;padding:9mm 3mm 3mm}
.tile img{max-width:100%;max-height:100%;object-fit:contain}
.tile span{position:absolute;top:2.4mm;left:50%;transform:translateX(-50%);background:var(--ac);color:#fff;font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:16px;letter-spacing:.05em;padding:.5mm 4mm;border-radius:1.3mm;white-space:nowrap}
.cv-foot{position:absolute;left:0;right:0;bottom:12mm;text-align:center;display:flex;flex-direction:column;gap:1.2mm;font-size:13px;color:#14264A}.cv-foot b{font-size:15px}
.back .cv-grid{margin-top:9mm}.back .tile{height:58mm}
.bk-contact{position:absolute;left:18mm;right:18mm;bottom:22mm;display:grid;grid-template-columns:1fr 1fr;gap:5mm 10mm;font-size:12.5px;color:#14264A}
.bk-contact b{display:block;color:#2F6FDE;font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.6mm}
.bk-note{position:absolute;left:0;right:0;bottom:9mm;text-align:center;font-size:10px;color:#5B677A;margin:0}
`
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(company.legalName)} — Product Catalogue</title><style>${css}</style></head><body>${cover}${contents}${pages.join('')}${back}</body></html>`
  return { html, total: page, toc }
}

// ---------- overflow check: render once, list cards whose content is clipped ----------
const checkScript = `<script>
document.fonts.ready.then(()=>{setTimeout(()=>{
  const bad=[];document.querySelectorAll('.card').forEach(c=>{const b=c.querySelector('.body');const i=c.querySelector('.info');const p=c.querySelector('.pic');
    if(i.scrollHeight>i.clientHeight+1||b.scrollHeight>b.clientHeight+1) bad.push(c.dataset.slug)});
  const pg=[];document.querySelectorAll('.part').forEach((e,k)=>{if(e.scrollHeight>e.clientHeight+1)pg.push(k)});
  const r=document.createElement('pre');r.id='report';r.textContent=JSON.stringify({bad,parts:pg});document.body.appendChild(r)},400)})
</script>`
function findOverflow(html) {
  const f = path.join(tmp, 'check.html')
  fs.writeFileSync(f, html.replace('</body>', checkScript + '</body>'))
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--virtual-time-budget=20000', '--dump-dom', 'file://' + f], { encoding: 'utf8', maxBuffer: 200 * 1024 * 1024, timeout: 180000 })
  const m = dom.match(/<pre id="report">(.*?)<\/pre>/s)
  if (!m) throw new Error('overflow check did not run')
  return JSON.parse(m[1].replace(/&quot;/g, '"'))
}

let built
for (let round = 0; round < 4; round++) {
  built = buildHtml()
  const rep = findOverflow(built.html)
  if (!rep.bad.length) { if (rep.parts.length) console.warn('warning: some spare-part tiles are tight:', rep.parts.length); break }
  rep.bad.forEach((s) => solo.add(s))
  console.log(`round ${round + 1}: ${rep.bad.length} product(s) need a full page → ${rep.bad.join(', ')}`)
  if (round === 3) throw new Error('layout still overflowing: ' + rep.bad.join(', '))
}

const htmlFile = path.join(tmp, 'catalogue.html')
fs.writeFileSync(htmlFile, built.html)
const out = path.join(root, 'public', 'FLEET-Catalogue.pdf')
execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files', `--print-to-pdf=${out}`, 'file://' + htmlFile], { stdio: 'ignore', timeout: 240000 })
console.log(`catalogue: ${products.length} products, ${built.total} pages → ${out} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`)
fs.rmSync(tmp, { recursive: true, force: true })
