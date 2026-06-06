// Copy and paste this into https://jscad.app to build it
"use strict";
const jscad = require("@jscad/modeling");
const { union, subtract } = jscad.booleans;
const { cuboid, cylinder, roundedCylinder, sphere } = jscad.primitives;
const { translateZ } = jscad.transforms;

const segments = (r) => Math.round(2 * Math.PI * r) * 2;

const radius = (r) => {
  return { radius: r, segments: segments(r) };
};

function main() {
  const base = translateZ(
    1,
    roundedCylinder({
      height: 4,
      ...radius(8),
      roundRadius: 1.5,
    }),
  );

  const stick = translateZ(3, cylinder({ height: 6, ...radius(2.5) }));

  const ball = translateZ(6, sphere(radius(3.5)));

  const stem = translateZ(
    0.79,
    cuboid({
      size: [2, 2, 1.6],
    }),
  );

  const floor = translateZ(-2, cylinder({ height: 4, ...radius(9) }));

  const ceiling = translateZ(11, cylinder({ height: 4, ...radius(9) }));

  return [subtract(union(base, stick, ball), stem, floor, ceiling)];
}

module.exports = { main };
