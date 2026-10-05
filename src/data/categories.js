const img = (p) => `/images/products/${p}`

export const categories = [
  { slug: 'pipe-threading-machines', name: 'Pipe Threading Machines', image: img('pipe-threading/sq100a.jpg'),
    description: 'Robust threading machines for cutting precise pipe threads on site or in the workshop.' },
  { slug: 'roll-grooving-machine', name: 'Roll Grooving Machine', image: img('roll-grooving/jk150.jpg'),
    description: 'Roll grooving equipment for fast, consistent grooves on steel pipe.' },
  { slug: 'pipe-cutting-machine', name: 'Pipe Cutting Machine', image: img('pipe-cutting/kc114.png'),
    description: 'Clean, accurate pipe cutting machines for demanding fabrication work.' },
  { slug: 'hole-saw-cutting-machines', name: 'Hole Saw Cutting Machines', image: img('hole-saw/hole-saw.png'),
    description: 'Hole saw cutting machines for precise openings and branch connections.' },
  { slug: 'pressure-test-pumps', name: 'Pressure Test Pumps', image: null,
    description: 'Pumps for dependable hydrostatic pressure testing of pipes and systems.' },
  { slug: 'butt-jointing-machine', name: 'Butt Jointing Machine', image: img('butt-jointing/model-2024758s-1.jpg'),
    description: 'Butt jointing machines for strong, uniform pipe joints.' },
  { slug: 'pipe-bending-machines', name: 'Pipe Bending Machines', image: null,
    description: 'Bending machines for accurate, repeatable pipe bends.' },
  { slug: 'spare-parts', name: 'Spare Parts', image: img('spare-parts/dies-rex-type-1.jpg'),
    description: 'Threading dies, rollers, shafts and other genuine consumables and spares.' },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
