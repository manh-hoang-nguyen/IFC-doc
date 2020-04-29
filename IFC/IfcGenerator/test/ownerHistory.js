const fs = require('fs');
const { ownerHistoryGenerator } = require('../ownerHistoryGenerator');

const { result, endNum } = ownerHistoryGenerator(5, 1, 3);
// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/ownerHistory.ifc', result, function (err) {
  if (err) throw err;
  console.log('OwnerHistory is created successfully.', `End Num = ${endNum}`);
});
