// ScrewHole_2.2mm_M2
module.exports = {
  nets: {
    net: undefined,
  },
  params: {
    class: "HOLE",
    size: 2.2,
  },
  body: (p) => {
    const drill = `(drill ${p.size})`;
    const size = `(size ${p.size + 0.2} ${p.size + 0.2})`;
    const court = `${p.size / 2 + 0.4}`;
    return `
      (module "ScrewHole_2.2mm_M2" (version 20260511) (layer "F.Cu")
        ${p.at /* parametric position */}
        (fp_circle (center 0 0) (end ${court} 0) (layer "F.CrtYd") (width 0.05) (fill none))
        (pad "" thru_hole circle locked (at 0 0) ${size} ${drill} (layers *.Cu *.Mask))
      )`;
  },
};
