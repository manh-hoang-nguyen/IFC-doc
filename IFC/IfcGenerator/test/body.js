const fs = require('fs');
const { bodyGenerator } = require('../bodyGenerator');

const user = {
  email: 'manh-hoang.nguyen@egis.fr',
  firstName: 'NGUYEN',
  lastName: 'Manh Hoang',
  company: 'Egis',
  status: 'BIM engineer',
};
const model = {
  IfcBuildingGUID: '39t4Pu3nTC4ekXYRIHJB9W',
};

const project = {
  ifcProjectGuid: '0$WU4A9R19$vKWO$AdOnKA',
  name: 'projectTest',
  description: 'description of project',
};
const { result } = bodyGenerator(user, model, project);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/body.ifc', result, function (err) {
  if (err) throw err;
  console.log('Body is created successfully.');
});

module.exports = result;
