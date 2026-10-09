import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { company, dial, waLink } from '../data/company.js'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'

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
            <h3>{company.legalName}</h3>
            <dl>
              <dt>Address</dt>
              <dd>{company.addresses.map((a) => <span className="addr" key={a.label}><b>{a.label}</b>{a.text}</span>)}</dd>
              <dt>Call / Chat</dt>
              <dd>{company.phones.map((ph) => (
                <span className="phone-row" key={ph}>
                  <a href={`tel:${dial(ph)}`}>{ph}</a>
                  <a className="wa-btn" href={waLink(ph)} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp ${ph}`} title="Chat on WhatsApp"><WhatsAppIcon /></a>
                </span>
              ))}</dd>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
              <dt>Hours</dt><dd>{company.hours}</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}
