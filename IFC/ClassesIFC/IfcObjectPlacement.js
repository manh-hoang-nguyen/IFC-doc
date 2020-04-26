/**https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcgeometricconstraintresource/lexical/ifcobjectplacement.htm */

const IfcObjectPlacement =({
    PlacesObject	 : 	SET [1:1] OF IfcProduct FOR ObjectPlacement;
ReferencedByPlacements	 : 	SET OF IfcLocalPlacement FOR PlacementRelTo;
})