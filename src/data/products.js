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

  // Threading
  make(T, 'nt50a-pipe-threading-machine', 'NT50A Pipe Threading Machine', [I('pipe-threading/nt50a.jpg')], '2" threading machine with a 700 W motor — affordable and reliable.', {
  description: 'A dependable 2-inch threading machine for everyday plumbing and fabrication work. The manual-open die head makes die changes quick, and the machine ships with the dies, oil and stand needed to start threading straight away.',
  features: ['Threads pipe from ½" to 2"', '700 W series motor', 'Manual-open die head', 'Supplied with stand, dies and cutting oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'NT50A'],
    ['Type of head', 'Manual open'],
    ['Threading capacity', '½" – 2"'],
    ['Voltage', '220 V (50/60 Hz)'],
    ['Motor', '700 W series motor'],
    ['Speed', '39 rpm'],
    ['Weight', '48 kg'],
    ['Size (L × W × H)', '580 × 360 × 390 mm'],
    ['Standard accessories', 'Cutting oil 3 L, hex key wrench 3-4-5-6 mm, dies ½"–¾" and 1"–2" (one set each), manual-open die head ½"–2", stand'],
  ] }),
  make(T, 'cn50a-ii-pipe-threading-machine', 'CN50A-II Pipe Threading Machine', [I('pipe-threading/cn50a-ii.jpg')], '2" threading machine with a 600 W motor for light-duty site work.', {
  description: 'A compact 2-inch threading machine that is easy to move around site. A manual-open die head and a 600 W series motor make it a practical choice for installers and maintenance teams.',
  features: ['Threads pipe from ½" to 2"', '600 W series motor', 'Light at 49 kg', 'Supplied with stand, dies and cutting oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'CN50A-II'],
    ['Type of head', 'Manual open'],
    ['Threading capacity', '½" – 2"'],
    ['Voltage', '220 V (50/60 Hz)'],
    ['Motor', '600 W series motor'],
    ['Speed', '36 rpm'],
    ['Weight', '49 kg'],
    ['Size (L × W × H)', '560 × 320 × 380 mm'],
    ['Standard accessories', 'Cutting oil 3 L, hex key wrench 3-4-5-6 mm, dies ½"–¾" and 1"–2" (one set each), die head ½"–2", stand'],
  ] }),
  make(T, 'nv50p-pipe-threading-machine', 'NV50P Pipe Threading Machine', [I('pipe-threading/nv50p.jpg')], '2" threading machine with a 1000 W induction motor.', {
  description: 'A 2-inch threading machine built around a 1000 W induction motor for smooth, low-noise running over long shifts. It comes complete with alloy dies, a die head, oil and a stand.',
  features: ['Threads pipe from ½" to 2"', '1000 W induction motor', 'Alloy dies included', 'Supplied with stand and cutting oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'NV50P'],
    ['Threading capacity', '½" – 2"'],
    ['Motor', '1000 W (induction)'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '28 rpm'],
    ['Weight', '53 kg'],
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 1"–2" alloy dies, one ½"–2" die head, 3 L oil, stand'],
  ] }),
  make(T, 'cn50a-iii-pipe-threading-machine', 'CN50A-III Pipe Threading Machine', [I('pipe-threading/cn50a-iii.jpg')], '2" threading machine with a powerful 1500 W series motor.', {
  description: 'The strongest of our 2-inch threading machines, with a 1500 W series motor for fast threading on heavier jobs. Supplied with alloy dies, die head, oil and stand.',
  features: ['Threads pipe from ½" to 2"', '1500 W series motor', 'Alloy dies included', 'Supplied with stand and cutting oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'CN50A-III'],
    ['Threading capacity', '½" – 2"'],
    ['Motor', '1500 W series motor'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '38 rpm'],
    ['Weight', '60 kg'],
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 1"–2" alloy dies, one ½"–2" die head, 3 L oil, stand'],
  ] }),
  make(T, 'np80a-pipe-threading-machine', 'NP80A Pipe Threading Machine', [I('pipe-threading/np80a.jpg')], '3" threading machine with a 1000 W motor.', {
  description: 'A step up from the 2-inch machines, the NP80A threads pipe up to 3 inches. It is supplied with two die heads and three die sets so a single machine covers the full ½" to 3" range.',
  features: ['Threads pipe from ½" to 3"', '1000 W series motor', 'Two die heads included', 'Supplied with stand, dies and oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'NP80A'],
    ['Type of head', 'Manual open'],
    ['Threading capacity', '½" – 3"'],
    ['Voltage', '220 V (50/60 Hz)'],
    ['Motor', '1000 W series motor'],
    ['Speed', '29 rpm'],
    ['Weight', '67 kg'],
    ['Size (L × W × H)', '690 × 490 × 423 mm'],
    ['Standard accessories', 'Carbon brushes (1 pair), cutting oil 4 L, hex key wrench 3-4-5-6 mm, dies ½"–¾", 1"–2" and 2½"–3" (one set each), die heads ½"–2" and 2½"–3", stand'],
  ] }),
  make(T, 'nv100p-pipe-threading-machine', 'NV100P Pipe Threading Machine', [I('pipe-threading/nv100p.jpg')], '4" threading machine with an induction motor and automatic die head.', {
  description: 'A heavy-duty 4-inch threading machine with a 1100 W induction motor and two-speed operation. A manual die head covers ½"–2" and an automatic die head covers 2½"–4".',
  features: ['Threads pipe from ½" to 4"', '1100 W induction motor', 'Manual and automatic die heads', 'Two-speed operation'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'NV100P'],
    ['Threading capacity', '½" – 4"'],
    ['Motor', '1100 W (induction)'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '24 / 10 rpm'],
    ['Weight', '108 kg'],
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 2½"–4" alloy dies, one ½"–2" die head (manual), one 2½"–4" die head (automatic), 3 L oil, stand'],
  ] }),
  make(T, 'cn100a-1-pipe-threading-machine', 'CN100A-1 Industrial Pipe Threading Machine', [I('pipe-threading/cn100a-1.jpg')], 'Industrial 4" threading machine with a 1000 W condenser motor.', {
  description: 'An industrial 4-inch threading machine for workshops and heavy site work. It is supplied with three die sets and two die heads, a manual head for smaller pipe and a profiling head for 2½"–4".',
  features: ['Threads pipe from ½" to 4"', '1000 W condenser motor', 'Manual and profiling die heads', 'Supplied with stand, dies and oil'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'CN100A-1'],
    ['Type of head', 'Manual open'],
    ['Threading capacity', '½" – 4"'],
    ['Voltage', '220 V (50/60 Hz)'],
    ['Motor', '1000 W condenser motor'],
    ['Weight', '107 kg'],
    ['Size (L × W × H)', '1000 × 600 × 620 mm'],
    ['Standard accessories', 'Cutting oil 4 L, hex key wrench 3-4-5-6 mm, dies ½"–¾", 1"–2" and 2½"–4" (one set each), die heads ½"–2" (manual) and 2½"–4" (profiling), stand'],
  ] }),
  make(T, 'cn100a-tg-pipe-threading-machine', 'CN100A-TG Pipe Threading Machine', [I('pipe-threading/cn100a-tg.jpg')], '4" threading machine with an automatic profiling die head.', {
  description: 'A 4-inch threading machine with a uni-auto open head and an automatic profiling head. A 1200 W condenser motor and three speeds give the right cutting speed for each pipe size.',
  features: ['Threads pipe from ½" to 4"', '1200 W condenser motor', 'Three speeds matched to pipe size', 'Automatic profiling die head'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'CN100A-TG'],
    ['Type of head', 'Uni auto open, profiling (auto)'],
    ['Threading capacity', '½" – 4"'],
    ['Voltage', '220 V (50/60 Hz)'],
    ['Motor', '1200 W condenser motor'],
    ['Speed', '36 rpm (½"–¾"), 20 rpm (1"–2"), 11 rpm (2½"–4")'],
    ['Weight', '103 kg'],
    ['Size (L × W × H)', '873 × 635 × 558 mm'],
    ['Standard accessories', 'Cutting oil 3 L, hex key wrench 3-4-5-6 mm, dies ½"–¾", 1"–2" and 2½"–4" (one set each), die heads ½"–2" (uni-auto) and 2½"–4" (profiling), stand'],
  ] }),
  make(T, 'nv62-pipe-threading-machine', 'NV-62 Manual Pipe Threader', [I('pipe-threading/nv62.jpg')], 'Hand-operated threader kit for pipe up to 1".', {
  description: 'A portable manual threader for small-bore pipe. It needs no power, comes in a carry case with interchangeable die heads and suits quick repairs where a machine will not fit.',
  features: ['Threads pipe from ½" to 1" (BSPT)', 'No power supply needed', 'Interchangeable die heads', 'Carry case for easy transport'],
  applications: ['Plumbing repairs', 'Maintenance and service work', 'Tight or remote locations'],
  specifications: [
    ['Model', 'NV-62'],
    ['Threading capacity', '½" – 1" (BSPT)'],
    ['Die heads', '½", ¾", 1"'],
  ] }),

  // Roll grooving
  make(R, 'rg150-roll-grooving-machine', 'RG-150 / RG-150A Roll Grooving Machine', [I('roll-grooving/rg150.jpg')], 'Hydraulic roll grooving machine for 1"–16" pipe, hand or auto pump.', {
  description: 'A portable hydraulic roll grooving machine that forms grooves by deforming the pipe wall, which keeps the pipe strong. Available with a hand pump (RG-150) or an automatic pump (RG-150A), and compatible with a wide range of roller sets and shafts.',
  features: ['Grooves 1"–16" Sch.10 and 1"–12" Sch.40 steel pipe', 'Hand pump (RG-150) or auto pump (RG-150A)', '700 W series motor', 'Roller sets for stainless steel pipe available'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'RG-150 (hand pump) / RG-150A (auto pump)'],
    ['Pipe capacity', '1" – 16" Sch.10 steel pipe; 1" – 12" Sch.40 steel pipe'],
    ['Standard roller set', '2" – 6" (Sch.10 – 40)'],
    ['Motor', '700 W series motor'],
    ['Voltage', '220 V (110 V available)'],
    ['Rotation speed', '49 rpm (unloaded)'],
    ['Dimensions (D × W × H)', '685 × 490 × 625 mm'],
    ['Net weight', '75 kg (RG-150) / 85 kg (RG-150A)'],
    ['Standard accessories', 'Tool box, spirit level, spanner, T-wrench, grease'],
    ['Optional accessories', 'Roller sets and main shafts for 1"–1½", 8"–12", 10"–12" and 14"–16" pipe, plus stainless steel (Sch.5S–10S) roller sets'],
  ] }),
  make(R, 'nv5a-roll-grooving-machine', 'NV-5A Pipe Grooving Machine', [I('roll-grooving/nv5a.jpg')], 'Compact grooving machine for 1"–6" Sch.40 pipe.', {
  description: 'A compact electric grooving machine for pipe from 1" to 6". It is supplied with knurl wheels, pinch rollers and a pipe support stand, making it a complete package for fire-fighting and HVAC pipework.',
  features: ['Grooves 1"–6" (Ø33–Ø168) Sch.40 pipe', 'Max. wall thickness 6 mm', 'Pipe support stand included', 'Knurl wheels and pinch rollers supplied'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV-5A'],
    ['Capacity', '1" – 6" (Ø33 – Ø168) Sch.40 pipe'],
    ['Max. wall thickness', '6 mm'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '23 rpm'],
    ['Gross weight', '96 kg'],
    ['Standard accessories', 'Pipe support stand; knurl wheels Ø33–48, Ø57–89, Ø108–168 (one each); pinch rollers Ø33–48, Ø57–168 (one each); groove measuring tape'],
    ['Packaging size', '95 × 53 × 65 cm'],
  ] }),
  make(R, 'nv9a-roll-grooving-machine', 'NV-9A Pipe Grooving Machine', [I('roll-grooving/nv9a.jpg')], 'Grooving machine for 1"–8" Sch.40 pipe.', {
  description: 'An electric grooving machine that extends the range to 8-inch pipe with 8 mm wall thickness, supplied with the knurl wheels, pinch rollers and pipe support stand needed to start work.',
  features: ['Grooves 1"–8" (Ø33–Ø219) Sch.40 pipe', 'Max. wall thickness 8 mm', 'Pipe support stand included', 'Knurl wheels and pinch rollers supplied'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV-9A'],
    ['Capacity', '1" – 8" (Ø33 – Ø219) Sch.40 pipe'],
    ['Max. wall thickness', '8 mm'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '23 rpm'],
    ['Gross weight', '98 kg'],
    ['Standard accessories', 'Pipe support stand; knurl wheels Ø33–48, Ø57–89, Ø108–168, Ø219 (one each); pinch rollers Ø33–48, Ø57–168, Ø219 (one each); groove measuring tape'],
    ['Packaging size', '95 × 53 × 65 cm'],
  ] }),
  make(R, 'nv2a-roll-grooving-machine', 'NV-2A Pipe Grooving Machine', [I('roll-grooving/nv2a.jpg')], 'Grooving machine for 2"–12" Sch.40 pipe with foot switch.', {
  description: 'A foot-switch-operated grooving machine for 2" to 12" pipe with up to 10 mm wall. Three knurl wheels, two pinch rollers and a pipe support stand are included.',
  features: ['Grooves 2"–12" (Ø60–Ø325) Sch.40 pipe', 'Max. wall thickness 10 mm', 'Foot switch control', 'Pipe support stand included'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV-2A'],
    ['Capacity', '2" – 12" (Ø60 – Ø325) Sch.40 pipe'],
    ['Max. wall thickness', '10 mm'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '23 rpm'],
    ['Gross weight', '163 kg'],
    ['Standard accessories', 'Pipe support stand; knurl wheels Ø60–76, Ø89–168, Ø219–325 (one each); pinch rollers Ø60–168, Ø219–325 (one each); groove measuring tape; foot switch'],
    ['Packaging size', '78 × 72 × 92 cm'],
  ] }),
  make(R, 'rx12e-roll-grooving-machine', 'RX-12E Pipe Grooving Machine', [I('roll-grooving/rx12e.jpg')], '750 W grooving machine for 2"–12" pipe.', {
  description: 'A 750 W electric grooving machine covering Sch.40 pipe from 2" to 6" and Sch.10 pipe from 8" to 12", supplied with pinch rollers, knurling wheels and a pipe support stand.',
  features: ['2"–6" Sch.40 and 8"–12" Sch.10 pipe', '750 W motor', 'Pipe support stand included', 'Pinch rollers and knurling wheels supplied'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'RX-12E'],
    ['Capacity', '2" – 6" for Sch.40; 8" – 12" for Sch.10'],
    ['Motor', '750 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '24 rpm'],
    ['Gross weight', '150 kg'],
    ['Standard accessories', 'Pipe support stand; pinch rollers 2"–6" and 8"–12"; knurling wheels 2"–3", 4"–6" and 8"–12" (one each)'],
  ] }),
  make(R, 'nv4a-roll-grooving-machine', 'NV-4A Heavy-Duty Pipe Grooving Machine', [I('roll-grooving/nv4a.jpg')], 'Three-phase grooving machine for large pipe, 8"–24".', {
  description: 'A heavy-duty three-phase grooving machine for large-diameter pipe from 8" to 24" with wall thickness up to 13 mm. A hydraulic pipe support stand holds heavy lengths steady while grooving.',
  features: ['Grooves 8"–24" (Ø219–Ø630) Sch.40 pipe', 'Max. wall thickness 13 mm', 'Hydraulic pipe support stand', 'Three-phase 380–415 V'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV-4A'],
    ['Capacity', '8" – 24" (Ø219 – Ø630) Sch.40 pipe'],
    ['Max. wall thickness', '13 mm'],
    ['Voltage', '380–415 V, 50 Hz'],
    ['Speed', '15 rpm'],
    ['Gross weight', '340 kg'],
    ['Standard accessories', 'Hydraulic pipe support stand; knurl wheels Ø219–325, Ø377–426, Ø480–630 (one each); pinch rollers Ø219–530 and Ø630 (one each); groove measuring tape'],
    ['Packaging size', '102 × 75 × 147 cm'],
  ] }),

  // Pipe cutting
  make(C, 'nv12a-pipe-cutting-machine', 'NV-12A Heavy-Duty Pipe Cutting Machine', [I('pipe-cutting/nv12a.jpg')], 'Heavy-duty cutter for 2"–12" pipe with up to 10 mm wall.', {
  description: 'A heavy-duty orbital pipe cutting machine for clean, square cuts on pipe from 2" to 12". A 750 W motor drives the cut, and the support stand holds longer lengths steady.',
  features: ['Cuts 2"–12" (Ø60–Ø325) Sch.40 pipe', 'Max. wall thickness 10 mm', '750 W single-phase motor', 'Supplied with pipe support stand'],
  applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'NV-12A (heavy duty)'],
    ['Max. wall thickness', '10 mm'],
    ['Pipe diameter', '2" – 12" (Ø60 mm – Ø325 mm) Sch.40 pipe'],
    ['Speed', '23 rpm'],
    ['Electric motor', '750 W, 220 V, 50 Hz, single phase'],
  ] }),
  make(C, 'nv12h-pipe-cutting-machine', 'NV-12H Pipe Cutting Machine', [I('pipe-cutting/nv12h.jpg')], 'Pipe cutter for 2"–12" pipe with up to 8 mm wall.', {
  description: 'A pipe cutting machine for 2" to 12" pipe with wall thickness up to 8 mm. It is built for stable, accurate cuts on pipe up to 12 inches.',
  features: ['Cuts 2"–12" (Ø60–Ø325) Sch.40 pipe', 'Max. wall thickness 8 mm', '750 W single-phase motor', 'Built for stable, accurate cuts'],
  applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'NV-12H'],
    ['Max. wall thickness', '8 mm'],
    ['Pipe diameter', '2" – 12" (Ø60 mm – Ø325 mm) Sch.40 pipe'],
    ['Speed', '23 rpm'],
    ['Electric motor', '750 W, 220 V, 50 Hz, single phase'],
  ] }),

  // Hole saw
  make(H, 'nv-iiia-hole-saw-cutting-machine', 'NV-IIIA Heavy-Duty Hole Saw Cutting Machine', [I('hole-saw/nv-iiia.jpg')], 'Portable hole cutter for openings up to 114 mm.', {
  description: 'A portable hole saw machine that mounts on the pipe and cuts openings up to 114 mm quickly and accurately. The heavy-duty version handles walls up to 10 mm.',
  features: ['Cuts holes up to 114 mm in pipe', 'Quick mounting and quick cutting', 'Handles wall thickness up to 10 mm', 'Portable and easy to operate'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  specifications: [
    ['Model', 'NV-IIIA (heavy duty)'],
    ['Power input', '700 W'],
    ['Voltage', '230 V, 50 Hz'],
    ['Speed', '110 rpm'],
    ['Max. wall thickness', '10 mm'],
    ['Max. cutting capacity', '114 mm'],
    ['Pipe mounting capacity', '30 – 220 mm'],
    ['Drill chuck capacity', '3 – 16 mm'],
    ['Overall dimensions (L × W × H)', '320 × 320 × 620 mm'],
    ['Net weight', '19 kg'],
  ] }),
  make(H, 'nv-iiih-hole-saw-cutting-machine', 'NV-IIIH Hole Saw Cutting Machine', [I('hole-saw/nv-iiih.jpg')], 'Portable hole cutter with built-in bubble levels, up to 114 mm.', {
  description: 'A portable hole saw machine with built-in bubble levels for aligning multiple holes, and a tool-free quick-release handle that can be fitted on either side.',
  features: ['Cuts holes up to 114 mm in pipe', 'Built-in bubble levels for hole alignment', 'Tool-free quick-release handle, either side', 'Portable and easy to operate'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  specifications: [
    ['Model', 'NV-IIIH'],
    ['Power input', '700 W'],
    ['Voltage', '230 V, 50 Hz'],
    ['Speed', '110 rpm'],
    ['Max. wall thickness', '8 mm'],
    ['Max. cutting capacity', '114 mm'],
    ['Pipe mounting capacity', '30 – 220 mm'],
    ['Drill chuck capacity', '3 – 16 mm'],
    ['Overall dimensions (L × W × H)', '550 × 300 × 350 mm'],
    ['Net weight', '17 kg'],
  ] }),

  // Pressure test pumps
  make('pressure-test-pumps', 'rx60m-pressure-test-pump', 'RX-60M Manual Pressure Test Pump', [I('pressure-test/rx60m.jpg')], 'Hand-operated test pump, 6 MPa, 10 L tank.', {
  description: 'A compact manual test pump with a brass pump body and a 10-litre water tank. Compact and lightweight, with simple operation and easy upkeep.',
  features: ['Brass pump body', 'Max. pressure 6.0 MPa (60 kg/cm²)', '10 L water tank', 'Compact, lightweight and portable'],
  applications: ['Pipeline pressure testing', 'Leak testing of heating, plumbing and sprinkler systems', 'Pressure vessel testing', 'Installation and commissioning'],
  specifications: [
    ['Model', 'RX-60M'],
    ['Max. pressure', '6.0 MPa / 60 kg/cm²'],
    ['Stroke', '35 mm'],
    ['Flow per stroke', '13 cc'],
    ['Water tank capacity', '10 L'],
  ] }),
  make('pressure-test-pumps', 'rx60a-pressure-test-pump', 'RX-60A Electric Pressure Test Pump', [I('pressure-test/rx60a.jpg')], 'Electric test pump, 6 MPa, 700 W.', {
  description: 'A compact electric test pump with steady output for quick, exact pressure testing. Suited to leak testing in heating, compressed air, refrigeration, oil and sprinkler systems, and to pipeline and pressure vessel tests.',
  features: ['Pressure range 0–6.0 MPa (0–900 psi)', 'Flow 6 L/min (360 L/h)', '700 W motor, compact and easy to carry', 'Simple maintenance'],
  applications: ['Pipeline pressure testing', 'Leak testing of heating, plumbing and sprinkler systems', 'Pressure vessel testing', 'Installation and commissioning'],
  specifications: [
    ['Model', 'RX-60A'],
    ['Pressure range', '0 – 6.0 MPa / 0 – 60 kg/cm² / 0 – 900 psi'],
    ['Flow', '6 L/min – 360 L/h'],
    ['Motor', '700 W, 220 V, 50 Hz'],
    ['Dimensions', 'Plastic box 39 × 29 × 29 cm'],
  ] }),

  // Butt jointing
  make(B, 'nv160d4-butt-jointing-machine', 'NV160D4 / NV200D4 Manual Butt Jointing Machine', [I('butt-jointing/nv160d4.jpg')], 'Manual butt fusion machine for PE, PP and PVDF pipe up to 200 mm.', {
  description: 'A manual butt fusion machine for jointing PE, PP and PVDF pipe. It ships with the frame, chamfering tool, heating plate, steel stand and tool box, and handles pipe from 63 mm up to 160 mm (NV160D4) or 200 mm (NV200D4).',
  features: ['Joins PE, PP and PVDF pipe', 'Pipe sizes 63–160 mm (NV160D4) / 63–200 mm (NV200D4)', 'Heating plate up to 270 °C, ±3 °C accuracy', 'Complete set with stand and tool box'],
  applications: ['Pipeline construction', 'Water and gas distribution', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV160D4 / NV200D4'],
    ['Applicable material', 'PE, PP, PVDF'],
    ['Pipe size (mm)', 'NV160D4: 63, 75, 90, 110, 125, 140, 160 — NV200D4: 63, 75, 90, 110, 125, 140, 160, 180, 200'],
    ['Input voltage', '220 V'],
    ['Chamfering tool power', '1000 W'],
    ['Heating plate power', 'NV160D4: 1500 W — NV200D4: 1800 W'],
    ['Heating plate max. temperature', '270 °C (±3 °C)'],
    ['Operation temperature', '220 °C'],
    ['Gross weight (approx.)', 'NV160D4: 45 kg — NV200D4: 50 kg'],
    ['Scope of delivery', 'Basic frame, chamfering tool, heating plate, steel stand and tool box'],
  ] }),
  make(B, 'nv250d4-butt-jointing-machine', 'NV250D4 Manual Butt Jointing Machine', [I('butt-jointing/nv250d4.jpg')], 'Manual butt fusion machine for PE, PP and PVDF pipe 90–250 mm.', {
  description: 'A manual butt fusion machine for larger PE, PP and PVDF pipe from 90 mm to 250 mm, with a 2000 W heating plate and 1100 W chamfering tool.',
  features: ['Joins PE, PP and PVDF pipe', 'Pipe sizes 90–250 mm', 'Heating plate up to 270 °C, ±3 °C accuracy', 'Complete set with stand and tool box'],
  applications: ['Pipeline construction', 'Water and gas distribution', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'NV250D4'],
    ['Applicable material', 'PE, PP, PVDF'],
    ['Pipe size (mm)', '90, 110, 125, 140, 160, 180, 200, 225, 250'],
    ['Input voltage', '220 V'],
    ['Chamfering tool power', '1100 W'],
    ['Heating plate power', '2000 W'],
    ['Heating plate max. temperature', '270 °C (±3 °C)'],
    ['Operation temperature', '220 °C'],
    ['Gross weight (approx.)', '70 kg'],
    ['Scope of delivery', 'Basic frame, chamfering tool, heating plate, steel stand and tool box'],
  ] }),
  make(B, 'nv200-355-butt-jointing-machine', 'NV200 – NV355 Hydraulic Butt Jointing Machine', [I('butt-jointing/nv200-355.jpg')], 'Hydraulic butt fusion machines for PE, PP and PVDF pipe 63–355 mm.', {
  description: 'A hydraulic butt fusion series for jointing PE, PP and PVDF pipe from 63 mm up to 355 mm. The hydraulic station gives controlled, repeatable joining pressure up to 6.3 MPa.',
  features: ['Joins PE, PP and PVDF pipe', 'Four models covering 63–355 mm pipe', 'Adjustable pressure 0–6.3 MPa', 'Heating plate up to 270 °C, ±3 °C accuracy'],
  applications: ['Pipeline construction', 'Water and gas distribution', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Models', 'NV200 / NV250 / NV315 / NV355'],
    ['Applicable material', 'PE, PP, PVDF'],
    ['Pipe size (mm)', 'NV200: 63–200 — NV250: 90–250 — NV315: 90–315 — NV355: 160–355'],
    ['Input voltage', '220 V'],
    ['Chamfering tool power', '1000 W / 1100 W / 1100 W / 1100 W'],
    ['Heating plate power', '1800 W / 2300 W / 3100 W / 3600 W'],
    ['Hydraulic station power', '750 W'],
    ['Pressure adjustable range', '0 – 6.3 MPa'],
    ['Heating plate max. temperature', '270 °C (±3 °C)'],
    ['Operation temperature', '220 °C'],
    ['Gross weight (approx.)', '129 / 155 / 200 / 230 kg'],
    ['Scope of delivery', 'Basic frame, chamfering tool, heating plate, hydraulic station, steel stand and tool box'],
  ] }),
  make(B, 'nv400-630-butt-jointing-machine', 'NV400 – NV630 Hydraulic Butt Jointing Machine', [I('butt-jointing/nv400-630.jpg')], 'Heavy-duty hydraulic butt fusion machines for pipe 200–630 mm.', {
  description: 'A heavy-duty three-phase hydraulic butt fusion series for large-diameter PE, PP and PVDF pipe from 200 mm up to 630 mm.',
  features: ['Joins PE, PP and PVDF pipe', 'Three models covering 200–630 mm pipe', 'Adjustable pressure 0–6.3 MPa', 'Three-phase 380 V'],
  applications: ['Pipeline construction', 'Water and gas distribution', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Models', 'NV400 / NV500 / NV630'],
    ['Applicable material', 'PE, PP, PVDF'],
    ['Pipe size (mm)', 'NV400: 200–400 — NV500: 280–500 — NV630: 400–630'],
    ['Input voltage', '380 V'],
    ['Chamfering tool power', '1100 W'],
    ['Heating plate power', '6500 W / 6500 W / 7500 W'],
    ['Hydraulic station power', '1100 W / 1500 W / 1500 W'],
    ['Pressure adjustable range', '0 – 6.3 MPa'],
    ['Heating plate max. temperature', '270 °C (±3 °C)'],
    ['Operation temperature', '220 °C'],
    ['Gross weight (approx.)', '376 / 480 / 645 kg'],
    ['Scope of delivery', 'Basic frame, chamfering tool, heating plate, hydraulic station, steel stand and tool box'],
  ] }),

  // Sample products (pipe bending only) using placeholder photos — replace with real products/images.
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
export const featuredProducts = [
  'nv100p-pipe-threading-machine', 'rg150-roll-grooving-machine', 'nv12a-pipe-cutting-machine',
  'nv-iiia-hole-saw-cutting-machine', 'rx60a-pressure-test-pump', 'nv160d4-butt-jointing-machine',
].map(getProduct)

// Home carousel: one slide per category, two products of that category shown stacked.
export const heroSlides = [
  { category: 'pipe-threading-machines', products: ['nv100p-pipe-threading-machine', 'cn50a-iii-pipe-threading-machine'] },
  { category: 'roll-grooving-machine', products: ['nv5a-roll-grooving-machine', 'rg150-roll-grooving-machine'] },
  { category: 'pipe-cutting-machine', products: ['nv12a-pipe-cutting-machine', 'nv12h-pipe-cutting-machine'] },
  { category: 'hole-saw-cutting-machines', products: ['nv-iiia-hole-saw-cutting-machine', 'nv-iiih-hole-saw-cutting-machine'] },
  { category: 'pressure-test-pumps', products: ['rx60a-pressure-test-pump', 'rx60m-pressure-test-pump'] },
  { category: 'butt-jointing-machine', products: ['nv160d4-butt-jointing-machine', 'nv200-355-butt-jointing-machine'] },
  { category: 'spare-parts', products: ['rex-type-threading-dies', '100-type-threading-dies'] },
].map((s) => ({ ...s, products: s.products.map(getProduct) }))
