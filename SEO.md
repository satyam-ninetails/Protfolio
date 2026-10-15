# SEO & robots — how this site is set up

## The one switch
`src/data/seo.js` → `indexable`

| value   | robots.txt        | page tag                         | server header (`_headers`) | sitemap.xml |
|---------|-------------------|----------------------------------|----------------------------|-------------|
| `false` | `Disallow: /`     | `noindex, nofollow, noarchive`   | `X-Robots-Tag: noindex…`   | not published |
| `true`  | `Allow: /`        | `index, follow, …`               | (none)                     | published, listed in robots.txt |

Keep it `false` while building. **On launch day: set it to `true`, run `npm run build`, deploy.**

## What is generated at build (`npm run build`)
Done by `seo/vite-plugin.js`; the content comes from `src/data/pageMeta.js`.
- one real HTML file per page (53 now) with its own `<title>`, description, canonical URL,
  Open Graph / Twitter share tags, JSON-LD structured data and a plain-text copy of the page
  content — so crawlers and WhatsApp/LinkedIn link previews see the right thing even without JavaScript
- `robots.txt`, `sitemap.xml` (when indexable), `_headers`
- new products are picked up automatically — add them to `src/data/products.js` and rebuild

## Structured data (JSON-LD)
Organization + WebSite (home), Product + BreadcrumbList (product pages), ItemList + BreadcrumbList
(categories), AboutPage / ContactPage. Test after launch: https://search.google.com/test/rich-results

## Launch checklist
1. `indexable: true` in `src/data/seo.js`, build, deploy.
2. Open `https://fleetindustries.co.in/robots.txt` — it must say `Allow: /`.
3. Google Search Console → add the domain → submit `https://fleetindustries.co.in/sitemap.xml`.
4. Bing Webmaster Tools → import from Search Console.
5. Google Business Profile for the Delhi and Bangalore offices (biggest local-search win).
6. Replace placeholder testimonials; keep phone/email/address identical everywhere.

## Good to know
- `robots.txt` is a polite request, not a lock. Honest crawlers (Google, Bing) obey it; bad bots ignore it.
  To truly keep people out, use Cloudflare Access (login) or a password.
- A blocked site cannot rank. Search results appear only after `indexable: true` and a re-crawl (days to weeks).
