import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { gallery } from '../data/gallery.js'
import { categories } from '../data/categories.js'

function Lightbox({ items, index, onClose, onIndex }) {
  const item = items[index]
  const touch = useRef(null)
  const closeRef = useRef(null)
  const go = useCallback((d) => onIndex((index + d + items.length) % items.length), [index, items.length, onIndex])

  useEffect(() => {
    const prevFocus = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => { document.body.style.overflow = prevOverflow; prevFocus?.focus?.() }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  // preload the neighbours so swiping feels instant
  useEffect(() => {
    ;[1, -1].forEach((d) => { new Image().src = items[(index + d + items.length) % items.length].full })
  }, [index, items])

  const onTouchStart = (e) => { const t = e.touches[0]; touch.current = { x: t.clientX, y: t.clientY } }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1)
    else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) onClose()
  }

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose}>
      <div className="lb-top" onClick={(e) => e.stopPropagation()}>
        <span className="lb-count">{index + 1} / {items.length}</span>
        <button ref={closeRef} className="lb-btn" aria-label="Close" onClick={onClose}>✕</button>
      </div>
      <div className="lb-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <button className="lb-btn lb-nav lb-prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); go(-1) }}>‹</button>
        <img key={item.full} className="lb-img" src={item.full} alt={item.title} onClick={(e) => e.stopPropagation()} draggable="false" />
        <button className="lb-btn lb-nav lb-next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); go(1) }}>›</button>
      </div>
      <div className="lb-bar" onClick={(e) => e.stopPropagation()}>
        <strong>{item.title}</strong>
        <span className="lb-actions">
          <Link to={`/product/${item.product}`}>View product</Link>
          <Link to={`/contact?product=${encodeURIComponent(item.title)}`}>Enquire</Link>
        </span>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)

  const chips = useMemo(() => {
    const used = new Set(gallery.map((g) => g.category))
    return categories.filter((c) => used.has(c.slug))
  }, [])
  const items = useMemo(() => (filter === 'all' ? gallery : gallery.filter((g) => g.category === filter)), [filter])
  const close = useCallback(() => setOpen(null), [])

  return (
    <>
      <SEO title="Gallery" description="Photo gallery of pipe threading, roll grooving and cutting machines, dies, rollers and spare parts." />
      <section className="page-head">
        <div className="container">
          <nav className="crumbs"><Link to="/">Home</Link> / <span>Gallery</span></nav>
          <span className="eyebrow">Gallery</span>
          <h1>Our Machines &amp; Parts</h1>
          <p>Tap any photo to view it full screen — swipe to browse.</p>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <div className="g-chips" role="tablist" aria-label="Filter gallery">
            <button role="tab" aria-selected={filter === 'all'} className={filter === 'all' ? 'on' : ''} onClick={() => setFilter('all')}>
              All <span>{gallery.length}</span>
            </button>
            {chips.map((c) => (
              <button key={c.slug} role="tab" aria-selected={filter === c.slug} className={filter === c.slug ? 'on' : ''} onClick={() => setFilter(c.slug)}>
                {c.name} <span>{gallery.filter((g) => g.category === c.slug).length}</span>
              </button>
            ))}
          </div>

          <div className="g-grid" key={filter}>
            {items.map((g, i) => (
              <button key={g.full} className="g-tile" style={{ '--i': i, aspectRatio: `${g.w} / ${g.h}` }} onClick={() => setOpen(i)} aria-label={`Open ${g.title}`}>
                <img src={g.thumb} alt={g.title} width={g.w} height={g.h} loading="lazy" decoding="async" />
                <span className="g-cap">{g.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onIndex={setOpen} />}
    </>
  )
}
