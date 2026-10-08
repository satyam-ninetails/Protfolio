// Gallery photos. Add a new entry to grow the gallery: drop the files in public/images/gallery/
// (`<name>-t.jpg` ~640px thumbnail + `<name>.jpg` ~1400px full size) and list them here.
// w/h are the thumbnail's pixel size (stops the layout jumping while images load).
const g = (name, ext, title, category, product, w, h) => ({
  title, category, product, w, h,
  thumb: `/images/gallery/${name}-t.${ext}`,
  full: `/images/gallery/${name}.${ext}`,
})

export const gallery = [
  g('sq50a', 'jpg', 'SQ50A Pipe Threading Machine', 'pipe-threading-machines', 'sq50a-pipe-threading-machine', 640, 426),
  g('sq100a', 'jpg', 'SQ100A Pipe Threading Machine', 'pipe-threading-machines', 'sq100a-pipe-threading-machine', 591, 502),
  g('sq150a', 'jpg', 'SQ150A Pipe Threading Machine', 'pipe-threading-machines', 'sq150a-pipe-threading-machine', 605, 640),
  g('jk150', 'jpg', 'JK150 Roll Grooving Machine', 'roll-grooving-machine', 'jk150-roll-grooving-machine', 640, 492),
  g('kc114', 'png', 'KC114 Pipe Cutting Machine', 'pipe-cutting-machine', 'kc114-pipe-cutting-machine', 640, 640),
  g('hole-saw', 'png', 'Hole Saw Cutting Machine', 'hole-saw-cutting-machines', 'hole-saw-cutting-machine', 640, 415),
  g('dies-rex-1', 'jpg', 'Rex Type Threading Dies', 'spare-parts', 'rex-type-threading-dies', 640, 372),
  g('dies-rex-2', 'jpg', 'Rex Type Threading Dies — set', 'spare-parts', 'rex-type-threading-dies', 640, 619),
  g('dies-100-1', 'jpg', '100 Type Threading Dies', 'spare-parts', '100-type-threading-dies', 640, 409),
  g('dies-100-2', 'jpg', '100 Type Threading Dies — set', 'spare-parts', '100-type-threading-dies', 640, 617),
  g('dies-ridgid', 'jpg', 'Ridgid Type Threading Dies', 'spare-parts', 'ridgid-type-threading-dies', 640, 375),
  g('roller-small', 'png', 'Roller 1¼″–1½″', 'spare-parts', 'roller-1-1-4-to-1-1-2-inch', 212, 143),
  g('roller-large', 'png', 'Roller 2″–6″', 'spare-parts', 'roller-2-to-6-inch', 229, 179),
  g('shaft-1', 'png', 'Shaft 1″', 'spare-parts', 'shaft-1-inch', 133, 126),
  g('shaft-2-6', 'png', 'Shaft 2″–6″', 'spare-parts', 'shaft-2-to-6-inch', 415, 266),
  g('shaft-8', 'png', 'Shaft 8″', 'spare-parts', 'shaft-8-inch', 343, 191),
]
