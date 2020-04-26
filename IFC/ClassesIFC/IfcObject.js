// https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifckernel/lexical/ifcobject.htm
const IfcObject = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
};
