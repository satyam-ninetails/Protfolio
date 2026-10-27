// ─────────────────────────────────────────────────────────────────────────────
// SEO settings. ONE switch controls everything about search-engine access.
//
//   indexable: false  → robots.txt blocks all robots, every page carries
//                       <meta name="robots" content="noindex,nofollow"> and the
//                       server sends an X-Robots-Tag header. No sitemap is published.
//   indexable: true   → robots.txt allows everyone, pages can be indexed,
//                       sitemap.xml is published and listed in robots.txt.
//
// Keep it false while the site is being built; flip to true on launch day.
// ─────────────────────────────────────────────────────────────────────────────
export const seo = {
  indexable: true,
  siteUrl: 'https://fleetindustries.co.in', // no trailing slash
  ogImage: '/images/og-default.jpg',        // 1200×630 share image
  brand: 'FLEET',
}
