//https://standards.buildingsmart.org/IFC/RELEASE/IFC2x3/TC1/HTML/ifcmeasureresource/lexical/ifcmeasurewithunit.htm
const IfcMeasureWithUnit = {
  ValueComponent: { type: IfcValue, required: true },
  UnitComponent: { type: IfcUnit, required: true },
};
