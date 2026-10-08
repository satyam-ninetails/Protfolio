import { Link } from 'react-router-dom'
import { categories } from '../data/categories.js'
import { company, dial } from '../data/company.js'

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
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <p>{company.address}</p>
          {company.phones.map((ph) => <a key={ph} href={`tel:${dial(ph)}`}>{ph}</a>)}
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
          <Link to="/contact">Send an enquiry →</Link>
        </div>
      </div>
      <div className="container copy">© {new Date().getFullYear()} {company.legalName}. All rights reserved.</div>
    </footer>
  )
}
