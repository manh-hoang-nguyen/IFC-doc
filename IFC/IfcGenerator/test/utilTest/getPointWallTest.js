const getPointWall = require('../../utils/getPointWall');

//const startPointWall = { X: -3307.89, Y: -2702.17 };
const startPointWall = { X: 1671.96, Y: 5585.90 };
const centerWallArc = { X: -2072.29, Y: 2195.52 };
const radius = 100;

const { intersectionPoint1, intersectionPoint2 } = getPointWall(startPointWall, centerWallArc, radius);

console.log(`point1: X= ${intersectionPoint1.X}, Y= ${intersectionPoint1.Y}`);
console.log(`point2: X= ${intersectionPoint2.X}, Y= ${intersectionPoint2.Y}`);
//point1: X= -3283.4282238115006, Y= -2605.208040935051
// point2: X= -3332.3517761884987, Y= -2799.1319590649473
