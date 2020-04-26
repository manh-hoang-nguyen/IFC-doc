//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifcactorresource/lexical/ifcorganization.htm
const IfcOrganization = {
  Id: { type: IfcIdentifier, required: false },
  Name: { type: IfcLabel, required: false },
  Description: { type: IfcText, required: false },
  Roles: { type: [IfcActorRole], required: false },
  Addresses: { type: [IfcAddress], required: false },
};
