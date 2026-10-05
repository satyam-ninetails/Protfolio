// Add products here. `images[0]` is the card image; omit images to use the placeholder.
// Replace `specifications` / `features` with real data as it becomes available.
const I = (p) => `/images/products/${p}`
const TBC = [['Specifications', 'Available on request — please contact us']]

let n = 0
const make = (category, slug, name, images, shortDescription, extra = {}) => ({
  id: `${category.slice(0, 3)}-${String(++n).padStart(3, '0')}`,
  slug,
  name,
  category,
  image: images[0] || null,
  images,
  shortDescription,
  description: extra.description || `${name} from FLEET. Contact our team for detailed technical information, configuration options and availability.`,
  features: extra.features || ['Engineered for dependable performance', 'Built for durability in industrial use', 'Technical support available'],
  specifications: extra.specifications || TBC,
  applications: extra.applications || ['Pipe processing', 'Industrial and construction projects'],
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

  make(B, 'butt-jointing-machine-2024758s', 'Butt Jointing Machine 2024758S',
    Array.from({ length: 10 }, (_, i) => I(`butt-jointing/model-2024758s-${i + 1}.jpg`)),
    'Butt jointing machine for strong, uniform pipe joints.', { specifications: [['Model', '2024758S'], ['Other specifications', 'Available on request']] }),

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
export const featuredProducts = ['sq100a-pipe-threading-machine', 'jk150-roll-grooving-machine', 'kc114-pipe-cutting-machine', 'hole-saw-cutting-machine', 'butt-jointing-machine-2024758s', 'sq150a-pipe-threading-machine'].map(getProduct)
