const fs = require('fs');

const { personAndOrganizationGenerator } = require('../personAndOrganizationGenerator');

const user = {
  email: 'manh-hoang.nguyen@egis.fr',
  firstName: 'NGUYEN',
  lastName: 'Manh Hoang',
  company: 'Egis',
  status: 'BIM  engineer',
};

const { result, endNum } = personAndOrganizationGenerator(6, user);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/personAndOrganization.ifc', result, function (err) {
  if (err) throw err;
  console.log('personAndOrganization file is created successfully.', `End Num = ${endNum}`);
});
