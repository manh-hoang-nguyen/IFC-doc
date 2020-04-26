//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/FINAL/HTML/ifcactorresource/lexical/ifcpersonandorganization.htm
const IfcPersonAndOrganization = {
  ThePerson: { type: IfcPerson, required: true },
  TheOrganization: { type: IfcOrganization, required: true },
  Roles: { type: [IfcActorRole], required: false },
};
