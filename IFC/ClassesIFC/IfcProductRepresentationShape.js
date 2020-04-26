/**https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifcrepresentationresource/lexical/ifcproductrepresentation.htm */

const IfcProductRepresentationShape = {
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  Representations: { type: [IfcRepresentation], required: true },
};
