import { company, waLink } from '../data/company.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

// Fixed chat button, bottom-right on every page. Opens WhatsApp with the company number.
export default function WhatsAppFloat() {
  const href = `${waLink(company.whatsapp)}?text=${encodeURIComponent('Hello FLEET Industries, I would like to enquire about your products.')}`
  return (
    <a className="wa-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">
      <WhatsAppIcon />
    </a>
  )
}
