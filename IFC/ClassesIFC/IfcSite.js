/*https://standards.buildingsmart.org/IFC/RELEASE/IFC2x/ADD1/HTML/ifcproductextension/lexical/ifcsite.html */

const IfcSite = {
  GlobalId: { type: IfcGloballyUniqueId, required: true },
  OwnerHistory: { type: IfcOwnerHistory, required: true },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  ObjectType: { type: IfcLabel, required: false },
  ObjectPlacement: { type: IfcObjectPlacement, required: false },
  Representation: { type: IfcProductRepresentation, required: false },
  LongName: { type: IfcLabel, required: false },
  CompositionType: { type: IfcElementCompositionEnum, required: true },
  RefLatitude: { type: IfcCompoundPlaneAngleMeasure, required: false },
  RefLongitude: { type: IfcCompoundPlaneAngleMeasure, required: false },
  RefElevation: { type: IfcLengthMeasure, required: false },
  LandTitleNumber: { type: IfcLabel, required: false },
  SiteAddress: { type: IfcPostalAddress, required: false },
};
