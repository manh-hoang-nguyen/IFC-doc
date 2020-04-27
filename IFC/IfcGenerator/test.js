const fs = require('fs');

const { ifcWallStandardCaseGenerator } = require('./wall');
const startNum = 115;
const globalId = 'abcxyz';
const ownerHistory = '#41';
const wallName = '$';
const wallDesc = 'description wall';
const wallTypeName = '$';
const tag = 123456;
const pointOrigin = '(-4.71416300553985,-1.6697739494469,0.)'; //format (x.0,y.0,z.0)
const orientation = '(-0.642787609686542,0.766044443118976,0.)'; //format (x.0,y.0,z.0)
const geoPresentationCtx = 96;
const height = 10.0;
const length = 10.0;
const thinkness = 0.3;
const { result } = ifcWallStandardCaseGenerator(
  startNum,
  globalId,
  ownerHistory,
  wallName,
  wallDesc,
  wallTypeName,
  tag,
  pointOrigin, //format (x.0,y.0,z.0)
  orientation, //format (x.0,y.0,z.0)
  geoPresentationCtx,
  height,
  length,
  thinkness,
);
// writeFile function with filename, content and callback function
fs.writeFile('newWall.ifc', result, function (err) {
  if (err) throw err;
  console.log('File is created successfully.');
});
