//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcmeasureresource/lexical/ifcsiunit.htm
const IfcSIUnit = {
  UnitType: { type: IfcUnitEnum, required: true },
  Prefix: { type: IfcSIPrefix, required: false },
  Name: { type: IfcSIUnitName, required: false },
};
