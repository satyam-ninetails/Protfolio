import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { company, dial, waLink } from '../data/company.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setMenu(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])
  // Header stays pinned; once scrolled it shrinks. Two thresholds avoid flicker when the height changes.
  useEffect(() => {
    const onScroll = () => setScrolled((was) => (was ? window.scrollY > 12 : window.scrollY > 90))
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [phone1, phone2] = company.phones

  return (
    <div className={`site-head${scrolled || open ? ' compact' : ''}`}>
      <header className="header">
        <div className="container header-in">
          <Link to="/" className="brand" aria-label={`${company.legalName} home`}>
            <img src="/images/logo/logo-crop.png" alt={company.name} />
            <span className="brand-text">
              <strong>{company.legalName}</strong>
              <small>{company.strapline}</small>
            </span>
          </Link>
          <div className="head-contact">
            <p>
              <b>Call / WhatsApp</b>
              <a href={`tel:${dial(phone1)}`}>{phone1}</a> / <a href={`tel:${dial(phone2)}`}>{phone2}</a>
            </p>
            <p><b>Email</b><a href={`mailto:${company.email}`}>{company.email}</a></p>
          </div>
        </div>
      </header>

      <div className="nav-bar">
        <div className="container nav-in">
          <nav className="nav-desktop" aria-label="Main">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <div className="mega-wrap" onMouseEnter={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
              <button className="nav-btn" aria-expanded={menu} onClick={() => setMenu(!menu)}>
                Products <span className="caret">▾</span>
              </button>
              {menu && (
                <div className="mega">
                  <div className="mega-grid">
                    {categories.map((c) => (
                      <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact" className="btn btn-primary btn-sm">Contact Us</NavLink>
          </nav>

          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <div className="nav-quick">
            <a href={`tel:${dial(phone1)}`}>Call</a>
            <a href={waLink(phone1)} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>

        {open && (
          <nav className="drawer" aria-label="Mobile">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <p className="drawer-label">Products</p>
            {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </nav>
        )}
      </div>
    </div>
  )
}
