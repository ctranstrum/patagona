// Copy and paste this into https://jscad.app to build it
"use strict";
const jscad = require("@jscad/modeling");
const { union, subtract } = jscad.booleans;
const { cuboid, cylinder, roundedCylinder, sphere } = jscad.primitives;
const { translateZ } = jscad.transforms;

const segments = 90;

function main() {
  const base = translateZ(
    1,
    roundedCylinder({
      height: 4,
      radius: 8,
      roundRadius: 1.5,
      segments,
    }),
  );

  const stick = translateZ(3, cylinder({ height: 6, radius: 2.5, segments }));

  const ball = translateZ(6, sphere({ radius: 3.5, segments }));

  const stem = translateZ(
    0.79,
    cuboid({
      size: [2, 2, 1.6],
    }),
  );

  const floor = translateZ(
    -2,
    cylinder({
      height: 4,
      radius: 15,
      segments,
    }),
  );

  const ceiling = translateZ(11, cylinder({ height: 4, radius: 15, segments }));

  return [subtract(union(base, stick, ball), stem, floor, ceiling)];
}

module.exports = { main };
