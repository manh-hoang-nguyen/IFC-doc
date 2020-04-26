const IfcBuildingStorey = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  ObjectType: { type: IfcLabel, required: false },
  ObjectPlacement: { type: IfcObjectPlacement, required: false },
  Representation: { type: IfcProductRepresentation, required: false },
  LongName: { type: IfcLabel, required: false },
  CompositionType: { type: IfcElementCompositionEnum, required: true },
  Elevation: { type: IfcLengthMeasure, required: false },
};
