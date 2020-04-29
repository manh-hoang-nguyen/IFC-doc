const fs = require('fs');
const { buildingGenerator } = require('../buildingGenerator');

let { result, endNum } = buildingGenerator(10,'39t4Pu3nTC4ekXYRIHJB9W','#5');

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/building.ifc', result, function (err) {
  if (err) throw err;
  console.log('Building is created successfully.', `End Num = ${endNum}`);
});
