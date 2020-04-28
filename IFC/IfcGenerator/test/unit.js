const fs = require('fs');
const { unitGenerator } = require('../unitGenerator');

const { endNum, result } = unitGenerator(3);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/unit.ifc', result, function (err) {
  if (err) throw err;
  console.log('Unit file is created successfully.', `End number = ${endNum}`);
});
