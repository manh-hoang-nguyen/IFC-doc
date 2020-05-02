/**
 * Line: y = ax+b
 * Circle: x^2 + y^2 -2A*x-2B*y + c = 0
 *   with:
 *       -c= A^2 + B^2 + R^2
 *       -I(A,B) is center of circle
 *       -R is radius
 *
 * quadratic equation: (1+a^2)x^2 +2(ab-aB-A)x + (b^2 -2Bb + A^2 + B^2 - R^2) = 0
 *                     { A  }x^2 + {    B    }x+ {            C             } =0
 *
 *  quadratic formula: x=(-B+-Sqrt(B^2-4AC))/(2A)
 */

/**
 *
 * @param {*} line
 * @param {*} circle is startPoint Arc, radius is 1/2 of wall thinkness
 */
function intersectionPoint(line = { a, b }, circle = { center: { X, Y }, radius }) {
  const { a, b } = line;
  const { center, radius } = circle;
  const { X, Y } = center;
  const A = 1 + a * a;
  const B = 2 * (a * b - a * Y - X);
  const C = b * b - 2 * Y * b + X * X + Y * Y - radius * radius; 
  const X1 = (-B + Math.sqrt(B * B - 4 * A * C)) / (2 * A);
  const X2 = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
  const Y1 = a * X1 + b;
  const Y2 = a * X2 + b;
  const intersectionPoint1 = { X: X1, Y: Y1 };
  const intersectionPoint2 = { X: X2, Y: Y2 };

  return { intersectionPoint1, intersectionPoint2 };
}

module.exports = intersectionPoint;
