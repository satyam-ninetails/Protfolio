// Single source of truth for every page's SEO: title, description, canonical URL,
// share image, structured data (JSON-LD) and a plain-HTML summary for crawlers.
// Used by the browser (components/SEO.jsx) and by the build (seo/vite-plugin.js).
import { company } from './company.js'
import { categories, getCategory } from './categories.js'
import { products, getProduct, productsByCategory } from './products.js'
import { seo } from './seo.js'

const abs = (p) => (/^https?:/.test(p) ? p : seo.siteUrl + p)
const clamp = (s, n = 160) => { const t = s.replace(/\s+/g, ' ').trim(); return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' }
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
export const productPath = (p) => `/products/${p.category}/${p.slug}`

const organization = {
  '@type': 'Organization',
  '@id': seo.siteUrl + '/#organization',
  name: company.legalName,
  alternateName: company.name,
  url: seo.siteUrl,
  logo: abs('/images/logo/logo.png'),
  slogan: company.tagline,
  email: company.emails[0].address,
  contactPoint: company.emails.map((e, i) => ({
    '@type': 'ContactPoint', contactType: i === 0 ? 'sales' : 'customer service', email: e.address,
    telephone: company.phones[0], areaServed: 'IN', availableLanguage: ['en', 'hi'],
  })),
  address: company.addresses.map((a) => ({
    '@type': 'PostalAddress', streetAddress: a.street, addressLocality: a.city, addressRegion: a.region, postalCode: a.postalCode, addressCountry: 'IN',
  })),
}
const website = { '@type': 'WebSite', '@id': seo.siteUrl + '/#website', url: seo.siteUrl, name: company.legalName, publisher: { '@id': seo.siteUrl + '/#organization' } }
const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
})
const specRows = (p) => p.specifications.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')

const HOME_DESC = 'FLEET Industries makes pipe threading, roll grooving, pipe cutting, hole saw, HDPE butt fusion and pipe bending machines. Offices in Delhi & Bangalore.'

// path → { title, description, canonical, image, type, jsonLd[], bodyHtml } (null if unknown)
export function metaFor(path) {
  const clean = path.replace(/\/+$/, '') || '/'
  const base = { canonical: abs(clean === '/' ? '/' : clean), image: abs(seo.ogImage), type: 'website' }

  if (clean === '/') return { ...base, title: 'Pipe Threading & Roll Grooving Machines | FLEET Industries', description: HOME_DESC,
    jsonLd: [{ '@context': 'https://schema.org', '@graph': [organization, website] }],
    bodyHtml: `<h1>${esc(company.legalName)} — Pipe Processing &amp; Testing Machinery</h1><p>${esc(HOME_DESC)}</p><ul>${categories.map((c) => `<li><a href="/products/${c.slug}">${esc(c.name)}</a> — ${esc(c.description)}</li>`).join('')}</ul>` }

  if (clean === '/about') return { ...base, title: 'About Us | FLEET Industries', description: clamp(`About ${company.legalName}: ${company.tagline}. Manufacturer of pipe threading, grooving, cutting, hole saw and butt fusion machinery with offices in Delhi and Bangalore.`),
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'AboutPage', url: base.canonical, name: 'About FLEET Industries', about: { '@id': seo.siteUrl + '/#organization' } }, { '@context': 'https://schema.org', ...crumbs([['Home', '/'], ['About Us', '/about']]) }],
    bodyHtml: `<h1>${esc(company.tagline)}</h1><p>${esc(company.legalName)} brings together technology and engineering to provide innovative solutions in pipe machinery.</p>` }

  if (clean === '/contact') return { ...base, title: 'Contact Us | FLEET Industries', description: clamp(`Contact FLEET Industries for pipe machinery enquiries. Call ${company.phones.join(' / ')} or email ${company.emails.map((e) => e.address).join(' / ')}.`),
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'ContactPage', url: base.canonical, name: 'Contact FLEET Industries', about: { '@id': seo.siteUrl + '/#organization' } }, { '@context': 'https://schema.org', ...crumbs([['Home', '/'], ['Contact Us', '/contact']]) }],
    bodyHtml: `<h1>Contact Us</h1>${company.addresses.map((a) => `<p><strong>${esc(a.label)}</strong><br>${esc(a.text)}</p>`).join('')}<p>${company.phones.map(esc).join(' / ')}</p><p>${company.emails.map((e) => esc(e.address)).join(' / ')}</p>` }

  if (clean === '/gallery') return { ...base, title: 'Machine Gallery | FLEET Industries', description: 'Photo gallery of FLEET pipe threading, roll grooving, pipe cutting, hole saw and butt fusion machines and spares.',
    jsonLd: [{ '@context': 'https://schema.org', ...crumbs([['Home', '/'], ['Gallery', '/gallery']]) }],
    bodyHtml: `<h1>Our Machines &amp; Parts</h1><p>Photos of FLEET pipe machinery.</p>` }

  let m = clean.match(/^\/products\/([^/]+)$/)
  if (m) {
    const cat = getCategory(m[1]); if (!cat) return null
    const items = productsByCategory(cat.slug)
    return { ...base, title: `${cat.name} | FLEET Industries`, description: clamp(`${cat.description} ${items.length} model${items.length === 1 ? '' : 's'} from FLEET Industries — view specifications and enquire.`),
      image: abs(cat.image),
      jsonLd: [{ '@context': 'https://schema.org', ...crumbs([['Home', '/'], [cat.name, clean]]) },
        { '@context': 'https://schema.org', '@type': 'ItemList', name: cat.name, itemListElement: items.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs(productPath(p)), name: p.name })) }],
      bodyHtml: `<h1>${esc(cat.name)}</h1><p>${esc(cat.description)}</p><ul>${items.map((p) => `<li><a href="${productPath(p)}">${esc(p.name)}</a> — ${esc(p.shortDescription)}</li>`).join('')}</ul>` }
  }

  m = clean.match(/^\/products\/([^/]+)\/([^/]+)$/)
  if (m) {
    const p = getProduct(m[2]); if (!p || p.category !== m[1]) return null
    const cat = getCategory(p.category); const canonical = abs(productPath(p))
    const model = (p.specifications.find(([k]) => /^model/i.test(k)) || [])[1]
    return { ...base, canonical, type: 'product', title: `${p.name.replace(/ (Premium|Electric|Heavy-Duty)/g, '')} | FLEET`, description: clamp(`${p.shortDescription} ${model ? `Model ${model}. ` : ''}Specifications and enquiry — FLEET Industries.`),
      image: abs(p.image || seo.ogImage),
      jsonLd: [{ '@context': 'https://schema.org', ...crumbs([['Home', '/'], [cat.name, `/products/${cat.slug}`], [p.name, productPath(p)]]) },
        { '@context': 'https://schema.org', '@type': 'Product', name: p.name, description: clamp(p.description, 500), image: p.images.map(abs), sku: p.slug, ...(model ? { mpn: model } : {}),
          category: cat.name, brand: { '@type': 'Brand', name: seo.brand }, manufacturer: { '@id': seo.siteUrl + '/#organization' }, url: canonical }],
      bodyHtml: `<h1>${esc(p.name)}</h1><p>${esc(p.shortDescription)}</p><p>${esc(p.description)}</p><h2>Key features</h2><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul><h2>Specifications</h2><table>${specRows(p)}</table>` }
  }
  return null
}

// Every real page on the site.
export const allRoutes = () => ['/', '/about', '/gallery', '/contact', ...categories.map((c) => `/products/${c.slug}`), ...products.map(productPath)]
export { organization, esc, abs }
