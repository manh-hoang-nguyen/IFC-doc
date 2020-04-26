//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifcactorresource/lexical/ifcperson.htm

const IfcPerson = {
  Id: { type: IfcIdentifier, required: false },
  FamilyName: { type: IfcLabel, required: false },
  GivenName: { type: IfcLabel, required: false },
  MiddleNames: { type: [IfcLabel], required: false },
  PrefixTitles: { type: [IfcLabel], required: false },
  SuffixTitles: { type: [IfcLabel], required: false },
  Roles: { type: [IfcActorRole], required: false },
  Addresses: { type: [IfcAddress], required: false },
};
