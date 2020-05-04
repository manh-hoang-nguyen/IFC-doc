const fs = require('fs');
const { bodyGenerator } = require('../bodyGenerator');
const generateGlobalId = require('../utils/generateGlobalId');

const user = {
  email: 'manh-hoang.nguyen@egis.fr',
  firstName: 'NGUYEN',
  lastName: 'Manh Hoang',
  company: 'Egis',
  status: 'BIM engineer',
};
const building = {
  name: 'maquette Structre',
  ifcBuildingGUID: generateGlobalId(),
};

const project = {
  ifcProjectGuid: generateGlobalId(),
  name: 'projectTest',
  description: 'description of project',
};
const site = {
  name: 'SiteName',
  latitude: '(48,51,23,999633)',
  longitude: '(2,21,3,553905)',
  elevation: 0,
  ifcGuid: generateGlobalId(),
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

const walls = [
  {
    name: 'Mur de base 200cm',
    height: 2.5,
    length: 5,
    thinkness: 0.2,
    originPoint: '(-4.71416300553985,-1.6697739494469,0.)',
    orientation: '(-0.642787609686542,0.766044443118976,0.)',
    ifcGuid: generateGlobalId(),
    elementId: '11178222',
    level: 'Niveau 1',
  },
  {
    name: 'Mur de base 300cm',
    height: 5,
    length: 7,
    thinkness: 0.3,
    originPoint: '(4.71416300553985,2,0.)',
    orientation: '(0.642787609686542,0.766044443118976,0.)',
    ifcGuid: generateGlobalId(),
    elementId: '11178223',
    level: 'Niveau 2',
  },
  {
    name: 'Mur de base 400cm',
    height: 5,
    length: 5,
    thinkness: 0.4,
    originPoint: '(0.,0.,0.)',
    orientation: '(0.642787609686542,1.,0.)',
    ifcGuid: generateGlobalId(),
    elementId: '111782555',
    level: 'Niveau 3',
  },
];
const { result, endNum } = bodyGenerator(user, building, project, site, levels, walls);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/body.ifc', result, function (err) {
  if (err) throw err;
  console.log('Body is created successfully.', `End Num = ${endNum}`);
});

module.exports = result;
