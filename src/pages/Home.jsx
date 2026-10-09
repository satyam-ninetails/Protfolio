import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { categories } from '../data/categories.js'
import { featuredProducts } from '../data/products.js'
import { company } from '../data/company.js'
import { clients, testimonials } from '../data/clients.js'
import Img from '../components/Img.jsx'

const why = [
  ['Reliable Engineering', 'Machines designed for dependable day-to-day performance.'],
  ['Precision Manufacturing', 'Careful manufacturing for accurate, repeatable results.'],
  ['Durable Equipment', 'Built to stand up to demanding industrial conditions.'],
  ['Technical Support', 'Our team helps you choose and use the right machine.'],
]

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />

      <section className="section tint-blue">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">Product range</span><h2>Product Categories</h2></Reveal>
          <div className="grid grid-4">
            {categories.map((c, i) => <Reveal key={c.slug} delay={(i % 4) * 90}><CategoryCard category={c} index={i} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section tint-teal">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">Selected machines</span><h2>Featured Products</h2></Reveal>
          <div className="grid grid-3">
            {featuredProducts.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 100}><ProductCard product={p} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">Our approach</span><h2>Why Choose Us</h2></Reveal>
          <div className="grid grid-4">
            {why.map(([t, d], i) => (
              <Reveal className="why" key={t} delay={i * 90}><span className="why-n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint-warm">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">Trusted by</span><h2>Our Clients</h2></Reveal>
          <div className="clients">
            {clients.map((c, i) => (
              <Reveal className="client" key={c.name} delay={(i % 4) * 80} title={c.name}><Img src={c.logo} alt={c.name} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tint-rose">
        <div className="container">
          <Reveal className="sec-head"><span className="eyebrow">Testimonials</span><h2>What Our Customers Say</h2></Reveal>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="quote">
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><span className="quote-av" aria-hidden="true">{t.name[0]}</span><span><strong>{t.name}</strong><small>{t.role}</small></span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about">
          <Reveal>
            <span className="eyebrow">About {company.legalName}</span>
            <h2>{company.tagline}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p>[Company introduction — replace with a short description of the company, its products and the industries it serves.]</p>
            <Link to="/about" className="link-arrow">Learn more about us <span>→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="cta">
        <Reveal className="container">
          <h2>Looking for the right machine for your application?</h2>
          <p>Tell us what you need and our team will help you find the right solution.</p>
          <div className="actions center">
            <Link to="/contact" className="btn btn-accent">Contact Us</Link>
            <Link to="/products/pipe-threading-machines" className="btn btn-ghost">Explore Products</Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
