// Business details. Address and hours are still placeholders — replace with real information.
export const company = {
  name: 'FLEET',
  legalName: 'FLEET INDUSTRIES PRIVATE LIMITED',
  tagline: 'Building the Future Together',
  address: '[Company address]',
  strapline: 'Building the future together – with unmatched quality and dedicated service',
  phones: ['+91 83830 36046', '+91 89015 84802'],
  email: 'info@fleetindustries.co.in',
  supportEmail: 'support@fleetindustries.co.in',
  hours: '[Business hours]',
  // Create a form at formspree.io and paste its endpoint here.
  formAction: 'https://formspree.io/f/YOUR_FORM_ID',
}

// "+91 83830 36046" -> "+918383036046" for tel: links
export const dial = (phone) => phone.replace(/\s/g, '')
// WhatsApp wants digits only, no "+"
export const waLink = (phone) => `https://wa.me/${dial(phone).replace('+', '')}`
