const fs = require('fs');

const { relAggregatesGenerator } = require('../relAggregatesGenerator');

const { result, endNum } = relAggregatesGenerator(100, '#30', '#31', '#32', { startNum: 2, endNum: 5 });

fs.writeFile('./IFC/IfcGenerator/outputTests/relAggregates.ifc', result, function (err) {
  if (err) throw err;
  console.log('relAggregates file is created successfully.', `End Num = ${endNum}`);
});
