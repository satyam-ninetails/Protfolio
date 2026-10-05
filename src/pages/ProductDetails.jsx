import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import Img from '../components/Img.jsx'
import { getProduct } from '../data/products.js'
import { getCategory } from '../data/categories.js'

export default function ProductDetails() {
  const { slug } = useParams()
  const p = getProduct(slug)
  const [active, setActive] = useState(0)
  if (!p) return <section className="container page-head"><h1>Product not found</h1><Link className="btn btn-primary" to="/">Home</Link></section>
  const cat = getCategory(p.category)
  const imgs = p.images.length ? p.images : [null]

  return (
    <>
      <SEO title={p.name} description={p.shortDescription} />
      <section className="page-head slim">
        <div className="container">
          <nav className="crumbs">
            <Link to="/">Home</Link> / <Link to={`/products/${cat.slug}`}>{cat.name}</Link> / <span>{p.name}</span>
          </nav>
        </div>
      </section>
      <section className="section tight">
        <div className="container detail">
          <div className="gallery">
            <div className="main-img"><Img key={active} src={imgs[active]} alt={p.name} loading="eager" /></div>
            {imgs.length > 1 && (
              <div className="thumbs">
                {imgs.map((src, i) => (
                  <button key={src} className={i === active ? 'on' : ''} onClick={() => setActive(i)} aria-label={`Image ${i + 1}`}>
                    <Img src={src} alt={`${p.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="info">
            <span className="eyebrow">{cat.name}</span>
            <h1>{p.name}</h1>
            <p className="lead">{p.shortDescription}</p>
            {p.description.split('\n\n').map((t) => <p key={t}>{t}</p>)}
            <div className="actions">
              <Link className="btn btn-primary" to={`/contact?product=${encodeURIComponent(p.name)}`}>Enquire Now</Link>
              <Link className="btn btn-outline" to={`/products/${cat.slug}`}>Back to {cat.name}</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt tight">
        <div className="container detail-cols">
          <div>
            <h2>Key Features</h2>
            <ul className="ticks">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <h2>Applications</h2>
            <ul className="ticks">{p.applications.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <h2>Specifications</h2>
            <div className="table-wrap">
              <table className="specs"><tbody>
                {p.specifications.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
              </tbody></table>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
