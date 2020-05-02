/**
 * y = ax +b
 */

function linearEquation(p1 = { X, Y }, p2 = { X, Y }) {
  const a = (p2.Y - p1.Y) / (p2.X - p1.X);
  const b = p1.Y - a * p1.X;

  return { a, b };
}

module.exports = linearEquation;
