const fs = require('fs');
const { buildingGenerator } = require('../buildingGenerator');
const generateGlobalId = require('../utils/generateGlobalId');

const building = {
  name: 'maquette Structre',
  ifcBuildingGUID: generateGlobalId(),
};

let { result, endNum } = buildingGenerator(10, building, '#5');

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/building.ifc', result, function (err) {
  if (err) throw err;
  console.log('Building is created successfully.', `End Num = ${endNum}`);
});
