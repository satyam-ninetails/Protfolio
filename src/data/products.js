// Add products here. `images[0]` is the card image; omit images to use the placeholder.
// Replace `specifications` / `features` with real data as it becomes available.
const I = (p) => `/images/products/${p}`
const TBC = [['Specifications', 'Available on request — please contact us']]


// Placeholder copy per category — replace with real product text.
const COPY = {
  'pipe-threading-machines': {
    description: ['Built for fast, accurate threading of pipes in workshops and on site, this machine delivers clean, consistent threads cut after cut. A sturdy body and a straightforward control layout make it easy for operators to set up and keep productive through long working days.', 'Compatible threading dies and accessories are available as spare parts, so the machine can be adapted to different pipe sizes and thread standards.'],
    features: ['Clean, consistent thread quality', 'Rugged construction for daily industrial use', 'Simple operation with easy die changes', 'Compatible dies and accessories available'],
    applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  },
  'roll-grooving-machine': {
    description: ['Designed to produce uniform grooves on steel pipe quickly, this roll grooving machine supports reliable grooved-coupling connections. Its rigid frame and precise rollers help keep groove depth consistent across a production run.', 'Rollers and shafts for different pipe sizes are available separately.'],
    features: ['Consistent groove depth and profile', 'Rigid frame for stable operation', 'Interchangeable rollers for different sizes', 'Straightforward set-up and operation'],
    applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  },
  'pipe-cutting-machine': {
    description: ['A dependable cutting solution for producing clean, square pipe cuts with minimal effort. The machine is designed for stable clamping and smooth cutting, helping reduce rework and material waste.', 'Suitable for both workshop and on-site use where accuracy and speed matter.'],
    features: ['Clean, accurate cuts', 'Secure pipe clamping for stable cutting', 'Robust build for repeated use', 'Operator-friendly design'],
    applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  },
  'hole-saw-cutting-machines': {
    description: ['Produces precise round openings for branch connections and fittings. A stable setup and well-matched cutters help deliver neat, burr-controlled holes in a wide range of applications.', 'Cutters in multiple sizes can be supplied to suit your requirement.'],
    features: ['Precise, neat openings', 'Multiple cutter sizes available', 'Durable cutting components', 'Easy to set up and operate'],
    applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  },
  'butt-jointing-machine': {
    description: ['Designed for creating strong, uniform butt joints between pipe sections. Accurate alignment and controlled operation help achieve dependable joint quality across projects.', 'Please contact us for the configurations available for your pipe size and material.'],
    features: ['Accurate pipe alignment', 'Uniform, repeatable joint quality', 'Sturdy construction', 'Technical support available'],
    applications: ['Pipeline construction', 'Water and gas distribution', 'Industrial piping', 'Fabrication workshops'],
  },
  'spare-parts': {
    description: ['Genuine consumables and replacement parts help keep your machines running reliably and reduce downtime. Compatibility details are listed on this page; contact us if you are unsure which part fits your machine.'],
    features: ['Made to fit specified machine models', 'Durable materials for long service life', 'Helps reduce machine downtime', 'Available on enquiry'],
    applications: ['Routine machine maintenance', 'Replacement of worn components', 'Machine upgrades and size changes'],
  },
}

let n = 0
const make = (category, slug, name, images, shortDescription, extra = {}) => ({
  id: `${category.slice(0, 3)}-${String(++n).padStart(3, '0')}`,
  slug,
  name,
  category,
  image: images[0] || null,
  images,
  shortDescription,
  description: extra.description || (COPY[category]?.description || []).join('\n\n') || `${name} from FLEET. Contact our team for detailed technical information.`,
  features: extra.features || COPY[category]?.features || ['Engineered for dependable performance'],
  specifications: extra.specifications || TBC,
  applications: extra.applications || COPY[category]?.applications || ['Pipe processing'],
})

const T = 'pipe-threading-machines'
const R = 'roll-grooving-machine'
const C = 'pipe-cutting-machine'
const H = 'hole-saw-cutting-machines'
const B = 'butt-jointing-machine'
const S = 'spare-parts'

export const products = [
  make(T, 'sq50a-pipe-threading-machine', 'SQ50A Pipe Threading Machine', [I('pipe-threading/sq50a.jpg')], 'Compact pipe threading machine for smaller pipe sizes.', { model: 'SQ50A', specifications: [['Model', 'SQ50A'], ['Other specifications', 'Available on request']] }),
  make(T, 'sq100a-pipe-threading-machine', 'SQ100A Pipe Threading Machine', [I('pipe-threading/sq100a.jpg')], 'Versatile pipe threading machine for a wide range of pipe sizes.', { specifications: [['Model', 'SQ100A'], ['Other specifications', 'Available on request']] }),
  make(T, 'sq150a-pipe-threading-machine', 'SQ150A Pipe Threading Machine', [I('pipe-threading/sq150a.jpg')], 'Heavy-duty threading machine for larger pipe diameters.', { specifications: [['Model', 'SQ150A'], ['Other specifications', 'Available on request']] }),

  make(R, 'jk150-roll-grooving-machine', 'JK150 Roll Grooving Machine', [I('roll-grooving/jk150.jpg')], 'Roll grooving machine for consistent, accurate pipe grooves.', { specifications: [['Model', 'JK150'], ['Other specifications', 'Available on request']] }),

  make(C, 'kc114-pipe-cutting-machine', 'KC114 Pipe Cutting Machine', [I('pipe-cutting/kc114.png')], 'Pipe cutting machine for clean, accurate cuts.', { specifications: [['Model', 'KC114'], ['Other specifications', 'Available on request']] }),

  make(H, 'hole-saw-cutting-machine', 'Hole Saw Cutting Machine', [I('hole-saw/hole-saw.png')], 'Hole saw cutting machine for precise openings and branch connections.'),

  // Sample products using placeholder photos — replace with real products/images.
  make(R, 'heavy-duty-roll-grooving-machine', 'Heavy-Duty Roll Grooving Machine', [I('roll-grooving/jk150.jpg')], 'Rugged roll grooving machine for continuous production use.'),
  make(R, 'portable-roll-grooving-machine', 'Portable Roll Grooving Machine', [I('roll-grooving/jk150.jpg')], 'Portable roll grooving machine for site work.'),
  make(C, 'heavy-duty-pipe-cutting-machine', 'Heavy-Duty Pipe Cutting Machine', [I('pipe-cutting/kc114.png')], 'Strong cutting machine for larger pipe diameters.'),
  make(C, 'portable-pipe-cutting-machine', 'Portable Pipe Cutting Machine', [I('pipe-cutting/kc114.png')], 'Lightweight pipe cutter for flexible on-site use.'),
  make(H, 'heavy-duty-hole-saw-cutting-machine', 'Heavy-Duty Hole Saw Cutting Machine', [I('hole-saw/hole-saw.png')], 'Robust hole saw machine for demanding fabrication.'),
  make(H, 'hole-saw-cutter-set', 'Hole Saw Cutter Set', [I('hole-saw/hole-saw.png')], 'Multi-size cutter set for branch connections and openings.'),
  make('pressure-test-pumps', 'hand-operated-pressure-test-pump', 'Hand Operated Pressure Test Pump', [I('pressure-test/sample-1.jpg')], 'Manual pump for hydrostatic testing of pipes and systems.'),
  make('pressure-test-pumps', 'electric-pressure-test-pump', 'Electric Pressure Test Pump', [I('pressure-test/sample-2.jpg')], 'Electric pump for faster, higher-volume pressure testing.'),
  make('pressure-test-pumps', 'high-pressure-test-pump', 'High Pressure Test Pump', [I('pressure-test/sample-1.jpg')], 'Heavy-duty pump for high pressure test applications.'),
  make(B, 'manual-butt-jointing-machine', 'Manual Butt Jointing Machine', [I('butt-jointing/sample-1.jpg')], 'Manual machine for aligning and jointing pipe sections.'),
  make(B, 'hydraulic-butt-jointing-machine', 'Hydraulic Butt Jointing Machine', [I('butt-jointing/sample-2.jpg')], 'Hydraulic machine for consistent, repeatable joints.'),
  make(B, 'heavy-duty-butt-jointing-machine', 'Heavy-Duty Butt Jointing Machine', [I('butt-jointing/sample-1.jpg')], 'Heavy-duty machine for larger pipe sizes.'),
  make('pipe-bending-machines', 'manual-pipe-bending-machine', 'Manual Pipe Bending Machine', [I('pipe-bending/sample-1.png')], 'Manual bender for accurate, repeatable bends.'),
  make('pipe-bending-machines', 'hydraulic-pipe-bending-machine', 'Hydraulic Pipe Bending Machine', [I('pipe-bending/sample-2.jpg')], 'Hydraulic bender for smooth bends with less effort.'),
  make('pipe-bending-machines', 'electric-pipe-bending-machine', 'Electric Pipe Bending Machine', [I('pipe-bending/sample-1.png')], 'Electric bender for high-volume production bending.'),

  make(S, 'rex-type-threading-dies', 'Rex Type Threading Dies', [I('spare-parts/dies-rex-type-1.jpg'), I('spare-parts/dies-rex-type-2.jpg')], 'Threading dies for SQ50A and SQ100A machines.', { applications: ['SQ50A', 'SQ100A'] }),
  make(S, '100-type-threading-dies', '100 Type Threading Dies', [I('spare-parts/dies-100-type-1.jpg'), I('spare-parts/dies-100-type-2.jpg')], 'Threading dies for SQ50B1 and SQ100D1 machines.', { applications: ['SQ50B1', 'SQ100D1'] }),
  make(S, 'ridgid-type-threading-dies', 'Ridgid Type Threading Dies', [I('spare-parts/dies-ridgid-type.jpg')], 'Threading dies for ZK50A, SQ50D, SQ80C1 and SQ100F-2 machines.', { applications: ['ZK50A', 'SQ50D', 'SQ80C1', 'SQ100F-2'] }),
  make(S, 'roller-1-1-4-to-1-1-2-inch', 'Roller 1¼"–1½"', [I('spare-parts/roller-1-1-4-to-1-1-2.png')], 'Grooving roller for 1¼ to 1½ inch pipe.'),
  make(S, 'roller-2-to-6-inch', 'Roller 2"–6"', [I('spare-parts/roller-2-to-6.png')], 'Grooving roller for 2 to 6 inch pipe.'),
  make(S, 'shaft-1-inch', 'Shaft 1"', [I('spare-parts/shaft-1-inch.png')], 'Replacement shaft, 1 inch.'),
  make(S, 'shaft-2-to-6-inch', 'Shaft 2"–6"', [I('spare-parts/shaft-2-to-6.png')], 'Replacement shaft for 2 to 6 inch pipe.'),
  make(S, 'shaft-8-inch', 'Shaft 8"', [I('spare-parts/shaft-8-inch.png')], 'Replacement shaft, 8 inch.'),
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const productsByCategory = (slug) => products.filter((p) => p.category === slug)
export const featuredProducts = ['sq100a-pipe-threading-machine', 'jk150-roll-grooving-machine', 'kc114-pipe-cutting-machine', 'hole-saw-cutting-machine', 'hydraulic-butt-jointing-machine', 'sq150a-pipe-threading-machine'].map(getProduct)

export const heroProducts = ['sq100a-pipe-threading-machine', 'hole-saw-cutting-machine', 'kc114-pipe-cutting-machine', 'jk150-roll-grooving-machine', 'rex-type-threading-dies'].map(getProduct)
