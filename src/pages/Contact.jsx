import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import { company, dial, waLink } from '../data/company.js'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'

export default function Contact() {
  const [q] = useSearchParams()
  const product = q.get('product')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  // Sends the enquiry to Formspree in the background so the visitor stays on this site.
  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget // React clears currentTarget after the first await, so keep it
    setStatus('sending')
    try {
      const res = await fetch(company.formAction, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }
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
          <form className="form" action={company.formAction} method="POST" onSubmit={submit}>
            <input type="hidden" name="_subject" value="New enquiry from the FLEET website" />
            <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} aria-hidden="true" />
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
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Submit Enquiry'}</button>
            {status === 'sent' && <p className="form-msg ok" role="status">Thank you — your enquiry has been sent. Our team will get back to you shortly.</p>}
            {status === 'error' && <p className="form-msg err" role="alert">Sorry, we could not send your message. Please call or WhatsApp us on {company.phones[0]} or email {company.emails[0].address}.</p>}
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
                  {ph === company.whatsapp && <a className="wa-btn" href={waLink(company.whatsapp)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp"><WhatsAppIcon /></a>}
                </span>
              ))}</dd>
              <dt>Email</dt>
              <dd>
                {company.emails.map((e) => <a key={e.address} href={`mailto:${e.address}`}>{e.address}</a>)}
              </dd>
              <dt>Hours</dt><dd>{company.hours}</dd>
            </dl>
          </aside>
        </div>
      </section>
    </>
  )
}
