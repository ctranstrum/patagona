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
    3,
    roundedCylinder({
      height: 10.4,
      radius: 12.5,
      roundRadius: 4,
      segments,
    }),
  );

  const stem = translateZ(
    1.49,
    cuboid({
      size: [2.05, 2.05, 3],
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

  const width = 8;
  const length = 24;
  const plus = translateZ(
    6,
    union(
      roundedCuboid({ size: [width, length, 4], roundRadius: 1, segments }),
      roundedCuboid({ size: [length, width, 4], roundRadius: 1, segments }),
    ),
  );

  const push = translateZ(12.5, sphere({ radius: 5, segments }));

  const arrow = 4;
  const values = [arrow, arrow, arrow];
  const up = translate(
    [-arrow / 2, length / 4 + arrow / 3, 7.6],
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
