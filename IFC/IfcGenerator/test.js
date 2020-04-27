const fs = require('fs');

const { ifcWallStandardCaseGenerator } = require('./wall');
const startNum=
const globalId=
const ownerHistory=
const wallName=
const wallDesc=
const wallTypeName=
const tag=
const pointOrigin= //format (x.0,y.0,z.0)
const orientation= //format (x.0,y.0,z.0)
const geoPresentationCtx=
const height=
const length=
const thinkness=
const {result} = ifcWallStandardCaseGenerator( startNum,
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
    thinkness);
// writeFile function with filename, content and callback function
fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 