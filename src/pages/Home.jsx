import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Hero from '../components/Hero.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { categories } from '../data/categories.js'
import { featuredProducts } from '../data/products.js'
import { company } from '../data/company.js'

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
      <Hero image="/images/products/pipe-threading/sq100a.jpg" />

      <section className="section">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Product range</span><h2>Product Categories</h2></div>
          <div className="grid grid-4">
            {categories.map((c, i) => <CategoryCard key={c.slug} category={c} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Selected machines</span><h2>Featured Products</h2></div>
          <div className="grid grid-3">
            {featuredProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head"><span className="eyebrow">Our approach</span><h2>Why Choose Us</h2></div>
          <div className="grid grid-4">
            {why.map(([t, d], i) => (
              <div className="why" key={t}><span className="why-n">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container about">
          <div>
            <span className="eyebrow">About {company.name}</span>
            <h2>{company.tagline}</h2>
          </div>
          <p>[Company introduction — replace with a short description of the company, its products and the industries it serves.]</p>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Looking for the right machine for your application?</h2>
          <p>Tell us what you need and our team will help you find the right solution.</p>
          <div className="actions center">
            <Link to="/contact" className="btn btn-accent">Contact Us</Link>
            <Link to="/products/pipe-threading-machines" className="btn btn-ghost">Explore Products</Link>
          </div>
        </div>
      </section>
    </>
  )
}
