//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifckernel/lexical/ifcproject.htm

const IfcProject = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  ObjectType: { type: IfcLabel, required: false },
  LongName: { type: IfcLabel, required: false },
  Phase: { type: IfcLabel, required: false },
  RepresentationContexts: { type: [IfcRepresentationContext], required: true },
  UnitsInContext: { type: IfcUnitAssignment, required: true },
};
