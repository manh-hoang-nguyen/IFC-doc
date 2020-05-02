Transition: IfcTransitionCode;
SameSense: BOOLEAN;
ParentCurve: IfcCurve;

/**
 * 
Transition	 : 	The state of transition (i.e., geometric continuity from the last point of this segment to the first point of the next segment) in a composite curve.
SameSense	 : 	An indicator of whether or not the sense of the segment agrees with, or opposes, that of the parent curve. If SameSense is false, the point with highest parameter value is taken as the first point of the segment.
ParentCurve	 : 	The bounded curve which defines the geometry of the segment.
 */
