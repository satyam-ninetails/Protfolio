// Business details (from the FLEET catalogue 2026-27). Business hours are still a placeholder.
export const company = {
  name: 'FLEET',
  legalName: 'FLEET INDUSTRIES PRIVATE LIMITED',
  tagline: 'Building the Future Together',
  addresses: [
    { label: 'Corporate Office / Warehouse', text: 'GF KH. NO. 91/3/2, Phirni Road, Bijwasan, New Delhi – 110061' },
    { label: 'Bangalore Office / Warehouse', text: 'No 11, 2nd Cross, Dayanandanagar, Srirampura, Bangalore – 560021, Karnataka' },
  ],
  strapline: 'Building the future together – with unmatched quality and dedicated service',
  phones: ['+91 83830 36046', '+91 89015 84802'],
  email: 'fleetindustries2@gmail.com',
  hours: '[Business hours]',
  // Create a form at formspree.io and paste its endpoint here.
  formAction: 'https://formspree.io/f/YOUR_FORM_ID',
}

// "+91 83830 36046" -> "+918383036046" for tel: links
export const dial = (phone) => phone.replace(/\s/g, '')
// WhatsApp wants digits only, no "+"
export const waLink = (phone) => `https://wa.me/${dial(phone).replace('+', '')}`
