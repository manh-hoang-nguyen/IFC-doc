const fs = require('fs');

const { rootGenerator } = require('../rootGenerator');

const header = require('./header');

const body = 'body';

const result = rootGenerator(header, body);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/root.ifc', result, function (err) {
  if (err) throw err;
  console.log('Ifc file is created successfully.');
});
