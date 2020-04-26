const IfcRealAggregate = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  RelatingObject: { type: IfcObject, required: true },
  RelatedObjects: { type: [IfcObject], required: true },
};
