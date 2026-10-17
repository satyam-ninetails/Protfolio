// Builds public/FLEET-Catalogue.pdf from the same data the website uses (macOS + Google Chrome).
//   node scripts/build-catalogue.mjs
// Re-run it whenever products change, then rebuild/deploy the site.
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

// small copies keep the PDF light
const cache = new Map()
const img = (webPath, max = 760) => {
  if (!webPath) return null
  if (cache.has(webPath)) return cache.get(webPath)
  const src = path.join(root, 'public', webPath)
  if (!fs.existsSync(src)) return null
  const out = path.join(tmp, String(cache.size) + '.jpg')
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '72', '-Z', String(max), src, '--out', out], { stdio: 'ignore' })
  const url = 'file://' + out
  cache.set(webPath, url)
  return url
}
const logo = img('/images/logo/logo.png', 900)

const spareCat = 'spare-parts'
const sections = categories.map((c) => ({ c, items: products.filter((p) => p.category === c.slug) })).filter((s) => s.items.length)

const productHtml = (p) => `
  <article class="prod">
    <div class="pic">${img(p.images[0]) ? `<img src="${img(p.images[0])}">` : ''}</div>
    <div class="info">
      <h3>${esc(p.name)}</h3>
      <p class="short">${esc(p.shortDescription)}</p>
      <table>${p.specifications.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table>
    </div>
  </article>`

const partsHtml = (items) => `<div class="parts">${items.map((p) => `
  <div class="part">${img(p.images[0], 420) ? `<img src="${img(p.images[0], 420)}">` : ''}<b>${esc(p.name)}</b>${p.specifications.some(([k]) => /packing|material|product/i.test(k)) ? `<span>${esc(p.shortDescription)}</span>` : ''}</div>`).join('')}</div>`

const body = sections.map(({ c, items }) => `
  <section class="cat">
    <h2><span>${esc(c.name)}</span></h2>
    <p class="lead">${esc(c.description)}</p>
    ${c.slug === spareCat ? partsHtml(items) : items.map(productHtml).join('')}
  </section>`).join('')

const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(company.legalName)} — Product Catalogue</title>
<style>
@page{size:A4;margin:14mm 12mm}
*{box-sizing:border-box}
body{font-family:"Helvetica Neue",Arial,sans-serif;color:#1B2433;margin:0;font-size:10.5px;line-height:1.45}
h1,h2,h3{font-family:"Arial Narrow","Helvetica Neue",Arial,sans-serif;color:#14264A;margin:0}
.cover{height:262mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;page-break-after:always;background:linear-gradient(180deg,#fff,#EAF1FD)}
.cover img{width:120mm;margin-bottom:10mm}
.cover h1{font-size:30px;letter-spacing:.02em}
.cover .tag{font-size:13px;color:#5B677A;margin:6px 0 18mm}
.cover .big{font-size:42px;font-weight:800;color:#2F6FDE;letter-spacing:.04em;text-transform:uppercase}
.cover .bar{width:60mm;height:5px;margin:10px auto;background:linear-gradient(90deg,#2F6FDE,#0FA3A3,#F5A524,#EF5B5B)}
.toc{page-break-after:always;padding-top:6mm}.toc h2{font-size:24px;margin-bottom:8mm}
.toc li{font-size:14px;margin:0 0 4mm;list-style:none;border-bottom:1px dotted #bbb;padding-bottom:2mm;display:flex;justify-content:space-between}
.cat{page-break-before:always}
.cat h2{font-size:24px;border-left:6px solid #F5A524;padding-left:10px;margin-bottom:3mm}
.lead{color:#5B677A;margin:0 0 5mm}
.prod{display:flex;gap:6mm;border:1px solid #E4E8EF;border-top:3px solid #2F6FDE;border-radius:4px;padding:4mm;margin:0 0 5mm;page-break-inside:avoid}
.pic{flex:0 0 52mm;display:flex;align-items:center;justify-content:center;background:#fff}
.pic img{max-width:52mm;max-height:60mm}
.info{flex:1;min-width:0}
.info h3{font-size:15px;margin-bottom:2px}.short{margin:0 0 3mm;color:#5B677A}
table{width:100%;border-collapse:collapse;font-size:9.4px}
th,td{border-bottom:1px solid #E4E8EF;padding:2px 4px;text-align:left;vertical-align:top}th{width:34%;color:#14264A;background:#F5F7FA}
.parts{display:grid;grid-template-columns:repeat(4,1fr);gap:4mm}
.part{border:1px solid #E4E8EF;border-radius:4px;padding:3mm;text-align:center;page-break-inside:avoid}
.part img{width:100%;height:30mm;object-fit:contain;margin-bottom:2mm}.part b{display:block;font-size:10px;color:#14264A}.part span{display:block;font-size:8.5px;color:#5B677A;margin-top:2px}
.contact{page-break-before:always;padding-top:10mm}.contact h2{font-size:24px;margin-bottom:6mm}.contact p{margin:0 0 4mm;font-size:12px}
</style></head><body>
<section class="cover">${logo ? `<img src="${logo}">` : ''}<div class="bar"></div><div class="big">Product Catalogue</div><div class="bar"></div>
<h1>${esc(company.legalName)}</h1><div class="tag">${esc(company.strapline)}</div>
<div>${company.phones.map(esc).join(' · ')}<br>${company.emails.map((e) => esc(e.address)).join(' · ')}</div></section>
<section class="toc"><h2>Contents</h2><ul style="padding:0">${sections.map(({ c, items }) => `<li><span>${esc(c.name)}</span><span>${items.length} item${items.length === 1 ? '' : 's'}</span></li>`).join('')}</ul></section>
${body}
<section class="contact"><h2>Contact us</h2>
${company.addresses.map((a) => `<p><b>${esc(a.label)}</b><br>${esc(a.text)}</p>`).join('')}
<p><b>Phone / WhatsApp</b><br>${company.phones.map(esc).join(' &nbsp;·&nbsp; ')}</p>
<p><b>Email</b><br>${company.emails.map((e) => `${esc(e.label)}: ${esc(e.address)}`).join('<br>')}</p>
<p style="color:#5B677A;margin-top:10mm">Specifications are subject to change. Contact us to confirm details for your requirement.</p></section>
</body></html>`

const htmlFile = path.join(tmp, 'catalogue.html')
fs.writeFileSync(htmlFile, html)
const out = path.join(root, 'public', 'FLEET-Catalogue.pdf')
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--allow-file-access-from-files', `--print-to-pdf=${out}`, 'file://' + htmlFile], { stdio: 'ignore', timeout: 180000 })
console.log(`catalogue: ${products.length} products → ${out} (${(fs.statSync(out).size / 1048576).toFixed(1)} MB)`)
fs.rmSync(tmp, { recursive: true, force: true })
