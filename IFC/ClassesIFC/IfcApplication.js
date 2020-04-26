//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcutilityresource/lexical/ifcapplication.htm

const IfcApplication = {
  ApplicationDeveloper: { type: IfcOrganization, required: true },
  Version: { type: IfcLabel, required: true },
  ApplicationFullName: { type: IfcLabel, required: true },
  ApplicationIdentifier: { type: IfcIdentifier, required: true },
};
