const calculateAngle = require('../../utils/calculateAngle');

//Test
const centre = { X: -2072.29, Y: 2195.52 };

const point1 = { X: 1675.9, Y: 5589.47 };
const test1 = calculateAngle(centre, point1);
console.log(`actual = ${test1}`);
console.log('Expect = 42.16');

const point2 = { X: -6173.51, Y: 6296.74 };
const test2 = calculateAngle(centre, point2);
console.log(`actual = ${test2}, Expect = 135`);

const point3 = { X: -3307.89, Y: -2702.17 };
const test3 = calculateAngle(centre, point3);
console.log(`actual = ${test3}, Expect = 255.84`);

const point4 = { X: -98.65, Y: -2454.08 };
const test4 = calculateAngle(centre, point4);
console.log(`actual = ${test4}, Expect = 293`);

const point5 = { X: -2072.29, Y: 8095.52 };
const test5 = calculateAngle(centre, point5);
console.log(`actual = ${test5}, Expect = 90`);

const point6 = { X: -2072.29, Y: -2955.45 };
const test6 = calculateAngle(centre, point6);
console.log(`actual = ${test6}, Expect = 270`);

const point7 = { X: 5427.71, Y: 2195.52 };
const test7 = calculateAngle(centre, point7);
console.log(`actual = ${test7}, Expect = 0`);

const point8 = { X: -7172.29, Y: 2195.52 };
const test8 = calculateAngle(centre, point8);
console.log(`actual = ${test8}, Expect = 180`);
