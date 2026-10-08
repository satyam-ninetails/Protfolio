import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import { heroSlides } from '../data/products.js'
import { gallery } from '../data/gallery.js'
import { categories, getCategory } from '../data/categories.js'

const DUR = 6000
const slides = heroSlides.map((s) => ({ ...s, cat: getCategory(s.category) }))
// public/images/hero/ holds trimmed copies of the gallery photos so each machine fills its card.
const photo = (p) => gallery.find((g) => g.product === p.slug)?.full.replace('/gallery/', '/hero/') || p.image

export default function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [drag, setDrag] = useState(0)
  const view = useRef(null)
  const touch = useRef(null)
  const n = slides.length
  const go = (k) => setI((k + n) % n)
  // current slide and its neighbours load straight away so sliding never shows a blank card
  const near = (k) => [0, 1, n - 1].some((d) => (i + d) % n === k)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setI((k) => (k + 1) % n), DUR)
    return () => clearTimeout(t)
  }, [i, paused, n])

  const onStart = (e) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY, lock: null }
    setPaused(true)
  }
  const onMove = (e) => {
    const s = touch.current
    if (!s) return
    const t = e.touches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    if (!s.lock && Math.max(Math.abs(dx), Math.abs(dy)) > 8) s.lock = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y'
    if (s.lock === 'x') setDrag(dx)
  }
  const onEnd = () => {
    const s = touch.current
    touch.current = null
    setPaused(false)
    if (s?.lock === 'x' && Math.abs(drag) > (view.current?.clientWidth || 300) * 0.15) go(i + (drag < 0 ? 1 : -1))
    setDrag(0)
  }

  return (
    <section
      className="hero hs"
      aria-roledescription="carousel"
      aria-label="Product categories"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === 'ArrowRight') go(i + 1); else if (e.key === 'ArrowLeft') go(i - 1) }}
      style={{ '--dur': `${DUR}ms` }}
    >
      <h1 className="sr-only">Precision Machinery for Modern Pipe Solutions</h1>

      <div ref={view} className="hs-view" onTouchStart={onStart} onTouchMove={onMove} onTouchEnd={onEnd} onTouchCancel={onEnd}>
        <div className={`hs-track${drag ? ' drag' : ''}`} style={{ transform: `translate3d(calc(${-i * 100}% + ${drag}px), 0, 0)` }}>
          {slides.map((s, k) => (
            <div key={s.category} className={`hs-slide${k === i ? ' on' : ''}`} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`} aria-hidden={k !== i}>
              <div className="hs-split">
                {s.products.map((p, m) => (
                  <Link key={p.slug} to={`/products/${p.category}/${p.slug}`} className="hs-half" style={{ '--m': m }} tabIndex={k === i ? 0 : -1}>
                    <Img src={photo(p)} alt={p.name} loading={near(k) ? 'eager' : 'lazy'} draggable="false" />
                    <span className="hs-cap"><b>{p.name}</b><i aria-hidden="true">→</i></span>
                  </Link>
                ))}
              </div>
              <div className="hs-info">
                <div className="container hs-info-in">
                  <div className="hs-copy">
                    <span className="hs-eyebrow">{String(k + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
                    <h2>{s.cat.name}</h2>
                  </div>
                  <p>{s.cat.description}</p>
                  <div className="actions">
                    <Link to={`/products/${s.category}`} className="btn btn-accent" tabIndex={k === i ? 0 : -1}>View range</Link>
                    <Link to="/contact" className="btn btn-ghost" tabIndex={k === i ? 0 : -1}>Contact Us</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container hs-ui">
        <div className="hs-prog" role="tablist" aria-label="Choose slide">
          {slides.map((s, k) => (
            <button key={s.category + (k === i ? i : '')} role="tab" aria-selected={k === i} className={k < i ? 'done' : k === i ? 'on' : ''} onClick={() => go(k)} aria-label={s.cat.name}><i /></button>
          ))}
        </div>
        <div className="hs-arrows">
          <button onClick={() => go(i - 1)} aria-label="Previous slide">←</button>
          <button onClick={() => go(i + 1)} aria-label="Next slide">→</button>
        </div>
      </div>

      <nav className="ticker" aria-label="Product categories">
        <div className="ticker-run">
          {[0, 1].map((copy) => (
            <div className="ticker-set" key={copy} aria-hidden={copy === 1}>
              {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`} tabIndex={copy ? -1 : 0}>{c.name}</Link>)}
            </div>
          ))}
        </div>
      </nav>
    </section>
  )
}
