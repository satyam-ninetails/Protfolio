import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import { heroProducts } from '../data/products.js'

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((n) => (n + 1) % heroProducts.length), 4500)
    return () => clearInterval(t)
  }, [paused])

  const cur = heroProducts[i]
  return (
    <section className="hero">
      <div className="container hero-in">
        <div className="hero-text">
          <span className="eyebrow">Pipe processing &amp; testing machinery</span>
          <h1>Precision Machinery for Modern Pipe Solutions</h1>
          <p>Reliable pipe processing and testing machines engineered for precision, efficiency and dependable performance.</p>
          <div className="actions">
            <Link to="/products/pipe-threading-machines" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div className="hero-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="hero-disc" aria-hidden="true" />
          {heroProducts.map((p, n) => (
            <Link key={p.slug} to={`/products/${p.category}/${p.slug}`} className={`hero-slide ${n === i ? 'on' : ''}`}
              tabIndex={n === i ? 0 : -1} aria-hidden={n !== i} aria-label={p.name}>
              <Img src={p.image} alt={p.name} loading={n === 0 ? 'eager' : 'lazy'} />
            </Link>
          ))}
          <div className="hero-caption" aria-live="polite">
            <span key={cur.slug}>{cur.name}</span>
            <div className="hero-dots">
              {heroProducts.map((p, n) => (
                <button key={p.slug} className={n === i ? 'on' : ''} onClick={() => setI(n)} aria-label={`Show ${p.name}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
