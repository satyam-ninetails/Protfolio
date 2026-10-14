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
  make(R, 'fl9a-roll-grooving-machine', 'FL9A Electric Hydraulic Roll Grooving Machine (1"–8")', [I('roll-grooving/fl9a.jpg'), I('roll-grooving/fl9a-yellow.jpg'), I('roll-grooving/fl9a-detail1.jpg'), I('roll-grooving/fl9a-detail2.jpg')], 'Electric hydraulic roll grooving machine for 1"–8" steel pipe.', {
  description: 'An electric hydraulic roll grooving machine for steel pipe from 1" to 8", with a hydraulic feeding pump, foot switch and pipe stand for efficient grooving on site or in the workshop.',
  features: ['Grooves 1"–8" Sch.10/40 steel pipe', '800 W drive unit with hydraulic feeding pump', 'Foot switch and pipe stand', 'Drive and groove rollers for each size range'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL9A (1" – 8")'],
    ['Fabrication capacity', '1" – 8" (DN25–DN200, Ø33–Ø219) Sch.10/40 steel pipe'],
    ['Max. wall thickness', '8 mm'],
    ['Output speed', '23 RPM'],
    ['Drive unit', '800 W, 220 V, 50/60 Hz, single phase'],
    ['Gross weight', '98 kg'],
    ['Packing size', '73 × 40 × 77 cm'],
    ['Standard accessories', 'Drive rollers 1"–1½", 2"–6", 8"; groove rollers 1"–1½", 2"–6", 8"; pipe stand for 1"–8"'],
    ['Optional accessories', 'Foot switch'],
  ] }),
  make(R, 'fl9a1-roll-grooving-machine', 'FL9A1 Electric Hydraulic Roll Grooving Machine (1"–8")', [I('roll-grooving/fl9a1-red.jpg'), I('roll-grooving/fl9a1-poster-crop.jpg'), I('roll-grooving/fl9a-poster.jpg')], 'Electric hydraulic roll grooving machine for 1"–8" steel pipe.', {
  description: 'An electric hydraulic roll grooving machine for steel pipe from 1" to 8". It is supplied with a pipe support stand, knurling wheels and pinch rollers for the full size range.',
  features: ['Grooves 1"–8" Sch.10/40 steel pipe', '750 W motor with hydraulic feed', 'Pipe support stand included', 'Knurling wheels and pinch rollers for each size range'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL9A1 (1" – 8")'],
    ['Fabrication capacity', '1" – 8" (DN25–DN200, Ø33–Ø219) Sch.10/40 steel pipe'],
    ['Max. wall thickness', '8 mm'],
    ['Output speed', '23 RPM'],
    ['Motor power', '750 W'],
    ['Voltage', '250 V'],
    ['Frequency', '50/60 Hz'],
    ['Gross weight', '98 kg'],
    ['Packing size', '73 × 40 × 77 cm'],
    ['Standard accessories', 'Pipe support stand; knurling wheels 1"–1½", 2"–3", 3"–6", 8"; pinch rollers 1"–1½", 2"–6", 8"'],
  ] }),
  make(R, 'fl12a-roll-grooving-machine', 'FL12A Electric Hydraulic Roll Grooving Machine (2"–12")', [I('roll-grooving/fl12a.jpg'), I('roll-grooving/fl12a-poster.jpg')], 'Electric hydraulic roll grooving machine for 2"–12" steel pipe.', {
  description: 'An electric hydraulic roll grooving machine for fast, accurate grooving of steel pipe from 2" to 12". It is supplied with a pipe support stand, upper rollers and knurling wheels.',
  features: ['Grooves 2"–12" steel pipe', '1100 W motor', 'Pipe support stand included', 'Upper rollers and knurling wheels for each size range'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL12A (2" – 12")'],
    ['Capacity', '2"–6" for schedule 40; 8"–12" for schedule 10'],
    ['Motor', '1100 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '24 RPM'],
    ['Standard accessories', 'Pipe support stand; upper rollers 2"–6", 8"–12"; knurling wheels 2"–3", 4"–6", 8"–12"'],
  ] }),
  make(R, 'fl12a1-roll-grooving-machine', 'FL12A1 Electric Hydraulic Roll Grooving Machine (2"–12")', [I('roll-grooving/fl12a1.jpg')], 'Electric hydraulic roll grooving machine for 2"–12" steel pipe.', {
  description: 'An electric hydraulic roll grooving machine for steel pipe from 2" to 12", supplied with a foot switch, pipe support stand, and knurling and pinch rollers.',
  features: ['Grooves 2"–12" steel pipe', '1100 W motor', 'Foot switch and pipe support stand', 'Knurling and pinch rollers for each size range'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL12A1 (2" – 12")'],
    ['Size', '2" – 12"'],
    ['Power', '1100 W'],
    ['Voltage', '220 V'],
    ['Weight', '115 / 125 kg'],
    ['Packing size', '81 × 41 × 80 cm'],
    ['Accessories', 'Knurling roller 60–76 mm / 89–165 mm / 219–325 mm; pinch roller 60–76 mm / 89–165 mm / 219–325 mm'],
  ] }),
  make(R, 'fl12p-roll-grooving-machine', 'FL12P Premium Electric Hydraulic Roll Grooving Machine (1"–12")', [I('roll-grooving/fl12p.jpg'), I('roll-grooving/fl12p-2.jpg'), I('roll-grooving/fl12p-detail.jpg')], 'Premium electric hydraulic roll grooving machine for 1"–12" steel pipe.', {
  description: 'A light-weight electric hydraulic roll grooving machine for steel pipe from 1" to 12", suited to municipal piping and fire protection systems. A hydraulic feeding pump and groove depth lock keep grooves consistent.',
  features: ['Grooves 1"–12" steel pipe', '1100 W drive unit with hydraulic feeding pump', 'Groove depth lock for consistent grooves', 'Pipe stand and foot switch supplied'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL12P (1" – 12")'],
    ['Fabrication capacity', '1" – 8" (DN25–DN200, Ø33–Ø219) Sch.10/40 steel pipe; 10" – 12" (DN250–DN300, Ø254–Ø325) Sch.10/20 steel pipe'],
    ['Max. wall thickness', '8 mm'],
    ['Output speed', '23 RPM'],
    ['Drive unit', '1100 W, 220 V (110 V available), 50/60 Hz, single phase'],
    ['Gross weight', '118 kg'],
    ['Packing size', '75 × 40 × 70 cm'],
    ['Standard accessories', 'Drive rollers 1"–1½", 2"–3", 3½"–6", 8"–12"; groove rollers 1"–1½", 2"–6", 8"–12"; pipe stand for 1"–12"; foot switch'],
  ] }),
  make(R, 'fl24a-roll-grooving-machine', 'FL24A Premium Electric Hydraulic Roll Grooving Machine (8"–24")', [I('roll-grooving/fl24a.jpg')], 'Premium electric hydraulic roll grooving machine for 8"–24" steel pipe.', {
  description: 'A heavy-duty electric hydraulic roll grooving machine for large-diameter steel pipe from 8" to 24". It is supplied with a hydraulic pipe support stand, knurl wheels, pinch rollers and a groove measuring tape.',
  features: ['Grooves 8"–24" Sch.40 steel pipe', 'Up to 13 mm wall thickness', 'Hydraulic pipe support stand included', 'Three-phase 380–415 V supply'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL24A (8" – 24")'],
    ['Capacity', '8" – 24" (Ø219 – Ø630) Sch.40 pipe'],
    ['Max. wall thickness', '13 mm'],
    ['Voltage', '380–415 V, 50 Hz'],
    ['Speed', '15 RPM'],
    ['Gross weight', '340 kg'],
    ['Standard accessories', 'Hydraulic pipe support stand; knurl wheel Ø219–Ø325, Ø377–Ø426, Ø480–Ø630 (one each); pinch roller Ø219–Ø530 and Ø630 (one each); groove measuring tape'],
    ['Packaging size', '102 × 75 × 147 cm'],
  ] }),
  make(H, 'fl-114a-hole-saw-cutting-machine', 'FL-114A Hole Saw Cutting Machine', [I('hole-saw/fl-114a.jpg')], 'Portable hole cutting machine, 1500 W, up to 114 mm.', {
  description: 'A portable 1500 W hole cutting machine for making round openings up to 114 mm in pipe, with a chain mounting for pipe from 30 to 220 mm.',
  features: ['Cuts openings up to 114 mm', '1500 W power input', 'Mounts on pipe from 30 to 220 mm', 'Drill chuck 3–16 mm'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  specifications: [
    ['Power input', '1500 W'],
    ['Voltage', '230 V, 50 Hz'],
    ['Max. wall thickness', '10 mm'],
    ['Max. cutting capacity', '114 mm'],
    ['Pipe mounting capacity', '30 mm – 220 mm'],
    ['Drill chuck capacity', '3 mm – 16 mm'],
    ['Overall dimensions (L × W × H)', '26 × 24.8 × 51.3 cm'],
    ['Net weight', '16 kg'],
  ] }),
  make(H, 'fl-150a-hole-saw-cutting-machine', 'FL-150A Hole Saw Cutting Machine', [I('hole-saw/fl-150a.jpg'), I('hole-saw/fl-150a-2.jpg')], 'Portable hole cutting machine, 1500 W, up to 152 mm.', {
  description: 'A portable 1500 W hole cutting machine for making round openings up to 152 mm in pipe, with a chain mounting for pipe from 42 to 323 mm.',
  features: ['Cuts openings up to 152 mm', '1500 W power input', 'Mounts on pipe from 42 to 323 mm', 'Drill chuck 3–16 mm'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  specifications: [
    ['Power input', '1500 W'],
    ['Voltage', '230 V, 50 Hz'],
    ['Speed', '110 RPM'],
    ['Max. wall thickness', '10 mm'],
    ['Max. cutting capacity', '152 mm'],
    ['Pipe mounting capacity', '42 mm – 323 mm'],
    ['Drill chuck capacity', '3 mm – 16 mm'],
    ['Overall dimensions (L × W × H)', '40 × 30 × 35 cm'],
    ['Net weight', '20 kg'],
  ] }),
  make(C, 'chm1-pipe-cutting-machine', 'CHM1 Pipe Cutting Machine (2"–8")', [I('pipe-cutting/chm1.jpg')], 'Pipe cutting machine for 2" – 8" pipe, 750 W.', {
  description: 'A 750 W single-phase pipe cutting machine for 2" – 8" pipe, for clean, accurate cuts in the workshop or on site.',
  features: ['Cuts 2" – 8" pipe', '750 W single-phase motor', 'Up to 10 mm wall thickness', '23 RPM cutting speed'],
  applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'CHM1'],
    ['Capacity', '2"–8"'],
    ['Max. wall thickness', '10 mm'],
    ['Speed', '23 RPM'],
    ['Motor', '750 W, 220 V, 50 Hz, single phase'],
  ] }),
  make(C, 'chm2-pipe-cutting-machine', 'CHM2 Pipe Cutting Machine (2"–12")', [I('pipe-cutting/chm2.jpg')], 'Pipe cutting machine for 2" – 12" pipe, 750 W.', {
  description: 'A 750 W single-phase pipe cutting machine for 2" – 12" pipe, for clean, accurate cuts in the workshop or on site.',
  features: ['Cuts 2" – 12" pipe', '750 W single-phase motor', 'Up to 10 mm wall thickness', '23 RPM cutting speed'],
  applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'CHM2'],
    ['Capacity', '2"–12"'],
    ['Max. wall thickness', '10 mm'],
    ['Speed', '23 RPM'],
    ['Motor', '750 W, 220 V, 50 Hz, single phase'],
  ] }),
  make('pipe-bending-machines', 'hb-50-hydraulic-pipe-bender', 'HB-50 Hydraulic Pipe Bender', [I('pipe-bending/hb-50.jpg')], 'Hydraulic pipe bender for ½"–2" pipe, supplied with six bending dies.', {
  description: 'A hydraulic pipe bender for accurate, clean bends in pipe from ½" to 2". A heavy-duty steel frame and hydraulic power system make bending smooth and effortless, and six bending dies cover the full size range.',
  features: ['Bends pipe from ½" to 2" (21.3–60 mm)', 'Hydraulic power system', 'Heavy-duty steel frame', 'Six bending dies: ½", ¾", 1", 1¼", 1½", 2"'],
  applications: ['Plumbing and HVAC', 'Automotive', 'Industrial and mechanical works'],
  specifications: [
    ['Model', 'HB-50'],
    ['Size', '½" – 2" (21.3 – 60 mm)'],
    ['Max. pressure', '45 MPa'],
    ['Max. stroke', '250 mm'],
    ['Wall thickness', '2.75 – 4.5 mm'],
    ['Bending dies', '½", ¾", 1", 1¼", 1½", 2"'],
    ['Die ½"', 'A 115 mm · B 67.5 mm · min. bend radius 50.2 mm · D 22 mm · Sch.40 / Sch.80 wall 2.8 / 3.7 mm'],
    ['Die ¾"', 'A 131 mm · B 84.5 mm · min. bend radius 66 mm · D 28 mm · Sch.40 / Sch.80 wall 2.9 / 3.9 mm'],
    ['Die 1"', 'A 147 mm · B 96.5 mm · min. bend radius 75.4 mm · D 34 mm · Sch.40 / Sch.80 wall 3.4 / 4.5 mm'],
    ['Die 1¼"', 'A 197 mm · B 134 mm · min. bend radius 108.7 mm · D 43 mm · Sch.40 wall 3.6 mm'],
    ['Die 1½"', 'A 242 mm · B 162 mm · min. bend radius 133.5 mm · D 50 mm · Sch.40 wall 3.7 mm'],
    ['Die 2"', 'A 297 mm · B 238 mm · min. bend radius 199.2 mm · D 62 mm · Sch.40 wall 3.9 mm'],
  ] }),
  make('pipe-bending-machines', 'portable-conduit-pipe-bender', 'Portable Conduit Pipe Bender with Vice', [I('pipe-bending/conduit-bender.jpg'), I('pipe-bending/conduit-bender-2.jpg'), I('pipe-bending/conduit-bender-3.jpg'), I('pipe-bending/conduit-bender-4.jpg'), I('pipe-bending/conduit-bender-plate.jpg')], 'Portable bender for 20–32 mm conduit pipe.', {
  description: 'A portable bender for making bends in conduit pipe from 20 to 32 mm in diameter, easy to carry to the job.',
  features: ['Bends 20–32 mm conduit pipe', 'Portable'],
  applications: ['Electrical conduit installation', 'Site work'],
  specifications: [
    ['Type', 'Portable conduit pipe bender'],
    ['Capacity', '20 – 32 mm dia conduit pipe'],
    ['Weight', '32 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-160m-hdpe-butt-fusion-machine', 'FL-160M HDPE Butt Fusion Machine', [I('butt-jointing/fl-160m.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-160M butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-160M'],
    ['Other specifications', 'Available on request'],
  ] }),
  make('butt-jointing-machine', 'fl-200m-hdpe-butt-fusion-machine', 'FL-200M HDPE Butt Fusion Machine', [I('butt-jointing/fl-200m.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-200M butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-200M'],
    ['Other specifications', 'Available on request'],
  ] }),
  make('butt-jointing-machine', 'fl-250m-hdpe-butt-fusion-machine', 'FL-250M HDPE Butt Fusion Machine', [I('butt-jointing/fl-250m.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-250M butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-250M'],
    ['Other specifications', 'Available on request'],
  ] }),
  make('butt-jointing-machine', 'fl-315h-hdpe-butt-fusion-machine', 'FL-315H HDPE Butt Fusion Machine', [I('butt-jointing/fl-315h.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-315H butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-315H'],
    ['Other specifications', 'Available on request'],
  ] }),
  make('butt-jointing-machine', 'fl-355h-hdpe-butt-fusion-machine', 'FL-355H HDPE Butt Fusion Machine', [I('butt-jointing/fl-355h.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-355H butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-355H'],
    ['Other specifications', 'Available on request'],
  ] }),
  make('butt-jointing-machine', 'fl-450h-hdpe-butt-fusion-machine', 'FL-450H HDPE Butt Fusion Machine', [I('butt-jointing/fl-450h.jpg')], 'HDPE butt fusion machine.', {
  description: 'FL-450H butt fusion machine for jointing HDPE pipe. Contact us for the pipe sizes and configuration available.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-450H'],
    ['Other specifications', 'Available on request'],
  ] }),
  make(S, 'pipe-threading-oil', 'Pipe Threading Oil', [I('spare-parts/pipe-threading-oil.jpg')], 'Thread cutting oil for smooth threads and longer machine life. Packs of 5, 10 and 20 litres.', {
  description: 'FLEET pipe threading oil is a thread cutting oil for pipe threading machines, giving smooth thread finish and longer machine life. Available in 5 litre, 10 litre and 20 litre packs.',
  features: ['Smooth thread finish', 'Helps extend threading machine life', 'Available in 5, 10 and 20 litre packs'],
  applications: ['Pipe threading machines', 'Threading dies and die heads'],
  specifications: [
    ['Product', 'Pipe threading oil'],
    ['Packing sizes', '5 L, 10 L, 20 L'],
  ] }),

  // Products with photos from the supplier image folders — only the model code is known, so specifications stay "on request".
  make(R, 'lsg-219-roll-grooving-machine', 'LSG-219 Roll Grooving Machine', [I('roll-grooving/lsg-219.jpg')], 'Stand-mounted roll grooving machine for steel pipe.', { model: 'LSG-219', specifications: [['Model', 'LSG-219'], ['Other specifications', 'Available on request']] }),
  make(R, 'lsg-325-roll-grooving-machine', 'LSG-325 Roll Grooving Machine', [I('roll-grooving/lsg-325.jpg')], 'Stand-mounted roll grooving machine for steel pipe.', { model: 'LSG-325', specifications: [['Model', 'LSG-325'], ['Other specifications', 'Available on request']] }),
  make(H, 'k-114-hole-saw-cutting-machine', 'K-114 Hole Saw Cutting Machine', [I('hole-saw/k-114.jpg'), I('hole-saw/k-114-green.jpg')], 'Portable hole cutting machine with chain mounting for pipe.', { model: 'K-114', specifications: [['Model', 'K-114'], ['Other specifications', 'Available on request']] }),
  make('pressure-test-pumps', 'tp-50-pressure-test-pump', 'TP-50 Manual Pressure Test Pump', [I('pressure-test/tp-50.jpg')], 'Hand-operated pressure test pump with built-in water tank.', { model: 'TP-50', specifications: [['Model', 'TP-50'], ['Other specifications', 'Available on request']] }),
  make('pressure-test-pumps', 'zd-50-pressure-test-pump', 'ZD-50 Manual Pressure Test Pump', [I('pressure-test/zd-50.jpg')], 'Hand-operated pressure test pump with pressure gauge.', { model: 'ZD-50', specifications: [['Model', 'ZD-50'], ['Other specifications', 'Available on request']] }),
  make('butt-jointing-machine', '63b-2-socket-welding-machine', '63B-2 Socket Welding Machine', [I('butt-jointing/63b-2.jpg')], 'Socket fusion welding machine supplied in a metal carry case.', { model: '63B-2', specifications: [['Model', '63B-2'], ['Other specifications', 'Available on request']] }),
  make('butt-jointing-machine', '110a-socket-welding-machine', '110A Socket Welding Machine', [I('butt-jointing/110a.jpg')], 'Socket fusion welding machine supplied in a metal carry case.', { model: '110A', specifications: [['Model', '110A'], ['Other specifications', 'Available on request']] }),
  make('pipe-bending-machines', '2-inch-pipe-bender', '2" Pipe Bender', [I('pipe-bending/bender-2in.jpg')], 'Pipe bender supplied with a set of bending dies.', { model: '2" Pipe Bender', specifications: [['Model', '2" Pipe Bender'], ['Other specifications', 'Available on request']] }),
  make('pipe-bending-machines', '3-inch-pipe-bender', '3" Pipe Bender', [I('pipe-bending/bender-3in.jpg')], 'Pipe bender supplied with a set of bending dies.', { model: '3" Pipe Bender', specifications: [['Model', '3" Pipe Bender'], ['Other specifications', 'Available on request']] }),
  make('pipe-bending-machines', '4-inch-pipe-bender', '4" Pipe Bender', [I('pipe-bending/bender-4in.jpg')], 'Pipe bender supplied with a set of bending dies.', { model: '4" Pipe Bender', specifications: [['Model', '4" Pipe Bender'], ['Other specifications', 'Available on request']] }),

  // Threading
  make(T, 'fl50a-pipe-threading-machine', 'FL50A Heavy-Duty Pipe Threading Machine', [I('pipe-threading/fl50a.jpg')], 'Heavy-duty 2" threading machine with a 1000 W induction motor.', {
  description: 'A heavy-duty threading machine for pipe from ½" to 2", driven by a 1000 W induction motor. It is supplied with stainless-steel dies, a die head, oil and a stand, ready to start work.',
  features: ['Threads pipe from ½" to 2"', '1000 W induction motor', 'Supplied with SS dies, die head, oil and stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL50A'],
    ['Capacity', '½" – 2"'],
    ['Motor', '1000 W (induction)'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '30 RPM'],
    ['Weight', '58 kg'],
    ['Standard accessories', 'One set ½"–¾" SS dies, one set 1"–2" SS dies, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl50a1-pipe-threading-machine', 'FL50A1 Pipe Threading Machine', [I('pipe-threading/fl50a1.jpg')], '2" threading machine with a 900 W motor.', {
  description: 'A 2-inch threading machine for pipe from ½" to 2" with a 900 W motor. It is supplied with alloy and SS dies, a die head, oil and a stand.',
  features: ['Threads pipe from ½" to 2"', '900 W motor', 'Supplied with dies, die head, oil and stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL50A1'],
    ['Capacity', '½" – 2"'],
    ['Motor', '900 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '28 RPM'],
    ['Weight', '53 kg'],
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 1"–2" SS dies, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl50b1-pipe-threading-machine', 'FL50B1 Heavy-Duty Auto-Cut Pipe Threading Machine', [I('pipe-threading/fl50b1.jpg')], 'Heavy-duty 2" auto-cut threading machine with a 1000 W induction motor.', {
  description: 'An auto-cut heavy-duty threading machine for pipe from ½" to 2", driven by a 1000 W induction motor. It is supplied with stainless-steel dies, a die head, oil and a stand.',
  features: ['Threads pipe from ½" to 2"', 'Auto-cut', '1000 W induction motor', 'Supplied with SS dies, die head, oil and stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL50B1'],
    ['Capacity', '½" – 2"'],
    ['Motor', '1000 W (induction)'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '30 RPM'],
    ['Weight', '58 kg'],
    ['Standard accessories', 'One set ½"–¾" SS dies, one set 1"–2" SS dies, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl100a-pipe-threading-machine', 'FL100A Heavy-Duty Pipe Threading Machine', [I('pipe-threading/fl100a.jpg')], 'Heavy-duty 4" threading machine with a 1300 W induction motor.', {
  description: 'A heavy-duty threading machine covering pipe from ½" to 4" with a 1300 W induction motor. It is supplied with dies and die heads for the full range, plus oil and a stand.',
  features: ['Threads pipe from ½" to 4"', '1300 W induction motor', 'Two-speed operation (30 / 14 RPM)', 'Supplied with dies, two die heads, oil and stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL100A'],
    ['Capacity', '½" – 4"'],
    ['Motor', '1300 W (induction)'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '30 / 14 RPM'],
    ['Weight', '130 kg'],
    ['Standard accessories', 'One set ½"–¾" SS dies, one set 1"–2" SS dies, one set 2½"–4" alloy dies, one 2½"–4" die head, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl100a1-pipe-threading-machine', 'FL100A1 Pipe Threading Machine', [I('pipe-threading/fl100a1.jpg')], '4" threading machine with a 1100 W motor.', {
  description: 'A 4-inch threading machine covering pipe from ½" to 4" with a 1100 W motor. It is supplied with alloy dies and die heads for the full range, plus oil and a stand.',
  features: ['Threads pipe from ½" to 4"', '1100 W motor', 'Two-speed operation (24 / 9 RPM)', 'Supplied with alloy dies, two die heads, oil and stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL100A1'],
    ['Capacity', '½" – 4"'],
    ['Motor', '1100 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '24 / 9 RPM'],
    ['Weight', '130 kg'],
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 1"–2" alloy dies, one set 2½"–4" alloy dies, one 2½"–4" die head, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl150a-pipe-threading-machine', 'FL150A Pipe Threading Machine', [I('pipe-threading/fl150a.jpg')], '6" threading machine for pipe from 2½" to 6".', {
  description: 'A large-capacity threading machine for pipe from 2½" to 6" with a 1100 W motor. It is supplied with two die sets and die heads, threading oil and a four-leg stand.',
  features: ['Threads pipe from 2½" to 6"', '1100 W motor', 'Two-speed operation (18 / 6 RPM)', 'Supplied with dies, two die heads, oil and 4-leg stand'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL150A'],
    ['Capacity', '2½" – 6"'],
    ['Motor', '1100 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '18 / 6 RPM'],
    ['Weight', '230 kg'],
    ['Standard accessories', 'One set 2½"–4" dies, one set 5"–6" dies, one 2½"–4" die head, one 5"–6" die head, 2 L threading oil, 4-leg stand'],
  ] }),
  make(T, 'fl-p20-portable-pipe-threader', 'FL-P20 Portable Pipe Threader', [I('pipe-threading/fl-p20.jpg')], 'Portable 2" pipe threader, 2000 W, supplied in a carry case.', {
  description: 'A portable 2000 W pipe threader for pipe from ½" to 2". It comes in a carry case with die heads from ½" to 2" and the tools needed to start threading.',
  features: ['Threads pipe from ½" to 2"', '2000 W motor', 'Portable at 20 kg', 'Supplied in a carry case with die heads'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL-P20'],
    ['Capacity', '½" – 2"'],
    ['Motor', '2000 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '26 RPM'],
    ['Weight', '20 kg'],
    ['Standard accessories', 'Die heads (½", ¾", 1", 1¼", 1½", 2"), oil gun, gloves, L key, screwdriver, fix holder, carbon brush, cleaning brush'],
  ] }),
  make(T, 'fl-p14-portable-pipe-threader', 'FL-P14 Portable Pipe Threader', [I('pipe-threading/fl-p14.jpg')], 'Portable pipe threader, 1400 W, for pipe up to 1¼".', {
  description: 'A portable 1400 W pipe threader for pipe from ½" to 1¼". It is easy to carry to the job and is supplied with die heads and the tools needed to start threading.',
  features: ['Threads pipe from ½" to 1¼"', '1400 W motor', 'Portable at 20 kg', 'Supplied with die heads and tools'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL-P14'],
    ['Capacity', '½" – 1¼"'],
    ['Motor', '1400 W'],
    ['Voltage', '220–240 V, 50 Hz'],
    ['Speed', '26 RPM'],
    ['Weight', '20 kg'],
    ['Standard accessories', 'Die heads (½", ¾", 1½", 2"), oil gun, gloves, L key, screwdriver, fix holder, cleaning brush'],
  ] }),

  make(T, 'z1t-50a-pipe-threading-machine', 'Z1T-50A Pipe Threading Machine', [I('pipe-threading/z1t-50a.jpg')], 'Stand-mounted electric pipe threading machine.', { model: 'Z1T-50A', specifications: [['Model', 'Z1T-50A'], ['Other specifications', 'Available on request']] }),
  make(T, 'z1t-r4-pipe-threading-machine', 'Z1T-R4 Pipe Threading Machine', [I('pipe-threading/z1t-r4.jpg'), I('pipe-threading/z1t-r4-photo.jpg')], 'Stand-mounted electric pipe threading machine.', { model: 'Z1T-R4', specifications: [['Model', 'Z1T-R4'], ['Other specifications', 'Available on request']] }),
  make(T, 'z1t-r65-pipe-threading-machine', 'Z1T-R65 Pipe Threading Machine', [I('pipe-threading/z1t-r65.jpg')], 'Stand-mounted electric pipe threading machine.', { model: 'Z1T-R65', specifications: [['Model', 'Z1T-R65'], ['Other specifications', 'Available on request']] }),
  make(T, 'gmte-02-portable-pipe-threader', 'GMTE-02 Portable Pipe Threader', [I('pipe-threading/gmte-02.jpg'), I('pipe-threading/gmte-02-case.jpg')], 'Portable electric pipe threader supplied in a carry case with die heads.', { model: 'GMTE-02', specifications: [['Model', 'GMTE-02'], ['Other specifications', 'Available on request']] }),
  make(T, 'gmte-03-portable-pipe-threader', 'GMTE-03 Portable Pipe Threader', [I('pipe-threading/gmte-03.jpg'), I('pipe-threading/gmte-03-case.jpg')], 'Portable electric pipe threader supplied in a carry case with die heads.', { model: 'GMTE-03', specifications: [['Model', 'GMTE-03'], ['Other specifications', 'Available on request']] }),

]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const productsByCategory = (slug) => products.filter((p) => p.category === slug)
export const featuredProducts = [
  'fl100a1-pipe-threading-machine', 'fl12a-roll-grooving-machine', 'chm2-pipe-cutting-machine',
  'fl-114a-hole-saw-cutting-machine', 'hb-50-hydraulic-pipe-bender', 'fl-315h-hdpe-butt-fusion-machine',
].map(getProduct)

// Home carousel: one slide per category, two products of that category shown stacked.
export const heroSlides = [
  { category: 'pipe-threading-machines', products: ['fl100a1-pipe-threading-machine', 'fl150a-pipe-threading-machine'] },
  { category: 'roll-grooving-machine', products: ['fl12a-roll-grooving-machine', 'fl9a-roll-grooving-machine'] },
  { category: 'pipe-cutting-machine', products: ['chm1-pipe-cutting-machine', 'chm2-pipe-cutting-machine'] },
  { category: 'hole-saw-cutting-machines', products: ['fl-114a-hole-saw-cutting-machine', 'fl-150a-hole-saw-cutting-machine'] },
  { category: 'pressure-test-pumps', products: ['tp-50-pressure-test-pump', 'zd-50-pressure-test-pump'] },
  { category: 'butt-jointing-machine', products: ['fl-315h-hdpe-butt-fusion-machine', 'fl-450h-hdpe-butt-fusion-machine'] },
  { category: 'pipe-bending-machines', products: ['hb-50-hydraulic-pipe-bender', 'portable-conduit-pipe-bender'] },
].map((s) => ({ ...s, products: s.products.map(getProduct) }))
