import { Link } from 'react-router-dom'
import Img from './Img.jsx'

export default function ProductCard({ product }) {
  return (
    <article className="card product-card">
      <Link to={`/products/${product.category}/${product.slug}`} className="card-img" tabIndex={-1} aria-hidden="true">
        <Img src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.shortDescription}</p>
        <Link className="link-arrow" to={`/products/${product.category}/${product.slug}`}>View Details <span>→</span></Link>
      </div>
    </article>
  )
}
