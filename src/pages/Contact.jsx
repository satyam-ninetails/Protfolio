import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { company } from '../data/company.js'

export default function Contact() {
  const [q] = useSearchParams()
  const product = q.get('product')
  return (
    <>
      <SEO title="Contact Us" description="Contact FLEET with your pipe machinery requirement." />
      <section className="page-head">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have a requirement? Tell us what you need and our team will get back to you.</p>
        </div>
      </section>
      <section className="section">
        <div className="container contact">
          <form className="form" action={company.formAction} method="POST">
            <div className="row">
              <label>Name<input name="name" required autoComplete="name" /></label>
              <label>Company<input name="company" autoComplete="organization" /></label>
            </div>
            <div className="row">
              <label>Email<input type="email" name="email" required autoComplete="email" /></label>
              <label>Phone<input type="tel" name="phone" autoComplete="tel" /></label>
            </div>
            <label>Message
              <textarea name="message" rows="6" required defaultValue={product ? `I would like to enquire about: ${product}\n` : ''} />
            </label>
            <button className="btn btn-primary" type="submit">Submit Enquiry</button>
          </form>
          <aside className="info-box">
            <h3>{company.name}</h3>
            <dl>
              <dt>Address</dt><dd>{company.address}</dd>
              <dt>Phone</dt><dd>{company.phone}</dd>
              <dt>Email</dt><dd>{company.email}</dd>
              <dt>Hours</dt><dd>{company.hours}</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}
