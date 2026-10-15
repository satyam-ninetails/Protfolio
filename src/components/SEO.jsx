import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaFor } from '../data/pageMeta.js'
import { seo } from '../data/seo.js'
import { company } from '../data/company.js'

const ROBOTS = seo.indexable ? 'index, follow, max-image-preview:large, max-snippet:-1' : 'noindex, nofollow, noarchive'

function put(sel, attrs) {
  let el = document.head.querySelector(sel)
  if (!el) { el = document.createElement(attrs.tag || 'meta'); document.head.appendChild(el) }
  for (const [k, v] of Object.entries(attrs)) if (k !== 'tag') el.setAttribute(k, v)
}

// Keeps <title>, description, canonical, share tags and structured data in step with the
// current page while people click around. Values come from data/pageMeta.js (same as the build).
export default function SEO({ title, description }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const m = metaFor(pathname)
    const t = m ? m.title : (title ? `${title} | ${company.name}` : 'FLEET Industries')
    const d = m ? m.description : (description || '')
    document.title = t
    put('meta[name="description"]', { name: 'description', content: d })
    put('meta[name="robots"]', { name: 'robots', content: m ? ROBOTS : 'noindex, nofollow' }) // 404s are never indexed
    if (m) {
      put('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: m.canonical })
      const og = { 'og:title': t, 'og:description': d, 'og:url': m.canonical, 'og:image': m.image, 'og:type': m.type }
      for (const [k, v] of Object.entries(og)) put(`meta[property="${k}"]`, { property: k, content: v })
      const tw = { 'twitter:title': t, 'twitter:description': d, 'twitter:image': m.image }
      for (const [k, v] of Object.entries(tw)) put(`meta[name="${k}"]`, { name: k, content: v })
      const ld = m.jsonLd.length === 1 ? m.jsonLd[0] : m.jsonLd
      let s = document.getElementById('ld-json')
      if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'ld-json'; document.head.appendChild(s) }
      s.textContent = JSON.stringify(ld)
    }
  }, [pathname, title, description])
  return null
}
