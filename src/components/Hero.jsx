import { Link } from 'react-router-dom'
import Img from './Img.jsx'

export default function Hero({ image }) {
  return (
    <section className="hero">
      <svg className="hero-gear" viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="60" /><circle cx="100" cy="100" r="82" strokeDasharray="14 11" /><circle cx="100" cy="100" r="28" />
      </svg>
      <div className="container hero-in">
        <div className="hero-text">
          <span className="eyebrow">Pipe processing &amp; testing machinery</span>
          <h1>Precision Machinery for Modern Pipe Solutions</h1>
          <p>Reliable pipe processing and testing machines engineered for precision, efficiency and dependable performance.</p>
          <div className="actions">
            <Link to="/products/pipe-threading-machines" className="btn btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
        <div className="hero-img">
          <Img src={image} alt="FLEET pipe threading machine" loading="eager" />
        </div>
      </div>
    </section>
  )
}
