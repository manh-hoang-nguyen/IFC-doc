function calculateAngle(centre = { X: 0, Y: 0 }, point = { X: 1, Y: 2 }) {
  const deltaX = point.X - centre.X;
  const deltaY = point.Y - centre.Y;
  //   console.log(`deltaX = ${deltaX}`, `deltaY = ${deltaY}`);
  let angle;
  if (deltaX > 0 && deltaY > 0) {
    angle = toDegrees(Math.atan(deltaY / deltaX));
    return angle;
  }
  if (deltaX < 0 && deltaY > 0) {
    angle = 180 - toDegrees(Math.atan(deltaY / Math.abs(deltaX)));
    return angle;
  }

  if (deltaX < 0 && deltaY < 0) {
    angle = 180 + toDegrees(Math.atan(deltaY / deltaX));
    return angle;
  }

  if (deltaX > 0 && deltaY < 0) {
    angle = 360 - toDegrees(Math.atan(Math.abs(deltaY) / deltaX));
    return angle;
  }

  if (deltaX == 0 && deltaY > 0) return (angle = 90);
  if (deltaX == 0 && deltaY < 0) return (angle = 270);
  if (deltaY == 0 && deltaX > 0) return (angle = 0);
  if (deltaY == 0 && deltaX < 0) return (angle = 180);
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

module.exports = calculateAngle;
