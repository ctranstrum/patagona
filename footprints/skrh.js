/* Alps Alpine SKRH 4-directional stick switch with center-push
 *
 * Product Page: https://tech.alpsalpine.com/e/products/category/muiti-control-devices/sub/02/series/skrh/
 * Datasheet: https://tech.alpsalpine.com/cms.media/product_catalog_mu_02_skrh_en_34aeb8c2e3.pdf
 *
 */

module.exports = {
  params: {
    designator: "SKRH",
    side: "F",
    include_silkscreen: true,
    include_bosses: true,
    A: { type: "net", value: "UP" },
    B: { type: "net", value: "LEFT" },
    C: { type: "net", value: "DOWN" },
    D: { type: "net", value: "RIGHT" },
    CENTER: { type: "net", value: "PUSH" },
    COMMON: { type: "net", value: "COM" },
    GND: { type: "net", value: "GND" },
  },
  body: (p) => {
    const netStr = (net) => (net.name ? net.str : "");
    // minus sign for left on front, or right on back
    const right = p.side === "F" ? "" : "-";
    const left = right === "-" ? "" : "-";
    // minus sign for up/down
    const up = "-";
    const down = "";
    const at = (hsign, hval, vsign, vval) =>
      `(at ${hsign}${hval} ${vsign}${vval} ${p.r})`;
    const horiz = (hsign, hval) => `(at ${hsign}${hval} 0 ${p.r})`;
    const vert = (vsign, vval) => `(at 0 ${vsign}${vval} ${p.r})`;
    const boss = (s) =>
      `np_thru_hole circle (size ${s} ${s}) (drill ${s}) (layers "*.Cu" "*.Mask")`;
    const bosses = p.include_bosses
      ? `(pad "" ${boss(0.75)} ${vert(up, 1.9)})(pad "" ${boss(1.05)} ${vert(down, 1.9)})`
      : "";
    const pad = `(size 1.35 1) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)`;
    const gnd = `(size 2 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask)`;
    return `
    (module Alps_Alpine_SKRH (layer ${p.side}.Cu)
      (descr "https://tech.alpsalpine.com/e/products/category/muiti-control-devices/sub/02/series/skrh/")
      (tags "SKRH SWITCH")
      (layer "${p.side}.Cu") ${p.at}
      (property "Reference" "${p.ref}" (at 0 -6)
        (layer "${p.side}.${p.include_silkscreen ? "SilkS" : "Fab"}")
        ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15))${p.side == "B" ? " (justify mirror)" : ""})
      )
      (fp_text user "SKRH" (at 0 0)
        (layer "${p.side}.${p.include_silkscreen ? "SilkS" : "Fab"}")
        (effects (font (size 1 1) (thickness 0.15))${p.side == "B" ? " (justify mirror)" : ""})
      )
      (pad "A" smd rect ${at(left, 3.575, up, 1.425)} ${pad} ${netStr(p.A)})
      (pad "B" smd rect ${at(right, 3.575, up, 1.425)} ${pad} ${netStr(p.B)})
      (pad "C" smd rect ${at(left, 3.575, down, 1.425)} ${pad} ${netStr(p.C)})
      (pad "D" smd rect ${at(right, 3.575, down, 1.425)} ${pad} ${netStr(p.D)})
      (pad "CENTER" smd rect ${horiz(left, 3.575)} ${pad} ${netStr(p.CENTER)})
      (pad "COMMON" smd rect ${horiz(right, 3.575)} ${pad} ${netStr(p.COMMON)})
      (pad "GND" smd rect ${vert(down, 4.95)} ${gnd} ${netStr(p.GND)})
      (pad "GND" smd rect ${vert(up, 4.95)} ${gnd} ${netStr(p.GND)})
      ${bosses}
    )`;
  },
};
