import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { company, dial, waLink } from '../data/company.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

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
              <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
              <b className="lbl">Call</b>
              <span className="phones">
                <a href={`tel:${dial(phone1)}`}>{phone1}</a><i>/</i><a href={`tel:${dial(phone2)}`}>{phone2}</a>
              </span>
              <a className="wa-btn" href={waLink(company.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><WhatsAppIcon /></a>
            </p>
            <p>
              <svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.5 7v.6L12 13l7.5-5.4V7z" /></svg>
              <b className="lbl">Email</b>
              <span className="phones">
                {company.emails.map((e, i) => <span key={e.address}><a href={`mailto:${e.address}`}>{e.address}</a>{i < company.emails.length - 1 && <i> /</i>}</span>)}
              </span>
            </p>
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
            <a href={company.catalogue} download="FLEET-Catalogue.pdf" className="nav-cat">Download Catalogue</a>
            <NavLink to="/contact" className="btn btn-primary btn-sm">Contact Us</NavLink>
          </nav>

          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <div className="nav-quick">
            <a className="qc-cat" href={company.catalogue} download="FLEET-Catalogue.pdf">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4.5-4.5M12 14 7.5 9.5M5 17v2h14v-2" /></svg>
              Download Catalogue
            </a>
            <a className="wa-quick" href={waLink(company.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"><WhatsAppIcon /></a>
            <a className="qc-call" href={`tel:${dial(phone1)}`} aria-label={`Call ${phone1}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" /></svg>
            </a>
          </div>
        </div>

        {open && (
          <nav className="drawer" aria-label="Mobile">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <a href={company.catalogue} download="FLEET-Catalogue.pdf">Download Catalogue</a>
            <p className="drawer-label">Products</p>
            {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <div className="drawer-contact">
              {company.phones.map((ph) => <a key={ph} href={`tel:${dial(ph)}`}>{ph}</a>)}
              {company.emails.map((e) => <a key={e.address} href={`mailto:${e.address}`}>{e.address}</a>)}
            </div>
          </nav>
        )}
      </div>
    </div>
  )
}
