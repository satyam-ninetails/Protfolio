// Builds public/FLEET-Catalogue.pdf from the same data the website uses (macOS + Google Chrome).
//   node scripts/build-catalogue.mjs
// Re-run it whenever products change, then rebuild/deploy the site.
//
// Pages: picture-led cover (FL-50A, the best seller, largest) · contents · About Us · products
// (two per page where the specs fit; chosen pages carry three or one) with a coloured model bar,
// a model tag on each machine and bold spec values · spare-parts grid · closing page with a site photo.
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { products } from '../src/data/products.js'
import { categories } from '../src/data/categories.js'
import { company } from '../src/data/company.js'
import { aboutIntro, aboutParagraphs, aboutValues } from '../src/data/about.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'fleet-cat-'))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// ---------- images (small JPEG copies keep the PDF light) ----------
const cache = new Map()
const sizeOf = (file) => {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], { encoding: 'utf8' })
  return [Number(out.match(/pixelWidth: (\d+)/)[1]), Number(out.match(/pixelHeight: (\d+)/)[1])]
}
const img = (webPath, max = 900) => {
  if (!webPath) return null
  const key = webPath + max
  if (cache.has(key)) return cache.get(key)
  const src = webPath.startsWith('/images') ? path.join(root, 'public', webPath) : webPath
  if (!fs.existsSync(src)) return null
  const out = path.join(tmp, `${cache.size}.jpg`)
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '78', '-Z', String(max), src, '--out', out], { stdio: 'ignore' })
  const [w, h] = sizeOf(out)
  const val = { url: 'file://' + out, aspect: w / h }
  cache.set(key, val)
  return val
}
const bySlug = Object.fromEntries(products.map((p) => [p.slug, p]))
const picOf = (slug, max = 700) => img(bySlug[slug]?.images?.[0], max)

// ---------- fonts (bundled, so the PDF always matches the website) ----------
const fonts = JSON.parse(fs.readFileSync(path.join(root, 'scripts/fonts/fonts.json'), 'utf8'))
const fontCss = fonts.map(([fam, w, fn]) => `@font-face{font-family:"${fam}";font-weight:${w};src:url("file://${path.join(root, 'scripts/fonts', fn)}") format("woff2")}`).join('')

// ---------- helpers ----------
const spec = (p, k) => (p.specifications.find(([a]) => a === k) || [])[1]
const modelCode = (p) => {
  const m = spec(p, 'Model')
  if (m) return String(m).replace(/\s*\(.*$/, '').trim()
  const first = p.name.split(' ')[0] // no Model row: use the leading model word if it has a digit (e.g. FL-114A)
  return /\d/.test(first) && first.length <= 14 ? first : null
}
const sizeChip = (p) => {
  const fromName = p.name.match(/\(([^)]*["”mm][^)]*)\)\s*$/)
  if (fromName) return fromName[1].replace(/\s+/g, '')
  const w = p.specifications.find(([k]) => /^Welding range/.test(k))
  if (w) { const n = String(w[1]).match(/\d+(\.\d+)?/g)?.map(Number); if (n?.length) return `${Math.min(...n)}–${Math.max(...n)} mm` }
  for (const k of ['Capacity', 'Size', 'Cutting range', 'Pipe diameter', 'Bending range']) { const v = spec(p, k); if (v && String(v).length <= 24) return String(v).replace(/\s+/g, ' ') }
  return null
}
const ACCENTS = ['#2F6FDE', '#0FA3A3', '#E8920C', '#EF5B5B', '#7A4FD6', '#2F6FDE', '#0FA3A3', '#E8920C', '#EF5B5B']
const catName = (c) => c.name.replace(/\s+Machines?$/i, '')
const PHONES = company.phones.join('   ·   ')
const EMAILS = company.emails.map((e) => e.address).join('   ·   ')

// Pages that must hold specific products together (Vikas's page requests). Everything else is paired in order.
const GROUPS = {
  'roll-grooving-machine': [['fl9a-roll-grooving-machine', 'fl9a1-roll-grooving-machine'], ['fl12a-roll-grooving-machine', 'fl12a1-roll-grooving-machine'], ['fl12p-roll-grooving-machine', 'fl-24-roll-grooving-machine']],
  'hole-saw-cutting-machines': [['fl-114a-hole-saw-cutting-machine', 'fl-150a-hole-saw-cutting-machine'], ['k-114-hole-saw-cutting-machine', 'bi-metal-hole-saw-cutters', 'tct-hole-saw-cutters']],
  'pressure-test-pumps': [['zd-40-pressure-test-pump', 'tp-50-pressure-test-pump', 'fl-40a-electric-pressure-test-pump']],
  'pipe-bending-machines': [['hb-50-hydraulic-pipe-bender', 'hb-80-hydraulic-pipe-bender'], ['hb-100-hydraulic-pipe-bender', 'ehb-50-electric-pipe-bender'], ['portable-conduit-pipe-bender']],
}

// ---------- page pieces ----------
const logo = img('/images/logo/logo.png', 700)
const header = (title, ac, sub = '') => `
  <header class="ph" style="--ac:${ac}">
    <div class="ph-t"><span>${esc(title)}</span>${sub ? `<em>${esc(sub)}</em>` : ''}</div>
    <div class="ph-logo">${logo ? `<img src="${logo.url}">` : ''}</div>
  </header>`
const footer = (n) => `
  <footer class="pf"><span>${esc(company.legalName)}</span><span>${esc(company.phones.join('  ·  '))}  ·  ${esc(company.emails.map((e) => e.address).join('  ·  '))}</span><b>${n}</b></footer>`

const card = (p, ac, flip, catLabel, threeUp) => {
  const code = modelCode(p)
  const chip = sizeChip(p)
  const rows = p.specifications.filter(([k]) => k !== 'Model')
  const im = img(p.images[0], 1100)
  const aspect = im?.aspect || 1
  // wide pictures get more room (stack above the table), nearly square/tall ones sit beside it
  const layout = !threeUp && aspect >= 1.7 ? 'stack' : aspect >= 1.25 ? 'wide' : 'tall'
  const size = rows.length <= 7 ? 'roomy' : rows.length <= 12 ? 'mid' : ''
  const feats = rows.length <= 8 ? (p.features || []).slice(0, 4) : []
  return `
  <article class="card ${size} ${layout}${flip ? ' flip' : ''}" data-slug="${esc(p.slug)}" style="--ac:${ac}">
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
        ${im ? `<img src="${im.url}">` : ''}
      </div>
    </div>
  </article>`
}

// ---------- document ----------
const tiers = new Map() // page key -> density tier (0 normal … 3 tightest), raised by the overflow check
const splitPages = new Set() // auto-paired pages that could not fit even at the tightest tier

function layoutPages() {
  const sections = categories.map((c) => ({ c, items: products.filter((p) => p.category === c.slug) })).filter((s) => s.items.length)
  const out = []
  sections.forEach(({ c, items }, si) => {
    const ac = ACCENTS[si % ACCENTS.length]
    if (c.slug === 'spare-parts') {
      for (let i = 0; i < items.length; i += 16) out.push({ kind: 'parts', c, ac, items: items.slice(i, i + 16), first: i === 0, key: `parts-${i}` })
      return
    }
    let groups = GROUPS[c.slug]
    if (!groups) {
      groups = []
      for (let i = 0; i < items.length;) {
        const a = items[i], b = items[i + 1]
        const pair = b && !splitPages.has(a.slug)
        groups.push(pair ? [a.slug, b.slug] : [a.slug]); i += pair ? 2 : 1
      }
    } else {
      groups = groups.map((g) => [...g])
      const used = new Set(groups.flat()) // anything not named in the plan keeps its place at the end
      items.filter((p) => !used.has(p.slug)).forEach((p) => groups.push([p.slug]))
    }
    groups.forEach((g, gi) => out.push({ kind: 'cards', c, ac, slugs: g, first: gi === 0, key: g[0], cat: si }))
  })
  return out
}

function buildHtml() {
  const pages = layoutPages()
  let n = 4 // 1 cover, 2 contents, 3 about
  const toc = [{ name: 'About Us', count: null, page: 3, ac: '#2F6FDE' }]
  let lastCat = null
  const body = pages.map((pg) => {
    const pageNo = n++
    if (lastCat !== pg.c.slug) { toc.push({ name: pg.c.name, count: products.filter((p) => p.category === pg.c.slug).length, page: pageNo, ac: pg.ac }); lastCat = pg.c.slug }
    if (pg.kind === 'parts') {
      return `<section class="sheet" data-key="${pg.key}">${header(pg.c.name, pg.ac, pg.first ? pg.c.description : 'continued')}
        <div class="parts">${pg.items.map((p, i) => { const im = img(p.images[0], 460); return `<div class="part" style="--ac:${pg.ac}">${im ? `<img src="${im.url}">` : ''}<b>${esc(p.name)}</b>${pg.first && i < 2 ? `<span>${esc(p.shortDescription)}</span>` : ''}</div>` }).join('')}</div>
        ${footer(pageNo)}</section>`
    }
    const list = pg.slugs.map((s) => bySlug[s]).filter(Boolean)
    const tier = tiers.get(pg.key) ?? (list.length >= 3 ? 2 : 0)
    let flip = (pg.cat ?? 0) % 2 === 1
    return `<section class="sheet t${tier}" data-key="${esc(pg.key)}">${header(pg.c.name, pg.ac, pg.first ? pg.c.description : '')}
      <div class="cards n${list.length}">${list.map((p) => { const h = card(p, pg.ac, flip, catName(pg.c), list.length >= 3); flip = !flip; return h }).join('')}</div>
      ${footer(pageNo)}</section>`
  })

  // ---- cover: reference style — blue wave, photo diamonds, best seller (FL-50A) biggest ----
  const dia = (slug, cls, label, ac) => { const u = picOf(slug, 700); return u ? `<div class="dwrap ${cls}"><div class="dia" style="--ac:${ac}"><img src="${u.url}"></div><span class="dlab" style="--ac:${ac}">${esc(label)}</span></div>` : '' }
  const best = picOf('fl50a-pipe-threading-machine', 900)
  const cover = `<section class="sheet cover2">
    <svg class="wave" viewBox="0 0 210 120" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#14264A"/><stop offset="1" stop-color="#2F6FDE"/></linearGradient></defs>
      <path d="M0 0H210V62C176 92 140 96 108 80C76 64 40 62 0 92Z" fill="url(#g1)"/><path d="M0 92C40 62 76 64 108 80C140 96 176 92 210 62V74C176 104 140 108 108 92C76 76 40 74 0 104Z" fill="#F5A524"/></svg>
    <div class="c2-logo">${logo ? `<img src="${logo.url}">` : ''}</div>
    <div class="c2-title"><h1>Product<br>Catalogue</h1><p>${esc(company.legalName)}</p></div>
    <div class="dwrap hero"><div class="dia big" style="--ac:#2F6FDE">${best ? `<img src="${best.url}">` : ''}</div><span class="dlab bigl">FL50A</span><span class="seller">BEST<br>SELLER</span></div>
    ${dia('fl12a-roll-grooving-machine', 'd1', 'FL12A', '#0FA3A3')}
    ${dia('fl-114a-hole-saw-cutting-machine', 'd2', 'FL-114A', '#E8920C')}
    ${dia('hb-50-hydraulic-pipe-bender', 'd3', 'HB-50', '#7A4FD6')}
    ${dia('fl-315h4-hdpe-butt-fusion-machine', 'd4', 'FL-315H4', '#EF5B5B')}
    <div class="c2-foot"><b class="strap">${esc(company.strapline)}</b>
      <div class="c2-contact"><div><i>Phone / WhatsApp</i><strong>${esc(PHONES)}</strong></div><div><i>Email</i><strong>${esc(EMAILS)}</strong></div></div></div>
  </section>`

  const contents = `<section class="sheet">${header('Contents', '#2F6FDE', 'About us · machines · tools · spare parts')}
    <ul class="toc">${toc.map((t) => `<li style="--ac:${t.ac}"><i></i><span>${esc(t.name)}</span><em>${t.count ? `${t.count} item${t.count === 1 ? '' : 's'}` : ''}</em><b>${t.page}</b></li>`).join('')}</ul>
    ${footer(2)}</section>`

  const about = `<section class="sheet">${header('About Us', '#2F6FDE', company.tagline)}
    <div class="ab">
      <p class="ab-lead">${esc(aboutIntro)}</p>
      ${aboutParagraphs(company.legalName).map((t) => `<p>${esc(t)}</p>`).join('')}
      <h3>What we stand for</h3>
      <div class="ab-vals">${aboutValues.map(([t, d], i) => `<div style="--ac:${ACCENTS[i]}"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
      <h3>What we offer</h3>
      <div class="ab-chips">${categories.map((c, i) => `<span style="--ac:${ACCENTS[i % ACCENTS.length]}">${esc(c.name)}</span>`).join('')}</div>
    </div>
    ${footer(3)}</section>`

  // ---- closing page: a site photo (fire-fighting pipework), no product pictures ----
  const EP_ICONS = {'phone': '<path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/>', 'mail': '<path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 8.2L4.5 7.5v.4L12 13.600 19.500 7.900v-.4z"/>', 'pin': '<path d="M12 2a7 7 0 00-7 7c0 5.200 7 13 7 13s7-7.800 7-13a7 7 0 00-7-7zm0 9.500A2.500 2.500 0 1112 6.500a2.500 2.500 0 010 5z"/>'}
  const sitePic = img(path.join(root, 'scripts/assets/construction-site-fire-pipes.jpg'), 1600)
  const ico = (k) => `<svg viewBox="0 0 24 24" width="15" height="15" fill="#0E1B38">${EP_ICONS[k]}</svg>`
  const back = `<section class="sheet endp">
    <div class="ep-amber"></div>
    <div class="ep-photo">${sitePic ? `<img src="${sitePic.url}">` : ''}<div class="ep-shade"></div>
      <div class="ep-logo">${logo ? `<img src="${logo.url}">` : ''}</div>
      <div class="ep-title"><span class="ep-kick">${esc(company.legalName)}</span><h1>Thank you</h1><p>We would be happy to help you choose the right machine</p></div></div>
    <div class="ep-body">
      <h2>Get in touch</h2>
      <div class="ep-grid">
        <div class="ep-c">${ico('phone')}<div><i>Phone / WhatsApp</i><strong class="big">${esc(PHONES)}</strong></div></div>
        <div class="ep-c">${ico('mail')}<div><i>Email</i><strong class="big">${company.emails.map((e) => `${esc(e.address)}`).join('<br>')}</strong></div></div>
        ${company.addresses.map((a) => `<div class="ep-c">${ico('pin')}<div><i>${esc(a.label)}</i><strong>${esc(a.text)}</strong></div></div>`).join('')}
      </div>
      <div class="ep-chips">${categories.map((c) => `<span>${esc(c.name)}</span>`).join('')}</div>
      <p class="ep-note">Specifications are subject to change. Please contact us to confirm details for your requirement.</p>
    </div>
  </section>`

  const css = `
${fontCss}
@page{size:A4;margin:0}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:"Barlow","Helvetica Neue",Arial,sans-serif;color:#1B2433;font-size:11.5px;line-height:1.35;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.sheet{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always;break-after:page;background:#fff}
.sheet:last-child{page-break-after:auto;break-after:auto}
/* page header band — lighter blue */
.ph{position:relative;height:21mm;display:flex;align-items:center;justify-content:space-between;padding:0 12mm 2.2mm;color:#fff}
.ph>*{position:relative;z-index:1}
/* angled lower edge with a coloured accent strip (category colour) */
.ph::before,.ph::after{content:"";position:absolute;left:0;right:0;top:0;clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 4mm))}
.ph::before{bottom:0;background:var(--ac)}
.ph::after{bottom:1.6mm;background:linear-gradient(100deg,#3F83E8 0%,#6AA8F6 100%)}
.ph-t span{font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:26px;letter-spacing:.04em;text-transform:uppercase}
.ph-t em{display:block;font-style:normal;font-size:10px;color:#EAF2FF;margin-top:-1px;max-width:130mm;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ph-logo{height:13mm;background:#fff;border-radius:2mm;padding:1mm 3mm;display:flex;align-items:center}.ph-logo img{height:11mm;width:auto}
.pf{position:absolute;left:0;right:0;bottom:0;height:11mm;display:flex;align-items:center;justify-content:space-between;gap:6mm;padding:0 12mm;font-size:8.8px;font-weight:600;color:#3B475A;border-top:.3mm solid #E4E8EF;background:#F5F7FA}
.pf span:nth-child(2){flex:1;text-align:center}.pf b{font-family:"Barlow Condensed",sans-serif;font-size:15px;color:#14264A;min-width:8mm;text-align:right}
/* cards */
.cards{position:absolute;left:12mm;right:12mm;top:24mm;bottom:14mm;display:grid;gap:5mm}
.cards.n1{grid-template-rows:1fr}.cards.n2{grid-template-rows:1fr 1fr}.cards.n3{grid-template-rows:1fr 1fr 1fr;gap:3.5mm}
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
td{font-weight:700;color:#0C1830}
tr.mrow th,tr.mrow td{background:var(--ac);color:#fff;border-bottom:0;font-weight:700;font-size:11px;letter-spacing:.04em}
.pic{flex:0 0 38%;position:relative;display:flex;align-items:center;justify-content:center;padding:9mm 3mm 3mm;background:linear-gradient(180deg,#fff,#F5F7FA)}
.pic img{max-width:100%;max-height:100%;object-fit:contain}
.tag{position:absolute;top:3mm;left:50%;transform:translateX(-50%);background:var(--ac);color:#fff;font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:17px;letter-spacing:.05em;padding:.7mm 5mm;border-radius:1.4mm;box-shadow:0 .5mm 1.4mm rgba(0,0,0,.2);white-space:nowrap}
.tag::after,.dlab::after{content:"";position:absolute;left:50%;bottom:-1.7mm;transform:translateX(-50%);border:1.9mm solid transparent;border-top-color:var(--ac);border-bottom:0}
.card.roomy table{font-size:12.2px}.card.roomy th,.card.roomy td{padding:1.9mm 2.4mm}.card.roomy .short{font-size:12.2px;margin-bottom:3.2mm}.card.roomy tr.mrow th,.card.roomy tr.mrow td{font-size:13px}
.card.mid table{font-size:11px}.card.mid th,.card.mid td{padding:1.1mm 2mm}
.feat{margin:4mm 0 0;padding:0;list-style:none}.feat li{position:relative;padding:.8mm 0 .8mm 5mm;font-size:12px;color:#1B2433}.feat li::before{content:"";position:absolute;left:0;top:2.2mm;width:2.4mm;height:2.4mm;border-radius:50%;background:var(--ac)}
/* picture layouts: wide pictures get more room, very wide ones go above the table */
.card.wide .info{flex-basis:50%}.card.wide .pic{flex-basis:50%}
.card.stack .body{flex-direction:column}.card.stack .pic{flex:0 0 auto;height:47mm;padding:8mm 4mm 2mm;order:-1;width:100%}
.card.stack .info{flex:1 1 auto;padding:2.2mm 4mm}.card.stack .short{display:none}.card.stack.flip .body{flex-direction:column}
.card.stack .feat{display:none}
.card.stack .pic .tag{top:2.6mm}
/* density tiers for pages that carry more (or longer) cards: t1 is a gentle step, t4 the tightest */
.t1 table{font-size:10.8px!important}.t1 th,.t1 td{padding:.9mm 2mm!important}.t1 .card .short{font-size:10.5px;margin-bottom:1.6mm}.t1 .info{padding:2.6mm 3.6mm}
.t2 .card .short,.t2 .card .feat{display:none}.t2 table{font-size:9.6px!important}.t2 th,.t2 td{padding:.55mm 1.8mm!important}.t2 .bar{min-height:9.5mm}.t2 .bar .code{font-size:20px}.t2 .bar .nm{font-size:11.8px}.t2 .tag{font-size:14px;top:2mm}.t2 .pic{padding:7mm 2mm 2mm}.t2 .info{padding:2mm 3.2mm}
.t3 .card .short,.t3 .card .feat{display:none}.t3 table{font-size:8.8px!important}.t3 th,.t3 td{padding:.38mm 1.6mm!important}.t3 .bar{min-height:8.5mm}.t3 .bar .code{font-size:18px}.t3 .bar .nm{font-size:10.8px}.t3 .tag{font-size:12.5px;top:1.8mm}.t3 .pic{padding:6mm 2mm 1.5mm}.t3 .info{padding:1.6mm 3mm}
.t4 .card .short,.t4 .card .feat{display:none}.t4 table{font-size:7.9px!important}.t4 th,.t4 td{padding:.25mm 1.5mm!important}.t4 .bar{min-height:7.5mm}.t4 .bar .code{font-size:16px}.t4 .bar .nm{font-size:9.8px}.t4 .tag{font-size:11px;top:1.4mm}.t4 .pic{padding:5mm 2mm 1mm}.t4 .info{padding:1.2mm 2.6mm}
/* spare parts */
.parts{position:absolute;left:12mm;right:12mm;top:25mm;bottom:15mm;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:4mm}
.part{border:.3mm solid #DCE3EE;border-top:1.1mm solid var(--ac);border-radius:1.8mm;padding:2.4mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;min-height:0;overflow:hidden}
.part img{width:100%;flex:1;min-height:0;object-fit:contain;margin-bottom:1.6mm}.part b{font-size:11px;color:#14264A;line-height:1.2}.part span{font-size:8.8px;color:#5B677A;margin-top:.8mm;line-height:1.25}
/* contents */
.toc{list-style:none;margin:0;padding:0;position:absolute;left:18mm;right:18mm;top:34mm}
.toc li{display:flex;align-items:center;gap:4mm;padding:3.9mm 0;border-bottom:.25mm dotted #b8c2d4}
.toc i{width:3.2mm;height:9mm;background:var(--ac);border-radius:1mm}.toc span{flex:1;font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:25px;color:#14264A}.toc em{font-style:normal;color:#5B677A;font-size:13px}.toc b{font-family:"Barlow Condensed",sans-serif;font-size:23px;min-width:10mm;text-align:right;color:var(--ac)}
/* about */
.ab{position:absolute;left:16mm;right:16mm;top:28mm;bottom:16mm}
.ab-lead{font-family:"Barlow Condensed",sans-serif;font-weight:700;font-size:23px;line-height:1.2;color:#14264A;border-left:1.6mm solid #F5A524;padding-left:4mm;margin:0 0 5mm}
.ab p{font-size:13.5px;line-height:1.55;margin:0 0 3.4mm;color:#1B2433}
.ab p.ab-lead{font-size:23px;line-height:1.2;margin:0 0 5mm}
.ab h3{font-family:"Barlow Condensed",sans-serif;font-size:21px;color:#2F6FDE;margin:6mm 0 2.4mm;text-transform:uppercase;letter-spacing:.06em}
.ab-vals{display:grid;grid-template-columns:1fr 1fr;gap:3.2mm}.ab-vals div{border:.3mm solid #DCE3EE;border-top:1.2mm solid var(--ac);border-radius:1.8mm;padding:3mm 3.4mm}.ab-vals b{display:block;font-size:13.5px;color:#14264A}.ab-vals span{font-size:11.5px;color:#3B475A}
.ab-chips{display:flex;flex-wrap:wrap;gap:2.2mm}.ab-chips span{background:var(--ac);color:#fff;font-weight:600;font-size:11.5px;padding:1.2mm 3.6mm;border-radius:10mm}
/* cover (reference style) */
.cover2{background:#fff}
.cover2 .wave{position:absolute;left:0;top:0;width:210mm;height:120mm}
.c2-logo{position:absolute;left:14mm;top:13mm;background:#fff;border-radius:2.6mm;padding:2.6mm 6mm;box-shadow:0 1mm 4mm rgba(0,0,0,.22)}.c2-logo img{height:25mm;display:block}
.c2-title{position:absolute;right:14mm;top:16mm;text-align:right;color:#fff}
.c2-title h1{font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:60px;line-height:.95;letter-spacing:.04em;text-transform:uppercase;margin:0;color:#fff}
.c2-title p{margin:3mm 0 0;font-size:14px;font-weight:700;letter-spacing:.05em;color:#fff}
.dwrap{position:absolute;display:flex;flex-direction:column;align-items:center}
.dia{width:var(--s);height:var(--s);transform:rotate(45deg);overflow:hidden;border:2.2mm solid #fff;box-shadow:0 1.2mm 4mm rgba(20,38,74,.28);background:#fff;display:flex;align-items:center;justify-content:center;outline:.7mm solid var(--ac)}
.dia img{width:140%;height:140%;object-fit:contain;transform:rotate(-45deg)}
.dlab{position:absolute;background:var(--ac);color:#fff;font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:15px;letter-spacing:.05em;padding:.6mm 4mm;border-radius:1.3mm;white-space:nowrap}
.hero{left:50%;top:106mm;margin-left:-47mm;width:94mm;height:94mm}
.hero .dia.big{--s:62mm;margin-top:16mm}.hero .dlab.bigl{--ac:#2F6FDE;font-size:22px;padding:1mm 7mm;bottom:-6mm}
.seller{position:absolute;right:-12mm;top:2mm;width:25mm;height:25mm;border-radius:50%;background:#EF5B5B;color:#fff;font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:16px;line-height:1.05;display:flex;align-items:center;justify-content:center;text-align:center;box-shadow:0 1mm 3mm rgba(0,0,0,.3);transform:rotate(12deg);border:1.2mm solid #fff}
.d1,.d2,.d3,.d4{width:50mm;height:50mm}.dwrap .dia{--s:34mm;margin-top:8mm}.hero .dia.big{--s:62mm;margin-top:16mm}.dwrap .dlab{bottom:2mm}.hero .dlab.bigl{bottom:-6mm}
.dwrap.d1{left:11mm;top:112mm}.dwrap.d2{right:11mm;top:112mm}.dwrap.d3{left:11mm;top:176mm}.dwrap.d4{right:11mm;top:176mm}
.c2-foot{position:absolute;left:0;right:0;bottom:0;height:46mm;background:linear-gradient(100deg,#14264A,#2F6FDE);color:#fff;padding:7mm 14mm;border-top:1.6mm solid #F5A524}
.c2-foot .strap{display:block;text-align:center;font-size:13.5px;margin-bottom:4mm;font-weight:700}
.c2-contact{display:grid;grid-template-columns:1fr 1fr;gap:6mm}.c2-contact i{display:block;font-style:normal;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#FFD27A;font-weight:700;margin-bottom:.6mm}.c2-contact strong{font-size:14.5px;font-weight:800;letter-spacing:.01em;line-height:1.35}
/* closing page: diagonal photo, dark contact panel */
.endp{background:linear-gradient(165deg,#0E1B38 0%,#17408F 100%)}
.ep-photo,.ep-amber{position:absolute;left:0;right:0;top:0;clip-path:polygon(0 0,100% 0,100% 100%,0 calc(100% - 26mm))}
.ep-photo{height:190mm;background:#14264A;overflow:hidden}
.ep-amber{height:195mm;background:#F5A524}
.ep-photo>img{width:100%;height:100%;object-fit:cover}
.ep-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(12,24,48,.10) 0%,rgba(12,24,48,.80) 100%)}
.ep-logo{position:absolute;left:14mm;top:14mm;background:#fff;border-radius:2.6mm;padding:2.4mm 6mm;box-shadow:0 1mm 4mm rgba(0,0,0,.3)}.ep-logo img{height:22mm;display:block}
.ep-title{position:absolute;left:14mm;right:14mm;bottom:34mm;color:#fff}.ep-kick{display:block;font-size:11px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#FFD27A;margin-bottom:2mm}
.ep-title h1{font-family:"Barlow Condensed",sans-serif;font-weight:800;font-size:64px;letter-spacing:.05em;text-transform:uppercase;margin:0;line-height:1}.ep-title p{margin:2mm 0 0;font-size:16px;font-weight:600}
.ep-body{position:absolute;left:0;right:0;top:202mm;bottom:0;padding:0 14mm;color:#fff}
.ep-body h2{margin:0 0 4mm;font-family:"Barlow Condensed",sans-serif;font-size:22px;letter-spacing:.1em;text-transform:uppercase;color:#FFD27A}
.ep-grid{display:grid;grid-template-columns:1fr 1fr;gap:5.5mm 10mm}
.ep-c{display:flex;gap:3mm;align-items:flex-start}.ep-c svg{flex:none;box-sizing:content-box;width:15px;height:15px;padding:1.6mm;border-radius:50%;background:#F5A524}
.ep-c i{display:block;font-style:normal;color:#FFD27A;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;margin-bottom:.5mm}
.ep-c strong{font-size:12px;font-weight:800;line-height:1.35}.ep-c strong.big{font-size:15px}
.ep-chips{display:flex;flex-wrap:wrap;gap:2mm;margin-top:6mm}.ep-chips span{border:.3mm solid rgba(255,255,255,.55);border-radius:10mm;padding:.8mm 3.2mm;font-size:9.5px;font-weight:600;color:#fff}
.ep-note{position:absolute;left:14mm;right:14mm;bottom:6mm;margin:0;font-size:9.5px;color:#BFD0F2;text-align:center}
`
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(company.legalName)} — Product Catalogue</title><style>${css}</style></head><body>${cover}${contents}${about}${body.join('')}${back}</body></html>`
  return { html, total: n, toc }
}

// ---------- overflow check: render once, report pages whose cards/tiles are clipped ----------
const checkScript = `<script>
document.fonts.ready.then(()=>{setTimeout(()=>{
  const bad=new Set(), other=[];
  document.querySelectorAll('.sheet').forEach(s=>{
    s.querySelectorAll('.card').forEach(c=>{const b=c.querySelector('.body'),i=c.querySelector('.info'); if(i.scrollHeight>i.clientHeight+1||b.scrollHeight>b.clientHeight+1)bad.add(s.dataset.key)});
    s.querySelectorAll('.part').forEach(e=>{if(e.scrollHeight>e.clientHeight+1)other.push(s.dataset.key)});
    const ab=s.querySelector('.ab'); if(ab&&ab.scrollHeight>ab.clientHeight+1) other.push('about');
    const ep=s.querySelector('.ep-body'); if(ep&&ep.scrollHeight>ep.clientHeight+1) other.push('endpage');
    const tc=s.querySelector('.toc'); if(tc&&tc.getBoundingClientRect().bottom>s.getBoundingClientRect().bottom-40) other.push('toc');
  });
  const r=document.createElement('pre');r.id='report';r.textContent=JSON.stringify({bad:[...bad],other});document.body.appendChild(r)},500)})
</script>`
function findOverflow(html) {
  const f = path.join(tmp, 'check.html')
  fs.writeFileSync(f, html.replace('</body>', checkScript + '</body>'))
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--allow-file-access-from-files', '--virtual-time-budget=25000', '--dump-dom', 'file://' + f], { encoding: 'utf8', maxBuffer: 300 * 1024 * 1024, timeout: 240000 })
  const m = dom.match(/<pre id="report">(.*?)<\/pre>/s)
  if (!m) throw new Error('overflow check did not run')
  return JSON.parse(m[1].replace(/&quot;/g, '"'))
}

const planned = new Set(Object.values(GROUPS).map((g) => g[0]))
let built
for (let round = 1; round <= 8; round++) {
  built = buildHtml()
  const rep = findOverflow(built.html)
  if (rep.other.length) console.warn('warning — clipped content on:', [...new Set(rep.other)].join(', '))
  if (!rep.bad.length) break
  for (const key of rep.bad) {
    const t = tiers.get(key) ?? 0
    if (t < 4) tiers.set(key, t + 1)
    else if (!planned.has(key)) splitPages.add(key)
    else console.warn('could not fit the page that starts with', key)
  }
  console.log(`round ${round}: tightened ${rep.bad.length} page(s) → ${rep.bad.join(', ')}`)
  if (round === 8) console.warn('layout still overflowing on: ' + rep.bad.join(', '))
}

const htmlFile = path.join(tmp, 'catalogue.html')
fs.writeFileSync(htmlFile, built.html)
const out = path.join(root, 'public', 'FLEET-Catalogue.pdf')
execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files', `--print-to-pdf=${out}`, 'file://' + htmlFile], { stdio: 'ignore', timeout: 300000 })
console.log(`catalogue: ${products.length} products → ${out} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`)
fs.rmSync(tmp, { recursive: true, force: true })
