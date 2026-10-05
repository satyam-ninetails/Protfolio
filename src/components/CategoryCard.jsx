import { Link } from 'react-router-dom'
import Img from './Img.jsx'

export default function CategoryCard({ category, index }) {
  return (
    <Link to={`/products/${category.slug}`} className="card category-card">
      <div className="card-img"><Img src={category.image} alt={category.name} /></div>
      <div className="card-body">
        <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <span className="link-arrow">View Products <span>→</span></span>
      </div>
    </Link>
  )
}
