import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Reveal from '../components/Reveal.jsx'
import { company } from '../data/company.js'
import { categories } from '../data/categories.js'
import { aboutIntro, aboutParagraphs, aboutValues } from '../data/about.js'

export default function About() {
  return (
    <>
      <SEO title="About Us" description={`About ${company.name} — ${company.tagline}. Pipe processing and testing machinery.`} />
      <section className="page-head about-head">
        <svg className="hero-gear" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="60" /><circle cx="100" cy="100" r="82" strokeDasharray="14 11" /><circle cx="100" cy="100" r="28" />
        </svg>
        <div className="container">
          <nav className="crumbs"><Link to="/">Home</Link> / <span>About Us</span></nav>
          <span className="eyebrow">About {company.legalName}</span>
          <h1>{company.tagline}</h1>
          <p>{aboutIntro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2>Machinery for pipe processing and testing</h2>
          </Reveal>
          <Reveal delay={120}>
            {aboutParagraphs(company.legalName).map((t, i) => <p key={i}>{t}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">What we stand for</span><h2>Our Values</h2></Reveal>
          <div className="grid grid-4">
            {aboutValues.map(([t, d], i) => (
              <Reveal key={t} delay={i * 90} className="why"><span className="why-n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">What we offer</span><h2>Our Product Range</h2></Reveal>
          <div className="chips">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 50} as="span"><Link to={`/products/${c.slug}`} className="chip">{c.name}</Link></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <Reveal>
            <h2>Looking for the right machine for your application?</h2>
            <p>Tell us what you need and our team will help you find the right solution.</p>
            <div className="actions center">
              <Link to="/contact" className="btn btn-accent">Contact Us</Link>
              <Link to="/products/pipe-threading-machines" className="btn btn-ghost">Explore Products</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
