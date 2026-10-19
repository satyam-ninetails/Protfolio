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
  make(R, 'fl12a1-roll-grooving-machine', 'FL12A1 Electric Hydraulic Roll Grooving Machine (2"–12")', [I('roll-grooving/fl12a1-stand.jpg')], 'Electric hydraulic roll grooving machine for 2"–12" steel pipe.', {
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
  make(R, 'fl-24-roll-grooving-machine', 'FL-24 Roll Grooving Machine (8"–24")', [I('roll-grooving/fl-24.jpg')], 'Roll grooving machine for 8"–24" Sch.40 steel pipe.', {
  description: 'A heavy-duty roll grooving machine for large-diameter steel pipe from 8" to 24" (Ø219–Ø630) SCH40, supplied with a hydraulic pipe support stand, knurl wheels, pinch rollers and a groove measuring tape.',
  features: ['Grooves 8"–24" (Ø219–Ø630) SCH40 pipe', 'Up to 13 mm wall thickness', 'Hydraulic pipe support stand included', '380–415 V supply'],
  applications: ['Fire protection systems', 'HVAC and water supply lines', 'Industrial piping', 'Fabrication workshops'],
  specifications: [
    ['Model', 'FL-24'],
    ['Capacity', '8" – 24" (Ø219 – Ø630) SCH40 pipe'],
    ['Max. wall thickness', '13 mm'],
    ['Voltage', '380V–415V, 50Hz'],
    ['Speed', '15 RPM'],
    ['G.W.', '340 kg'],
    ['Standard accessories', 'Hydraulic pipe support stand; knurl wheel Ø219–Ø325, Ø377–Ø426 and Ø480–Ø630 (one pc each); pinch roller Ø219–Ø530 and Ø630 (one pc each); groove measuring tape (one pc)'],
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
  make(C, 'chm2-pipe-cutting-machine', 'CHM2 Pipe Cutting Machine (2"–12")', [I('pipe-cutting/chm2.jpg')], 'Pipe cutting machine for 2" – 12" pipe, 1100 W.', {
  description: 'A 1100 W single-phase pipe cutting machine for 2" – 12" pipe, for clean, accurate cuts in the workshop or on site.',
  features: ['Cuts 2" – 12" pipe', '1100 W single-phase motor', 'Up to 10 mm wall thickness', '23 RPM cutting speed'],
  applications: ['Pipe fabrication', 'Construction and plant maintenance', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'CHM2'],
    ['Capacity', '2"–12"'],
    ['Max. wall thickness', '10 mm'],
    ['Speed', '23 RPM'],
    ['Motor', '1100 W, 220 V, 50 Hz, single phase'],
  ] }),
  make(C, 'fl-j40-250-pipe-cutting-machine', 'FL-J40/250 Pipe Cutting Machine (40–250 mm)', [I('pipe-cutting/fl-j40-250.jpg'), I('pipe-cutting/fl-j40-250-2.jpg'), I('pipe-cutting/fl-j40-250-3.jpg')], 'Pipe cutting machine for 40–250 mm HDPE/PPR pipes.', {
  description: 'A pipe cutting machine for cutting HDPE and PPR pipes from 40 mm to 250 mm in diameter.',
  features: ['Cuts pipe from 40 mm to 250 mm', 'For HDPE / PPR pipes'],
  applications: ['Cutting HDPE / PPR pipes', 'Pipe fabrication', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'FL-J40/250'],
    ['Cutting range', '40 – 250 mm'],
    ['Application', 'Cutting HDPE / PPR pipes'],
  ] }),
  make(C, 'fl-j160-400-pipe-cutting-machine', 'FL-J160/400 Electric Pipe Cutting Machine (160–400 mm)', [I('pipe-cutting/fl-j160-400.jpg'), I('pipe-cutting/fl-j160-400-2.jpg')], 'Electric pipe cutting machine for 160–400 mm HDPE/PPR pipes, 1800 W.', {
  description: 'An electric pipe cutting machine for cutting HDPE and PPR pipes from 160 mm to 400 mm in diameter.',
  features: ['Cuts pipe from 160 mm to 400 mm', '1800 W electric drive', 'For HDPE / PPR pipes'],
  applications: ['Cutting HDPE / PPR pipes', 'Pipe fabrication', 'Pipeline installation', 'Workshop production'],
  specifications: [
    ['Model', 'FL-J160/400'],
    ['Cutting range', '160 – 400 mm'],
    ['Power', '1800 W'],
    ['Application', 'Cutting HDPE / PPR pipes'],
  ] }),
  make('pipe-bending-machines', 'hb-50-hydraulic-pipe-bender', 'HB-50 Hydraulic Pipe Bender', [I('pipe-bending/hb-50.jpg')], 'Hydraulic pipe bender for ½"–2" pipe, supplied with six bending dies.', {
  description: 'A hydraulic pipe bender for accurate, clean bends in pipe from ½" to 2". A heavy-duty steel frame and hydraulic power system make bending smooth and effortless, and six bending dies cover the full size range.',
  features: ['Bends pipe from ½" to 2" (21.3–60 mm)', 'Hydraulic power system', 'Heavy-duty steel frame', 'Six bending dies: ½", ¾", 1", 1¼", 1½", 2"'],
  applications: ['Plumbing and HVAC', 'Automotive', 'Industrial and mechanical works'],
  specifications: [
    ['Model', 'HB-50'],
    ['Bending range', 'Φ21.3 – Φ60'],
    ['Standard configuration', '6 pairs of molds'],
    ['Sizes (mm)', '22, 28, 34, 42, 48, 60'],
    ['Maximum working pressure', '45 MPa'],
    ['Maximum working stroke', '250 mm'],
    ['Bending angle', '90° ≤ a < 180°'],
    ['Oil tank capacity (15# hydraulic oil)', '1.2 kg'],
    ['Stroke', '250 mm'],
    ['Gross weight', '50 kg'],
    ['Wall thickness', '2.75 – 4.5 mm'],
    ['Packing dimensions (cm)', '73 × 32 × 16.5'],
    ['Die ½"', 'A 115 mm · B 67.5 mm · min. bend radius 50.2 mm · D 22 mm · Sch.40 / Sch.80 wall 2.8 / 3.7 mm'],
    ['Die ¾"', 'A 131 mm · B 84.5 mm · min. bend radius 66 mm · D 28 mm · Sch.40 / Sch.80 wall 2.9 / 3.9 mm'],
    ['Die 1"', 'A 147 mm · B 96.5 mm · min. bend radius 75.4 mm · D 34 mm · Sch.40 / Sch.80 wall 3.4 / 4.5 mm'],
    ['Die 1¼"', 'A 197 mm · B 134 mm · min. bend radius 108.7 mm · D 43 mm · Sch.40 wall 3.6 mm'],
    ['Die 1½"', 'A 242 mm · B 162 mm · min. bend radius 133.5 mm · D 50 mm · Sch.40 wall 3.7 mm'],
    ['Die 2"', 'A 297 mm · B 238 mm · min. bend radius 199.2 mm · D 62 mm · Sch.40 wall 3.9 mm'],
  ] }),
  make('pipe-bending-machines', 'portable-conduit-pipe-bender', 'Portable Conduit Pipe Bender', [I('pipe-bending/conduit-bender.jpg')], 'Portable bender for 20–32 mm conduit pipe.', {
  description: 'A portable bender for making bends in conduit pipe from 20 to 32 mm in diameter, easy to carry to the job.',
  features: ['Bends 20–32 mm conduit pipe', 'Portable'],
  applications: ['Electrical conduit installation', 'Site work'],
  specifications: [
    ['Type', 'Portable conduit pipe bender'],
    ['Capacity', '20 – 32 mm dia conduit pipe'],
    ['Weight', '32 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-160m4-hdpe-butt-fusion-machine', 'FL-160M4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-160m.jpg')], 'Manual butt welding machine, 63–160 mm.', {
  description: 'FL-160M4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-160M4'],
    ['Welding range (mm)', '63, 75, 90, 110, 125, 140, 160'],
    ['Power', '1.7 kW'],
    ['Voltage', '220 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Dimensions', '65 × 44 × 49 cm'],
    ['Weight', '40 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-200m4-hdpe-butt-fusion-machine', 'FL-200M4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-200m.jpg')], 'Manual butt welding machine, 63–200 mm.', {
  description: 'FL-200M4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-200M4'],
    ['Welding range (mm)', '63, 75, 90, 110, 125, 140, 160, 180, 200'],
    ['Power', '2.31 kW'],
    ['Voltage', '220 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Dimensions', '65 × 44 × 49 cm'],
    ['Weight', '45 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-250m4-hdpe-butt-fusion-machine', 'FL-250M4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-250m.jpg')], 'Manual butt welding machine, 90–250 mm.', {
  description: 'FL-250M4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-250M4'],
    ['Welding range (mm)', '90, 110, 125, 140, 160, 180, 200, 225, 250'],
    ['Power', '3.15 kW'],
    ['Voltage', '220 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Dimensions', '75 × 60 × 61 cm'],
    ['Weight', '80 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-315h4-hdpe-butt-fusion-machine', 'FL-315H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-315h.jpg')], 'Hydraulic butt fusion welding machine, 63–315 mm.', {
  description: 'FL-315H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-315H4'],
    ['Welding range (mm)', '63, 75, 90, 110, 140, 160, 180, 200, 225, 250, 280, 315'],
    ['Power', '5.35 kW'],
    ['Voltage', '220 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Dimensions', '100 × 72 × 68 cm / 68 × 54 × 56 cm'],
    ['Weight', '200 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-355h4-hdpe-butt-fusion-machine', 'FL-355H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-355h.jpg')], 'Hydraulic butt fusion welding machine, 160–355 mm.', {
  description: 'FL-355H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-355H4'],
    ['Welding range (mm)', '160, 180, 200, 225, 250, 280, 315, 355'],
    ['Power', '5.45 kW'],
    ['Voltage', '220 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Dimensions', '100 × 72 × 73 cm / 75 × 64 × 62 cm'],
    ['Weight', '230 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-450h4-hdpe-butt-fusion-machine', 'FL-450H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-450h.jpg')], 'Hydraulic butt fusion welding machine, 280–450 mm.', {
  description: 'FL-450H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-450H4'],
    ['Welding range (mm)', '280, 315, 355, 400, 450'],
    ['Power', '7.2 kW'],
    ['Voltage', '380 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Packing size', '110 × 93 × 87 cm / 115 × 85 × 67 cm / 65 × 52 × 50 cm'],
    ['Weight', '370 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-630h4-hdpe-butt-fusion-machine', 'FL-630H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-630h4.jpg')], 'Hydraulic butt fusion welding machine, 400–630 mm.', {
  description: 'FL-630H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-630H4'],
    ['Welding range (mm)', '400, 450, 500, 560, 630'],
    ['Power', '10.6 kW'],
    ['Voltage', '380 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Packing size', '140 × 105 × 107 cm / 125 × 110 × 83 cm / 65 × 52 × 50 cm'],
    ['Weight', '600 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-800h4-hdpe-butt-fusion-machine', 'FL-800H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-800h4.jpg')], 'Hydraulic butt fusion welding machine, 630–800 mm.', {
  description: 'FL-800H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-800H4'],
    ['Welding range (mm)', '630, 710, 800'],
    ['Power', '18.2 kW'],
    ['Voltage', '380 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Packing size', '215 × 135 × 125 cm / 122 × 92 × 182 cm / 75 × 54 × 50 cm'],
    ['Weight', '1200 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-1000h4-hdpe-butt-fusion-machine', 'FL-1000H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-800h4.jpg')], 'Hydraulic butt fusion welding machine, 800–1000 mm.', {
  description: 'FL-1000H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-1000H4'],
    ['Welding range (mm)', '800, 900, 1000'],
    ['Power', '24 kW'],
    ['Voltage', '380 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Packing size', '215 × 150 × 104 cm / 265 × 165 × 153 cm / 84 × 58 × 52 cm'],
    ['Weight', '2100 kg'],
  ] }),
  make('butt-jointing-machine', 'fl-1200h4-hdpe-butt-fusion-machine', 'FL-1200H4 HDPE Butt Fusion Machine', [I('butt-jointing/fl-800h4.jpg')], 'Hydraulic butt fusion welding machine, 1000–1200 mm.', {
  description: 'FL-1200H4 butt fusion welding machine for jointing HDPE pipe.',
  features: ['HDPE pipe butt fusion', 'Accurate pipe alignment', 'Technical support available'],
  applications: ['Water and gas distribution', 'Pipeline construction', 'Industrial piping'],
  specifications: [
    ['Model', 'FL-1200H4'],
    ['Welding range (mm)', '1000, 1200'],
    ['Power', '30.5 kW'],
    ['Voltage', '380 V'],
    ['Working temp.', '270°C ± 10%'],
    ['Packing size', '252 × 195 × 200 cm / 175 × 129 × 224 cm / 92.5 × 82 × 105 cm'],
    ['Weight', '3370 kg'],
  ] }),
  make(S, 'pipe-threading-oil', 'Pipe Threading Oil', [I('spare-parts/pipe-threading-oil.jpg')], 'Premium quality threading oil, available in 5 Ltr, 10 Ltr and 20 Ltr packing sizes.', {
  description: 'Premium quality threading oil is available in 5 Ltr, 10 Ltr and 20 Ltr packing sizes.',
  features: ['Premium quality threading oil', 'Available in 5, 10 and 20 litre packs'],
  applications: ['Pipe threading machines', 'Threading dies and die heads'],
  specifications: [
    ['Product', 'Pipe threading oil'],
    ['Packing sizes', '5 Ltr, 10 Ltr, 20 Ltr'],
  ] }),
  make(S, 'dies-set', 'Threading Dies Set', [I('spare-parts/threading-dies-1.jpg'), I('spare-parts/threading-dies-2.jpg'), I('spare-parts/threading-dies-3.jpg'), I('spare-parts/threading-dies-4.jpg'), I('spare-parts/threading-dies-5.jpg'), I('spare-parts/threading-dies-6.jpg')], 'Dies set for all types of threading machines and pipes, in SS and alloy material.', {
  description: 'Dies set available for all types of threading machines and pipes. Available in SS and Alloy material.',
  features: ['For all types of threading machines and pipes', 'Available in SS and Alloy material'],
  applications: ['Pipe threading machines'],
  specifications: [
    ['Product', 'Threading dies set'],
    ['Material', 'SS and Alloy'],
    ['Compatibility', 'All types of threading machines and pipes'],
  ] }),
  make(S, 'spare-part-curve-plate', 'Curve Plate', [I('spare-parts/part-curve-plate.jpg')], 'Curve Plate — spare part for FLEET machines.', {
  description: 'Curve Plate, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Curve Plate'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-cutting-wheel', 'Cutting Wheel', [I('spare-parts/part-cutting-wheel.jpg')], 'Cutting Wheel — spare part for FLEET machines.', {
  description: 'Cutting Wheel, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Cutting Wheel'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-oil-pump-assembly', 'Oil Pump Assembly', [I('spare-parts/part-oil-pump-assembly.jpg')], 'Oil Pump Assembly — spare part for FLEET machines.', {
  description: 'Oil Pump Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Oil Pump Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-index', 'Index', [I('spare-parts/part-index.jpg')], 'Index — spare part for FLEET machines.', {
  description: 'Index, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Index'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-pellet', 'Pellet', [I('spare-parts/part-pellet.jpg')], 'Pellet — spare part for FLEET machines.', {
  description: 'Pellet, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Pellet'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-on-off-switch', 'On Off Switch', [I('spare-parts/part-on-off-switch.jpg')], 'On Off Switch — spare part for FLEET machines.', {
  description: 'On Off Switch, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'On Off Switch'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-jaw-insert', 'Jaw Insert', [I('spare-parts/part-jaw-insert.jpg')], 'Jaw Insert — spare part for FLEET machines.', {
  description: 'Jaw Insert, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Jaw Insert'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-front-chuck-jaw', 'Front Chuck Jaw', [I('spare-parts/part-front-chuck-jaw.jpg')], 'Front Chuck Jaw — spare part for FLEET machines.', {
  description: 'Front Chuck Jaw, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Front Chuck Jaw'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-filter', 'Filter', [I('spare-parts/part-filter.jpg')], 'Filter — spare part for FLEET machines.', {
  description: 'Filter, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Filter'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-screw-plate', 'Screw Plate', [I('spare-parts/part-screw-plate.jpg')], 'Screw Plate — spare part for FLEET machines.', {
  description: 'Screw Plate, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Screw Plate'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-auto-cut-die-head-assembly', 'Auto Cut Die Head Assembly', [I('spare-parts/part-auto-cut-die-head-assembly.jpg')], 'Auto Cut Die Head Assembly — spare part for FLEET machines.', {
  description: 'Auto Cut Die Head Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Auto Cut Die Head Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-lever-type-die-head-assembly', 'Lever type Die Head Assembly', [I('spare-parts/part-lever-type-die-head-assembly.jpg')], 'Lever type Die Head Assembly — spare part for FLEET machines.', {
  description: 'Lever type Die Head Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Lever type Die Head Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-remmer', 'Remmer', [I('spare-parts/part-remmer.jpg')], 'Remmer — spare part for FLEET machines.', {
  description: 'Remmer, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Remmer'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-hammer-chuck-body', 'Hammer Chuck Body', [I('spare-parts/part-hammer-chuck-body.jpg')], 'Hammer Chuck Body — spare part for FLEET machines.', {
  description: 'Hammer Chuck Body, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Hammer Chuck Body'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-motor-with-gear-assembly', 'Motor With Gear Assembly', [I('spare-parts/part-motor-with-gear-assembly.jpg')], 'Motor With Gear Assembly — spare part for FLEET machines.', {
  description: 'Motor With Gear Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Motor With Gear Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-shaft-bracket', 'Shaft Bracket', [I('spare-parts/part-shaft-bracket.jpg')], 'Shaft Bracket — spare part for FLEET machines.', {
  description: 'Shaft Bracket, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Shaft Bracket'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-cutting-handle', 'Cutting Handle', [I('spare-parts/part-cutting-handle.jpg')], 'Cutting Handle — spare part for FLEET machines.', {
  description: 'Cutting Handle, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Cutting Handle'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-main-drive-shaft', 'Main Drive Shaft', [I('spare-parts/part-main-drive-shaft.jpg')], 'Main Drive Shaft — spare part for FLEET machines.', {
  description: 'Main Drive Shaft, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Main Drive Shaft'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-fork-chuck-assembly', 'Fork Chuck Assembly', [I('spare-parts/part-fork-chuck-assembly.jpg')], 'Fork Chuck Assembly — spare part for FLEET machines.', {
  description: 'Fork Chuck Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Fork Chuck Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-length-change-assembly', 'Length Change Assembly', [I('spare-parts/part-length-change-assembly.jpg')], 'Length Change Assembly — spare part for FLEET machines.', {
  description: 'Length Change Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Length Change Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-rear-hammer-chuck-body', 'Rear Hammer Chuck Body', [I('spare-parts/part-rear-hammer-chuck-body.jpg')], 'Rear Hammer Chuck Body — spare part for FLEET machines.', {
  description: 'Rear Hammer Chuck Body, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Rear Hammer Chuck Body'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-clutch-plate', 'Clutch Plate', [I('spare-parts/part-clutch-plate.jpg')], 'Clutch Plate — spare part for FLEET machines.', {
  description: 'Clutch Plate, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Clutch Plate'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-capacitor', 'Capacitor', [I('spare-parts/part-capacitor.jpg')], 'Capacitor — spare part for FLEET machines.', {
  description: 'Capacitor, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Capacitor'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-lock-assembly', 'Lock Assembly', [I('spare-parts/part-lock-assembly.jpg')], 'Lock Assembly — spare part for FLEET machines.', {
  description: 'Lock Assembly, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Lock Assembly'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-export-shaft-gear', 'Export Shaft Gear', [I('spare-parts/part-export-shaft-gear.jpg')], 'Export Shaft Gear — spare part for FLEET machines.', {
  description: 'Export Shaft Gear, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Export Shaft Gear'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-hand-wheel-gear', 'Hand Wheel Gear', [I('spare-parts/part-hand-wheel-gear.jpg')], 'Hand Wheel Gear — spare part for FLEET machines.', {
  description: 'Hand Wheel Gear, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Hand Wheel Gear'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),
  make(S, 'spare-part-oil-pipe', 'Oil Pipe', [I('spare-parts/part-oil-pipe.jpg')], 'Oil Pipe — spare part for FLEET machines.', {
  description: 'Oil Pipe, available as a spare part. Contact us to confirm the right part for your machine.',
  features: ['Spare part', 'Available on enquiry'],
  applications: ['Routine machine maintenance', 'Replacement of worn components'],
  specifications: [
    ['Part', 'Oil Pipe'],
    ['Compatibility', 'Contact us with your machine model'],
  ] }),

  // Products with photos from the supplier image folders — only the model code is known, so specifications stay "on request".
  make(H, 'k-114-hole-saw-cutting-machine', 'K-114 Hole Saw Cutting Machine', [I('hole-saw/k-114.jpg'), I('hole-saw/k-114-green.jpg')], 'Portable hole cutting machine with chain mounting for pipe.', {
  description: 'A portable hole cutting machine for making round openings in pipe from 25 mm to 114 mm, with a chain mounting for fixing it to the pipe.',
  features: ['Cuts openings from 25 mm to 114 mm', '650 W motor, 120 RPM no-load speed', 'Chain mounting for pipe'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Plant maintenance', 'Installation work'],
  specifications: [
    ['Model', 'K-114'],
    ['No-load speed', '120 RPM'],
    ['Power', '650 W'],
    ['Voltage', '220 V'],
    ['Frequency', '50–60 Hz'],
    ['Cutting size', '25 mm – 114 mm'],
  ] }),
  make(H, 'bi-metal-hole-saw-cutters', 'Bi-Metal Hole Saw Cutters', [I('hole-saw/bi-metal-hole-saw-cutters.jpg')], 'Bi-metal hole saw cutters in a range of sizes.', {
  description: 'Bi-metal hole saw cutters for making round openings. Available in a range of sizes — contact us for the sizes you need.',
  features: ['Bi-metal construction', 'Range of sizes available'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Installation work'],
  specifications: [
    ['Type', 'Hole saw cutters (Bi-Metal)'],
    ['Sizes', 'Available on request'],
  ] }),
  make(H, 'tct-hole-saw-cutters', 'TCT Hole Saw Cutters', [I('hole-saw/tct-hole-saw-cutters.jpg')], 'TCT (tungsten carbide tipped) hole saw cutters.', {
  description: 'TCT hole saw cutters for clean, accurate openings. Supplied with a pilot drill and key — contact us for the sizes you need.',
  features: ['Tungsten carbide tipped (TCT) teeth', 'Supplied with pilot drill and key'],
  applications: ['Branch and tee connections', 'Pipe and tube fabrication', 'Installation work'],
  specifications: [
    ['Type', 'TCT hole saw cutters'],
    ['Sizes', 'Available on request'],
  ] }),
  make('pressure-test-pumps', 'zd-40-pressure-test-pump', 'ZD-40 Manual Pressure Test Pump', [I('pressure-test/zd-40.jpg'), I('pressure-test/hand-pump-poster.jpg')], 'Hand-operated pressure test pump, 0–50 bar.', {
  description: 'FLEET hand pressure test pumps are designed for quick and reliable testing of piping systems, vessels and equipment. The ZD-40 is a manual pump with a 100 cm hose.',
  features: ['Working pressure 0–50 bar', 'Piston volume 30 ml per stroke', '100 cm hose', 'Compact and portable, only 4 kg'],
  applications: ['Plumbing systems', 'Heating systems', 'Pipelines', 'Pressure vessels', 'Industrial use'],
  specifications: [
    ['Model', 'ZD-40'],
    ['Working pressure', '0–50 bar'],
    ['Piston volume', '30 ml/time'],
    ['Hose length', '100 cm'],
    ['Weight', '4 kg'],
    ['Dimensions (L × W × H)', '36 × 18 × 27 cm'],
  ] }),
  make('pressure-test-pumps', 'tp-50-pressure-test-pump', 'TP-50 Manual Pressure Test Pump', [I('pressure-test/tp-50.jpg'), I('pressure-test/hand-pump-poster.jpg')], 'Hand-operated pressure test pump, 0–50 bar.', {
  description: 'FLEET hand pressure test pumps are designed for quick and reliable testing of piping systems, vessels and equipment. The TP-50 is a manual pump with a 150 cm hose.',
  features: ['Working pressure 0–50 bar', 'Piston volume 40 ml per stroke', '150 cm hose', 'Built-in water tank'],
  applications: ['Plumbing systems', 'Heating systems', 'Pipelines', 'Pressure vessels', 'Industrial use'],
  specifications: [
    ['Model', 'TP-50'],
    ['Working pressure', '0–50 bar'],
    ['Piston volume', '40 ml/time'],
    ['Hose length', '150 cm'],
    ['Weight', '8.5 kg'],
    ['Dimensions (L × W × H)', '51 × 19 × 29 cm'],
  ] }),
  make('pressure-test-pumps', 'fl-40a-electric-pressure-test-pump', 'FL-40A Electric Pressure Test Pump', [I('pressure-test/fl-40a.jpg'), I('pressure-test/fl-40a-poster.jpg')], 'Electric pressure test pump, up to 40 bar, 30 L/min.', {
  description: 'The FL-40A is an electric pressure test pump with three cylinders and a Crompton copper 2 HP motor. It tests up to 40 bar at a flow rate of 30 L/min for fast, efficient testing.',
  features: ['Test up to 40 bar', 'High flow rate: 30 L/min', 'Powerful Crompton copper 2 HP motor', 'Durable and reliable, built for long life and heavy-duty usage'],
  applications: ['Pipeline testing', 'Industrial and site use', 'Compact design, easy to operate and maintain'],
  specifications: [
    ['Model', 'FL-40A'],
    ['No. of cylinders', '3'],
    ['Max pressure', '40 bar'],
    ['Flow rate', '30 L/min'],
    ['Motor', 'Crompton copper 2 HP'],
    ['RPM', '3600'],
    ['Oil required', '1 ltr'],
    ['Gross weight', '20 kg'],
  ] }),
  make('butt-jointing-machine', '63b-2-socket-welding-machine', '63B-2 Socket Welding Machine', [I('butt-jointing/63b-2.jpg')], 'Socket fusion welding machine supplied in a metal carry case.', { model: '63B-2', specifications: [['Model', '63B-2'], ['Other specifications', 'Available on request']] }),
  make('butt-jointing-machine', '110a-socket-welding-machine', '110A Socket Welding Machine', [I('butt-jointing/110a.jpg')], 'Socket fusion welding machine supplied in a metal carry case.', { model: '110A', specifications: [['Model', '110A'], ['Other specifications', 'Available on request']] }),
  make('pipe-bending-machines', 'hb-80-hydraulic-pipe-bender', 'HB-80 (1/2"-3") Hydraulic Pipe Bender', [I('pipe-bending/hb-80.jpg')], 'Hydraulic pipe bender for 1/2"–3" pipe, supplied with a set of bending dies.', {
  description: 'A hydraulic pipe bender for bending pipe from 1/2" to 3", supplied with a set of bending dies.',
  features: ['Bends pipe from 1/2" to 3"', 'Hydraulic operation', 'Supplied with a set of bending dies'],
  applications: ['Plumbing and HVAC', 'Industrial and mechanical works'],
  specifications: [
    ['Model', 'HB-80'],
    ['Bending range', 'Φ21.3 – Φ89'],
    ['Standard configuration', '8 pairs of molds'],
    ['Sizes (mm)', '22, 28, 34, 42, 48, 60, 75.5, 89'],
    ['Maximum working pressure', '50 MPa'],
    ['Maximum working stroke', '320 mm'],
    ['Bending angle', '90° ≤ a < 180°'],
    ['Oil tank capacity (15# hydraulic oil)', '2.5 kg'],
    ['Stroke', '320 mm'],
    ['Gross weight', '97 kg'],
    ['Wall thickness', '2.75 – 4.5 mm'],
    ['Packing dimensions (cm)', '93 × 39 × 21'],
  ] }),
  make('pipe-bending-machines', 'hb-100-hydraulic-pipe-bender', 'HB-100 (1/2"-4") Hydraulic Pipe Bender', [I('pipe-bending/hb-100.jpg')], 'Hydraulic pipe bender for 1/2"–4" pipe, supplied with a set of bending dies.', {
  description: 'A hydraulic pipe bender for bending pipe from 1/2" to 4", supplied with a set of bending dies.',
  features: ['Bends pipe from 1/2" to 4"', 'Hydraulic operation', 'Supplied with a set of bending dies'],
  applications: ['Plumbing and HVAC', 'Industrial and mechanical works'],
  specifications: [
    ['Model', 'HB-100'],
    ['Bending range', 'Φ21.3 – Φ108'],
    ['Standard configuration', '9 pairs of molds'],
    ['Sizes (mm)', '22, 28, 34, 42, 48, 60, 75.5, 89, 108'],
    ['Maximum working pressure', '63 MPa'],
    ['Maximum working stroke', '415 mm'],
    ['Bending angle', '90° ≤ a < 180°'],
    ['Oil tank capacity (15# hydraulic oil)', '4 kg'],
    ['Stroke', '380 mm'],
    ['Gross weight', '135 kg'],
    ['Wall thickness', '2.75 – 6 mm'],
    ['Packing dimensions (cm)', '119 × 41 × 22.5'],
  ] }),
  make('pipe-bending-machines', 'ehb-50-electric-pipe-bender', 'EHB-50 Electric Pipe Bender', [I('pipe-bending/ehb-50.jpg')], 'Electric hydraulic pipe bender with a set of bending dies.', {
  description: 'The EHB-50 is an electric hydraulic pipe bender supplied with a set of bending dies. It has a 750 W motor.',
  features: ['Electric hydraulic operation, 750 W motor', 'Bends pipe from ½" to 2" (21.3–60 mm)', 'Supplied with a set of bending dies'],
  applications: ['Plumbing and HVAC', 'Industrial and mechanical works'],
  specifications: [
    ['Model', 'EHB-50'],
    ['Motor', '750 W'],
    ['Bending range', 'Φ21.3 – Φ60'],
    ['Standard configuration', '6 pairs of molds'],
    ['Sizes (mm)', '22, 28, 34, 42, 48, 60'],
    ['Maximum working pressure', '45 MPa'],
    ['Maximum working stroke', '250 mm'],
    ['Bending angle', '90° ≤ a < 180°'],
    ['Oil tank capacity (15# hydraulic oil)', '1.2 kg'],
    ['Stroke', '250 mm'],
    ['Gross weight', '50 kg'],
    ['Wall thickness', '2.75 – 4.5 mm'],
    ['Packing dimensions (cm)', '73 × 32 × 16.5'],
    ['Die ½"', 'A 115 mm · B 67.5 mm · min. bend radius 50.2 mm · D 22 mm · Sch.40 / Sch.80 wall 2.8 / 3.7 mm'],
    ['Die ¾"', 'A 131 mm · B 84.5 mm · min. bend radius 66 mm · D 28 mm · Sch.40 / Sch.80 wall 2.9 / 3.9 mm'],
    ['Die 1"', 'A 147 mm · B 96.5 mm · min. bend radius 75.4 mm · D 34 mm · Sch.40 / Sch.80 wall 3.4 / 4.5 mm'],
    ['Die 1¼"', 'A 197 mm · B 134 mm · min. bend radius 108.7 mm · D 43 mm · Sch.40 wall 3.6 mm'],
    ['Die 1½"', 'A 242 mm · B 162 mm · min. bend radius 133.5 mm · D 50 mm · Sch.40 wall 3.7 mm'],
    ['Die 2"', 'A 297 mm · B 238 mm · min. bend radius 199.2 mm · D 62 mm · Sch.40 wall 3.9 mm'],
  ] }),

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
    ['Standard accessories', 'One set ½"–¾" alloy dies, one set 1"–2" alloy dies, one ½"–2" die head, 2 L oil, stand'],
  ] }),
  make(T, 'fl50b1-pipe-threading-machine', 'FL50B1 Heavy-Duty Auto-Cut Pipe Threading Machine', [I('pipe-threading/fl50b1.jpg'), I('pipe-threading/fl50b1-2.jpg')], 'Heavy-duty 2" auto-cut threading machine with a 1000 W induction motor.', {
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
    ['Standard accessories', 'One set ½"–¾" SS dies, one set 1"–2" SS dies, one set 2½"–4" SS dies, one 2½"–4" die head, one ½"–2" die head, 2 L oil, stand'],
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
    ['Voltage', '380 V'],
    ['Speed', '18 / 6 RPM'],
    ['Weight', '230 kg'],
    ['Standard accessories', 'One set 2½"–4" dies, one set 5"–6" dies, one 2½"–4" die head, one 5"–6" die head, 2 L threading oil, 4-leg stand'],
  ] }),
  make(T, 'fl-p20-portable-pipe-threader', 'FL-P20 Portable Pipe Threader', [I('pipe-threading/fl-p20.jpg'), I('pipe-threading/fl-p20-case.jpg')], 'Portable 2" pipe threader, 2000 W, supplied in a carry case.', {
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
  make(T, 'fl-p14-portable-pipe-threader', 'FL-P14 Portable Pipe Threader', [I('pipe-threading/fl-p14.jpg'), I('pipe-threading/fl-p14-case.jpg')], 'Portable pipe threader, 1400 W, for pipe up to 1¼".', {
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

  make(T, 'super-threader-50ap-pipe-threading-machine', 'Super Threader-50AP (1800 W) Pipe Threading Machine', [I('pipe-threading/super-threader-50ap.jpg')], 'Pipe threading machine for ½"–2" pipe with a 1800 W universal motor and heavy-duty gearbox.', {
  description: 'The Super Threader-50AP threads pipe from ½" to 2". It is driven by a 1800 W universal motor with a heavy-duty gearbox and has an ergonomic design for ease of handling.',
  features: ['Threads pipe from ½" to 2"', '1800 W universal motor with heavy-duty gearbox', 'Ergonomic design for ease of handling', 'Die head and BSPT dies supplied'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'Super Threader-50AP'],
    ['HSN code', '8459'],
    ['Size', '½" – 2"'],
    ['Speed', '40 RPM'],
    ['Motor', '1800 W'],
    ['Gross weight', '81 kg'],
    ['Standard equipment', 'Die head ½"–2" (1 set); dies ½"–¾" (1 set, BSPT) and 1"–2" (1 set, BSPT)'],
  ] }),
  make(T, 'fl-r65-pipe-threading-machine', 'FL-R65 Pipe Threading Machine', [I('pipe-threading/fl-r65.jpg')], 'Electric pipe threading machine, 1100 W, ½"–2½".', {
  description: 'The FL-R65 is an electric pipe threading machine for pipe from ½" up to 2½", with a 1100 W motor. It is supplied with dies, a bottle of oil, a screwdriver and a three-leg stand.',
  features: ['Threads pipe from ½" to 2½"', '1100 W motor, 220 V', 'Supplied with dies, oil, screwdriver and 3 legs'],
  applications: ['Plumbing and fire-fighting pipework', 'Construction and installation sites', 'Pipe fabrication workshops', 'Maintenance and repair'],
  specifications: [
    ['Model', 'FL-R65'],
    ['Size', '½" – 2" – 2½"'],
    ['Power', '1100 W'],
    ['Voltage', '220 V'],
    ['Speed', '28 RPM'],
    ['Weight', '70 / 80 kg'],
    ['Packing size', '65 × 41 × 52 cm'],
    ['Accessories', 'Dies ½"–¾", 1"–2" and 2½"; 1 bottle of oil; screwdriver; 3 legs'],
  ] }),
  make(T, 'fl-r25-manual-ratchet-pipe-threader', 'FL-R25 Manual Ratchet Pipe Threader', [I('pipe-threading/fl-r25.jpg'), I('pipe-threading/fl-r-ratchet.jpg')], 'Small portable manual ratchet pipe threader for ½"–1" pipe.', {
  description: 'A small, portable solution for fast and accurate threading. The compact, lightweight design makes it effortless to use in tight spaces, and it comes in a carry case with die heads for ½", ¾" and 1" pipe.',
  features: ['Compact and lightweight design', 'Effortless operation in tight spaces', 'Die heads ½", ¾" and 1" (BSPT / NPT)', 'Supplied in a carry case'],
  applications: ['Plumbing repairs', 'Maintenance and service work', 'Tight or remote locations'],
  specifications: [
    ['Model', 'FL-R25'],
    ['Type', 'Manual ratchet pipe threader'],
    ['Available sizes', '½", ¾", 1"'],
    ['Die head', '½", ¾", 1" (BSPT / NPT)'],
    ['Weight', 'Approx. 5 kg'],
  ] }),
  make(T, 'fl-r50-manual-ratchet-pipe-threader', 'FL-R50 Manual Ratchet Pipe Threader', [I('pipe-threading/fl-r50.jpg'), I('pipe-threading/fl-r-ratchet.jpg')], 'Small portable manual ratchet pipe threader for ½"–2" pipe.', {
  description: 'A small, portable solution for fast and accurate threading. The compact, lightweight design makes it effortless to use in tight spaces, and it comes in a carry case with die heads from ½" to 2".',
  features: ['Compact and lightweight design', 'Effortless operation in tight spaces', 'Die heads ½", ¾", 1", 1¼", 1½" and 2" (BSPT / NPT)', 'Supplied in a carry case'],
  applications: ['Plumbing repairs', 'Maintenance and service work', 'Tight or remote locations'],
  specifications: [
    ['Model', 'FL-R50'],
    ['Type', 'Manual ratchet pipe threader'],
    ['Available sizes', '½", ¾", 1", 1¼", 1½", 2"'],
    ['Die head', '½", ¾", 1", 1¼", 1½", 2" (BSPT / NPT)'],
    ['Weight', 'Approx. 12 kg'],
  ] }),
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)
export const productsByCategory = (slug) => products.filter((p) => p.category === slug)
export const featuredProducts = [
  'fl100a1-pipe-threading-machine', 'fl12a-roll-grooving-machine', 'chm2-pipe-cutting-machine',
  'fl-114a-hole-saw-cutting-machine', 'hb-50-hydraulic-pipe-bender', 'fl-315h4-hdpe-butt-fusion-machine',
].map(getProduct)

// Home carousel: one slide per category, two products of that category shown stacked.
export const heroSlides = [
  { category: 'pipe-threading-machines', products: ['fl100a1-pipe-threading-machine', 'fl150a-pipe-threading-machine'] },
  { category: 'roll-grooving-machine', products: ['fl12a-roll-grooving-machine', 'fl9a-roll-grooving-machine'] },
  { category: 'pipe-cutting-machine', products: ['fl-j40-250-pipe-cutting-machine', 'fl-j160-400-pipe-cutting-machine'] },
  { category: 'hole-saw-cutting-machines', products: ['fl-114a-hole-saw-cutting-machine', 'fl-150a-hole-saw-cutting-machine'] },
  { category: 'pressure-test-pumps', products: ['zd-40-pressure-test-pump', 'fl-40a-electric-pressure-test-pump'] },
  { category: 'butt-jointing-machine', products: ['fl-315h4-hdpe-butt-fusion-machine', 'fl-450h4-hdpe-butt-fusion-machine'] },
  { category: 'pipe-bending-machines', products: ['hb-50-hydraulic-pipe-bender', 'portable-conduit-pipe-bender'] },
].map((s) => ({ ...s, products: s.products.map(getProduct) }))
