/*http://docs.buildingsmartalliance.org/MVD_SPARKIE/schema/ifcproductextension/lexical/ifcbuilding.htm */
const IfcBuilding = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  ObjectType: { type: IfcLabel, required: false },
  ObjectPlacement: { type: IfcObjectPlacement, required: false },
  Representation: { type: IfcProductRepresentation, required: false },
  LongName: { type: IfcLabel, required: false },
  CompositionType: { type: IfcElementCompositionEnum, required: false },
  ElevationOfRefHeight: { type: IfcLengthMeasure, required: false },
  ElevationOfTerrain: { type: IfcLengthMeasure, required: false },
  BuildingAddress: { type: IfcPostalAddress, required: false },
};
