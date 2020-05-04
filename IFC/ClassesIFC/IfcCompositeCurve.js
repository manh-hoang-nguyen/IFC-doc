	
Segments	 : 	LIST [1:?] OF IfcCompositeCurveSegment;
SelfIntersect	 : 	LOGICAL;

/**
 * 
Segments	 : 	The component bounded curves, their transitions and senses. 
        The transition attribute for the last segment defines the transition between 
        the end of the last segment and the start of the first; 
        this  transition attribute may take the value discontinuous, which indicates an open curve.
SelfIntersect	 : 	Indication of whether the curve intersects itself or not; this is for information only.
*/