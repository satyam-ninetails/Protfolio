import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { company } from '../data/company.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setMenu(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className="header">
      <div className="container header-in">
        <Link to="/" className="logo" aria-label={`${company.name} home`}>
          <img src="/images/logo/logo-crop.png" alt={company.name} />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <NavLink to="/" end>Home</NavLink>
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
          <NavLink to="/contact" className="btn btn-primary btn-sm">Contact Us</NavLink>
        </nav>

        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="drawer" aria-label="Mobile">
          <Link to="/">Home</Link>
          <p className="drawer-label">Products</p>
          {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </nav>
      )}
    </header>
  )
}
