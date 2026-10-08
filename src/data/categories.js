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
  { slug: 'pressure-test-pumps', name: 'Pressure Test Pumps', image: img('pressure-test/rx60a.jpg'),
    description: 'Pumps for dependable hydrostatic pressure testing of pipes and systems.' },
  { slug: 'butt-jointing-machine', name: 'Butt Jointing Machine', image: img('butt-jointing/nv160d4.jpg'),
    description: 'Butt jointing machines for strong, uniform pipe joints.' },
  { slug: 'pipe-bending-machines', name: 'Pipe Bending Machines', image: img('pipe-bending/sample-1.png'),
    description: 'Bending machines for accurate, repeatable pipe bends.' },
  { slug: 'band-saw-machines', name: 'Band Saw Machines', image: img('band-saws/xb270a.jpg'),
    description: 'Band saws for pipe, tube and bar, plus a bench grinder.' },
  { slug: 'cleaning-machines', name: 'Cleaning Machines', image: img('cleaning/rx200.jpg'),
    description: 'Drain cleaning machines, AC cleaners and high pressure washers.' },
  { slug: 'inspection-equipment', name: 'Inspection & Splicing Equipment', image: img('inspection/gls2820.jpg'),
    description: 'Pipe inspection camera and optical fibre fusion splicer.' },
  { slug: 'hvac-refrigeration-tools', name: 'HVAC & Refrigeration Tools', image: img('hvac/rx1s.jpg'),
    description: 'Vacuum pumps, recovery machine, manifolds, gauges and service tools.' },
  { slug: 'motors-and-fans', name: 'Motors & Fans', image: img('motors-fans/axial-fans.jpg'),
    description: 'Shaded pole motors and axial fans.' },
  { slug: 'spare-parts', name: 'Spare Parts', image: img('spare-parts/dies-rex-type-1.jpg'),
    description: 'Threading dies, rollers, shafts and other genuine consumables and spares.' },
]

export const getCategory = (slug) => categories.find((c) => c.slug === slug)
