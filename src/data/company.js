// Business details (from the FLEET catalogue 2026-27). Business hours are still a placeholder.
export const company = {
  name: 'FLEET',
  legalName: 'FLEET INDUSTRIES PRIVATE LIMITED',
  tagline: 'Building the Future Together',
  addresses: [
    { label: 'Corporate Office / Warehouse', text: 'GF KH. NO. 91/3/2, Phirni Road, Bijwasan, New Delhi – 110061', street: 'GF KH. NO. 91/3/2, Phirni Road, Bijwasan', city: 'New Delhi', region: 'Delhi', postalCode: '110061' },
    { label: 'Bangalore Office / Warehouse', text: 'No 11, 2nd Cross, Dayanandanagar, Srirampura, Bangalore – 560021, Karnataka', street: 'No 11, 2nd Cross, Dayanandanagar, Srirampura', city: 'Bangalore', region: 'Karnataka', postalCode: '560021' },
  ],
  strapline: 'Building the future together – with unmatched quality and dedicated service',
  phones: ['+91 83830 36046', '+91 89015 84802'],
  // Product catalogue PDF (built by scripts/build-catalogue.mjs into public/).
  catalogue: '/FLEET-Catalogue.pdf',
  // The one number used for WhatsApp chat links across the site.
  whatsapp: '+91 83830 36046',
  emails: [
    { label: 'Sales', address: 'sales@fleetindustries.co.in' },
    { label: 'General enquiries', address: 'info@fleetindustries.co.in' },
  ],
  hours: '[Business hours]',
  // Formspree form "FLEET Website Enquiry" (enquiries go to the email on the Formspree account).
  formAction: 'https://formspree.io/f/xppqblvl',
}

// "+91 83830 36046" -> "+918383036046" for tel: links
export const dial = (phone) => phone.replace(/\s/g, '')
// WhatsApp wants digits only, no "+"
export const waLink = (phone) => `https://wa.me/${dial(phone).replace('+', '')}`
