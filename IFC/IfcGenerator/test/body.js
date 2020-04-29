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
  name: 'Maquette Structure',
};

const project = {
  ifcProjectGuid: '0$WU4A9R19$vKWO$AdOnKA',
  name: 'projectTest',
  description: 'description of project',
};

const levels = [
  {
    ifcGuid: '1xS3BCk291UvhgP2dvNMQJ',
    name: 'Niveau 1',
    elevation: 1,
  },
  {
    ifcGuid: '1xS3BCk291UvhgP2dvNtSE',
    name: 'Niveau 2',
    elevation: 2,
  },
  {
    ifcGuid: '1xS3BCk291UvhgP2dvNMKI',
    name: 'Niveau 3',
    elevation: 3,
  },
];

const walls = [];
const { result, endNum } = bodyGenerator(user, model, project, levels);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/body.ifc', result, function (err) {
  if (err) throw err;
  console.log('Body is created successfully.', `End Num = ${endNum}`);
});

module.exports = result;
