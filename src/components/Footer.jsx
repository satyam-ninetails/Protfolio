import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { company } from '../data/company.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/images/logo/logo-crop.png" alt={company.name} />
          <p>{company.tagline}</p>
        </div>
        <div>
          <h4>Products</h4>
          {categories.map((c) => <Link key={c.slug} to={`/products/${c.slug}`}>{c.name}</Link>)}
        </div>
        <div>
          <h4>Contact</h4>
          <p>{company.address}</p>
          <p>{company.phone}</p>
          <p>{company.email}</p>
          <Link to="/contact">Send an enquiry →</Link>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  )
}
