const IfcShapeRepresentation = {
  ContextOfItems: { type: IfcRepresentationContext, required: true },
  RepresentationIdentifier: { type: IfcLabel, required: false },
  RepresentationType: { type: IfcLabel, required: false },
  Items: { type: [IfcRepresentationItem], required: true },
};

/**
 * https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcrepresentationresource/lexical/ifcshaperepresentation.htm
 * Curve2D	2 dimensional curves
    GeometricSet	points, curves, surfaces (2 or 3 dimensional)
 	GeometricCurveSet	points, curves (2 or 3 dimensional)
    Annotation2D	points, curves (2 or 3 dimensional), hatches and text (2 dimensional)
    SurfaceModel	face based and shell based surface model
    SolidModel	including swept solid, Boolean results and Brep bodies
    more specific types are:
 	SweptSolid	swept area solids, by extrusion and revolution
 	Brep	faceted Brep's with and without voids
 	CSG	Boolean results of operations between solid models, half spaces and Boolean results
 	Clipping	Boolean differences between swept area solids, half spaces and Boolean results
 	AdvancedSweptSolid	swept area solids created by sweeping a profile along a directrix
        additional types	some additional representation types are given:
 	BoundingBox	simplistic 3D representation by a bounding box
 	SectionedSpine	cross section based representation of a spine curve and planar cross sections. It can represent a surface or a solid and the interpolations of the between the cross sections is not defined
 	MappedRepresentation	representation based on mapped item(s), referring to a representation map. Note: it can be seen as an inserted block reference. The shape representation of the mapped item has a representation type declaring the type of its representation items.
 */