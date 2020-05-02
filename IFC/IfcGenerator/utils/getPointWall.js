const linearEquation = require('./linearEquation');
const intersectionLineAndCircle = require('./intersectionLineAndCircle');

function getPointWall(startPointWall = { X, Y }, centerWallArc = { X, Y }, radius) {
  const { a, b } = linearEquation(startPointWall, centerWallArc);
  const circle = {
    center: startPointWall,
    radius,
  };
  const { intersectionPoint1, intersectionPoint2 } = intersectionLineAndCircle({ a, b }, circle);
  return { intersectionPoint1, intersectionPoint2 };
}

module.exports = getPointWall;
