const fs = require('fs');
const generateId = require('../utils/generateGlobalId');
const { ifcWallStandardCaseGenerator, createWallArc } = require('../wallGenerator');

const walls = [
  {
    name: 'Mur de base 200cm',
    height: 2.5,
    length: 5,
    thinkness: 0.2,
    originPoint: '(-4.71416300553985,-1.6697739494469,0.)',
    orientation: '(-0.642787609686542,0.766044443118976,0.)',
    ifcGuid: generateId(),
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
    ifcGuid: generateId(),
    elementId: '11178223',
    level: 'Niveau 2',
  },
];
const startNum = 115;

const ownerHistory = '#30';

const geoCtx = { axisCtxNum: '#24', bodyCtxNum: '#25' };

const localPlacementRefNum = '#17';
const levelsWithNum = [
  { ifcGuid: '1xS3BCk291UvhgP2dvNMQJ', name: 'Niveau 1', elevation: 1, num: 35 },
  { ifcGuid: '1xS3BCk291UvhgP2dvNtSE', name: 'Niveau 2', elevation: 2, num: 36 },
  { ifcGuid: '1xS3BCk291UvhgP2dvNMKI', name: 'Niveau 3', elevation: 3, num: 37 },
];

const { result, endNum } = ifcWallStandardCaseGenerator(
  startNum,
  ownerHistory,
  geoCtx,
  localPlacementRefNum,
  walls,
  levelsWithNum,
);
// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/newWall.ifc', result, function (err) {
  if (err) throw err;
  console.log('Wall is created successfully.', `End number = ${endNum}`);
});
