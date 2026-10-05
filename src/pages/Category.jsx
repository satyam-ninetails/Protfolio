import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { getCategory } from '../data/categories.js'
import { productsByCategory } from '../data/products.js'

export default function Category() {
  const { categorySlug } = useParams()
  const cat = getCategory(categorySlug)
  if (!cat) return <section className="container page-head"><h1>Category not found</h1><Link className="btn btn-primary" to="/">Home</Link></section>
  const items = productsByCategory(cat.slug)
  return (
    <>
      <SEO title={cat.name} description={cat.description} />
      <section className="page-head">
        <div className="container">
          <nav className="crumbs"><Link to="/">Home</Link> / <span>{cat.name}</span></nav>
          <h1>{cat.name}</h1>
          <p>{cat.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {items.length ? (
            <div className="grid grid-3">{items.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
          ) : (
            <div className="empty">
              <h3>Products coming soon</h3>
              <p>Please contact us for availability and details.</p>
              <Link className="btn btn-primary" to="/contact">Contact Us</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
