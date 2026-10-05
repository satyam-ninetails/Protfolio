import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import { heroProducts } from '../data/products.js'
import { categories, getCategory } from '../data/categories.js'

const DUR = 5000

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const stage = useRef(null)
  const touch = useRef(null)
  const n = heroProducts.length
  const go = (k) => setI((k + n) % n)

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => go(i + 1), DUR)
    return () => clearTimeout(t)
  }, [i, paused])

  const move = (e) => {
    const r = stage.current.getBoundingClientRect()
    stage.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(2))
    stage.current.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(2))
  }
  const cur = heroProducts[i]

  return (
    <section className="hero">
      <div className="container hero-in">
        <div className="hero-text">
          <span className="eyebrow">Pipe processing &amp; testing machinery</span>
          <h1>Precision Machinery for <em>Modern Pipe</em> Solutions</h1>
          <p>Reliable pipe processing and testing machines engineered for precision, efficiency and dependable performance.</p>
          <div className="actions">
            <Link to="/products/pipe-threading-machines" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>

        <div
          ref={stage}
          className={`stage ${paused ? 'paused' : ''}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => { setPaused(false); stage.current.style.setProperty('--mx', 0); stage.current.style.setProperty('--my', 0) }}
          onMouseMove={move}
          onTouchStart={(e) => { touch.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            if (touch.current == null) return
            const d = e.changedTouches[0].clientX - touch.current
            if (Math.abs(d) > 40) go(i + (d < 0 ? 1 : -1))
            touch.current = null
          }}
          style={{ '--dur': `${DUR}ms` }}
        >
          <div className="stage-view">
            <span className="stage-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
            {heroProducts.map((p, k) => (
              <Link key={p.slug} to={`/products/${p.category}/${p.slug}`} className={`slide ${k === i ? 'on' : ''}`}
                tabIndex={k === i ? 0 : -1} aria-hidden={k !== i} aria-label={p.name}>
                <div className="art"><Img src={p.image} alt={p.name} loading={k === 0 ? 'eager' : 'lazy'} /></div>
              </Link>
            ))}
          </div>
          <div className="stage-bar">
            <div className="stage-info" aria-live="polite">
              <small>{getCategory(cur.category)?.name}</small>
              <strong key={cur.slug}>{cur.name}</strong>
              <Link to={`/products/${cur.category}/${cur.slug}`}>View details <span>→</span></Link>
            </div>
            <div className="stage-arrows">
              <button onClick={() => go(i - 1)} aria-label="Previous product">←</button>
              <button onClick={() => go(i + 1)} aria-label="Next product">→</button>
            </div>
            <div className="stage-prog">
              {heroProducts.map((p, k) => (
                <button key={p.slug + (k === i ? i : '')} className={k < i ? 'done' : k === i ? 'on' : ''} onClick={() => go(k)} aria-label={`Show ${p.name}`}><i /></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <nav className="ticker" aria-label="Product categories">
        <div className="container ticker-in">
          {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
        </div>
      </nav>
    </section>
  )
}
