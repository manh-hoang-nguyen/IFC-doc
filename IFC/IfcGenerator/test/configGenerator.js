const fs = require('fs');
const { configGenerator } = require('../configGenerator');

let { result, endNum } = configGenerator(1);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/config.ifc', result, function (err) {
  if (err) throw err;
  console.log('Config is created successfully.', `End Num = ${endNum}`);
});

module.exports = result;
