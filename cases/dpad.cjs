// Copy and paste this into https://jscad.app to build it
"use strict";
const jscad = require("@jscad/modeling");
const { union, subtract } = jscad.booleans;
const { extrudeLinear } = jscad.extrusions;
const { cuboid, roundedCuboid, cylinder, roundedCylinder, sphere, triangle } =
  jscad.primitives;
const { rotateZ, translate, translateZ } = jscad.transforms;

const segments = 90;

function main() {
  const knob = translateZ(
    1.25,
    roundedCylinder({
      height: 5,
      radius: 7.4,
      roundRadius: 2,
      segments,
    }),
  );

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

  const width = 4.5;
  const length = 14;
  const plus = translateZ(
    2,
    union(
      roundedCuboid({ size: [width, length, 3.3], roundRadius: 1, segments }),
      roundedCuboid({ size: [length, width, 3.3], roundRadius: 1, segments }),
    ),
  );

  const push = translateZ(8.3, sphere({ radius: 5, segments }));

  const arrow = 2.5;
  const values = [arrow, arrow, arrow];
  const up = translate(
    [-arrow / 2, length / 4 + arrow / 5, 3.4],
    extrudeLinear({}, triangle({ values })),
  );
  const left = rotateZ(Math.PI / 2, up);
  const down = rotateZ(Math.PI, up);
  const right = rotateZ(Math.PI, left);

  return [
    subtract(union(knob, plus), stem, floor, push, up, left, right, down),
  ];
}

module.exports = { main };
