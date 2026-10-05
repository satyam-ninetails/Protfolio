import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Contact from './pages/Contact.jsx'
import SEO from './components/SEO.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const NotFound = () => (
  <section className="container page-head">
    <SEO title="Page not found" />
    <h1>Page not found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link className="btn btn-primary" to="/">Back to home</Link>
  </section>
)

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:categorySlug" element={<Category />} />
          <Route path="/products/:categorySlug/:slug" element={<ProductDetails />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
