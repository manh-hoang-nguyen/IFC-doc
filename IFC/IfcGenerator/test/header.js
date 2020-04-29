const fs = require('fs');
const { headerGenerator } = require('../headerGenerator');

const desc = 'ViewDefinition [DesignTransferView_V1]';
const name = 'Model name test';
const time_stamp = '2020-04-27T18:48:30';
const author = 'Manh Hoang NGUYEN';
const organization = 'Egis';
const preprocessor_version = 'Toolkit Version 0.0.1';
const origination_system = 'IfcGenerator Version 0.0.1';
const authorization = 'Egis';
const schema = 'IFC2X3';

let result = headerGenerator(
  desc,
  name,
  time_stamp,
  author,
  organization,
  preprocessor_version,
  origination_system,
  authorization,
  schema,
);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/header.ifc', result, function (err) {
  if (err) throw err;
  console.log('Header is created successfully.');
});

module.exports = result;
