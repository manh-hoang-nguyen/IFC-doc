const fs = require('fs');
const { bodyGenerator } = require('../bodyGenerator');

const user = {
  email: 'manh-hoang.nguyen@egis.fr',
  firstName: 'NGUYEN',
  lastName: 'Manh Hoang',
  company: 'Egis',
  status: 'BIM  engineer',
};
const { result } = bodyGenerator(user);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/body.ifc', result, function (err) {
  if (err) throw err;
  console.log('Body is created successfully.');
});

module.exports = result;
