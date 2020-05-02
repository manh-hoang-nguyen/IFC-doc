DISCONTINUOUS, CONTINUOUS, CONTSAMEGRADIENT, CONTSAMEGRADIENTSAMECURVATURE;

/**
 * Discontinuous: The segments do not join. This is permitted only at the boundary of the curve or surface to indicate that it is not closed.
Continuous: The segments join but no condition on their tangents is implied.
ContSameGradient: The segments join and their tangent vectors or tangent planes are parallel and have the same direction at the joint: equality of derivatives is not required.
ContSameGradientSameCurvature: For a curve, the segments join, their tangent vectors are parallel and in the same direction and their curvatures are equal at the joint: equality of derivatives is not required. For a surface this implies that the principle curvatures are the same and the principle directions are coincident along the common boundary.
 */
