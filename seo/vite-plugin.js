// Build-time SEO: injects <head> tags + crawler-readable content into every page,
// writes robots.txt, sitemap.xml (only when indexable) and Cloudflare's _headers file.
// Everything is driven by src/data/seo.js, pageMeta.js, products.js and company.js.
import fs from 'node:fs'
import path from 'node:path'
import { metaFor, allRoutes, esc, abs } from '../src/data/pageMeta.js'
import { seo } from '../src/data/seo.js'
import { products } from '../src/data/products.js'
import { productPath } from '../src/data/pageMeta.js'

export const robotsContent = seo.indexable
  ? 'index, follow, max-image-preview:large, max-snippet:-1'
  : 'noindex, nofollow, noarchive'

// All <head> tags for one page. Wrapped in markers so the build can swap them per page.
export function headHtml(m) {
  const t = esc(m.title), d = esc(m.description), img = esc(m.image)
  return `<!--seo:start-->
    <title>${t}</title>
    <meta name="description" content="${d}" />
    <meta name="robots" content="${robotsContent}" />
    <link rel="canonical" href="${esc(m.canonical)}" />
    <meta property="og:site_name" content="FLEET Industries Pvt. Ltd." />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:type" content="${m.type === 'product' ? 'product' : 'website'}" />
    <meta property="og:title" content="${t}" />
    <meta property="og:description" content="${d}" />
    <meta property="og:url" content="${esc(m.canonical)}" />
    <meta property="og:image" content="${img}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${t}" />
    <meta name="twitter:description" content="${d}" />
    <meta name="twitter:image" content="${img}" />
    <script type="application/ld+json" id="ld-json">${JSON.stringify(m.jsonLd.length === 1 ? m.jsonLd[0] : m.jsonLd).replace(/</g, '\\u003c')}</script>
    <!--seo:end-->`
}

const SCRAPERS = ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'PetalBot', 'BLEXBot', 'DataForSeoBot', 'Bytespider', 'GPTBot', 'CCBot', 'ClaudeBot', 'Amazonbot']
const robotsTxt = () => seo.indexable
  ? `# Search engines are welcome, but kept polite: slow crawl, no SEO scrapers, no big PDF crawling.\nUser-agent: *\nAllow: /\nDisallow: /FLEET-Catalogue.pdf\nCrawl-delay: 10\n\n${SCRAPERS.map((b) => `User-agent: ${b}\nDisallow: /\n`).join('\n')}\nSitemap: ${seo.siteUrl}/sitemap.xml\n`
  : `# Site is not public yet — all crawlers are asked to stay out.\n# (Flip "indexable" to true in src/data/seo.js to open it up.)\nUser-agent: *\nDisallow: /\n`

function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10)
  const bySlug = Object.fromEntries(products.map((p) => [productPath(p), p]))
  const pri = (r) => (r === '/' ? '1.0' : r.split('/').length === 3 && r.startsWith('/products') ? '0.8' : r.startsWith('/products/') ? '0.6' : '0.5')
  const urls = allRoutes().map((r) => {
    const p = bySlug[r]
    const imgs = p ? p.images.map((i) => `<image:image><image:loc>${esc(abs(i))}</image:loc><image:title>${esc(p.name)}</image:title></image:image>`).join('') : ''
    return `  <url><loc>${esc(abs(r === '/' ? '/' : r))}</loc><lastmod>${today}</lastmod><priority>${pri(r)}</priority>${imgs}</url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join('\n')}\n</urlset>\n`
}

const headersFile = () => `/*\n${seo.indexable ? '' : '  X-Robots-Tag: noindex, nofollow, noarchive\n'}  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/images/*\n  Cache-Control: public, max-age=2592000\n`

export default function seoPlugin() {
  let outDir = 'dist'
  return {
    name: 'fleet-seo',
    configResolved(c) { outDir = path.resolve(c.root, c.build.outDir) },
    // dev + build: put the home page's head tags into index.html
    transformIndexHtml(html) { return html.replace('<!--seo:start--><!--seo:end-->', headHtml(metaFor('/'))) },
    // dev: let you open /robots.txt while developing
    configureServer(server) {
      server.middlewares.use('/robots.txt', (_req, res) => { res.setHeader('Content-Type', 'text/plain'); res.end(robotsTxt()) })
    },
    // build: one real HTML file per page + robots/sitemap/_headers
    closeBundle() {
      if (!fs.existsSync(path.join(outDir, 'index.html'))) return
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      let n = 0
      for (const route of allRoutes()) {
        const m = metaFor(route); if (!m) continue
        const html = template
          .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headHtml(m))
          .replace('<div id="root"></div>', `<div id="root">${m.bodyHtml}</div>`)
        const file = route === '/' ? path.join(outDir, 'index.html') : path.join(outDir, route, 'index.html')
        fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, html); n++
      }
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt())
      fs.writeFileSync(path.join(outDir, '_headers'), headersFile())
      if (seo.indexable) fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapXml())
      console.log(`[seo] ${n} pages written · robots.txt (${seo.indexable ? 'open' : 'BLOCKING ALL'}) · ${seo.indexable ? 'sitemap.xml' : 'no sitemap'}`)
    },
  }
}
