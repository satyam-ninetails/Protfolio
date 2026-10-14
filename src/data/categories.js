const img = (p) => `/images/products/${p}`

export const categories = [
  { slug: 'pipe-threading-machines', name: 'Pipe Threading Machines', image: img('pipe-threading/fl100a1.jpg'),
    description: 'Robust threading machines for cutting precise pipe threads on site or in the workshop.' },
  { slug: 'roll-grooving-machine', name: 'Roll Grooving Machine', image: img('roll-grooving/lsg-219.jpg'),
    description: 'Roll grooving equipment for fast, consistent grooves on steel pipe.' },
  { slug: 'pipe-cutting-machine', name: 'Pipe Cutting Machine', image: img('pipe-cutting/chm1.jpg'),
    description: 'Clean, accurate pipe cutting machines for demanding fabrication work.' },
  { slug: 'hole-saw-cutting-machines', name: 'Hole Saw Cutting Machines', image: img('hole-saw/k-114.jpg'),
    description: 'Hole saw cutting machines for precise openings and branch connections.' },
  { slug: 'pressure-test-pumps', name: 'Pressure Test Pumps', image: img('pressure-test/tp-50.jpg'),
    description: 'Pumps for dependable hydrostatic pressure testing of pipes and systems.' },
  { slug: 'butt-jointing-machine', name: 'Butt Jointing Machine', image: img('butt-jointing/fl-315h.jpg'),
    description: 'Butt jointing machines for strong, uniform pipe joints.' },
  { slug: 'pipe-bending-machines', name: 'Pipe Bending Machines', image: img('pipe-bending/bender-2in.jpg'),
    description: 'Bending machines for accurate, repeatable pipe bends.' },
  { slug: 'spare-parts', name: 'Spare Parts', image: img('spare-parts/pipe-threading-oil.jpg'),
    description: 'Pipe threading oil and other consumables for your machines.' },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
