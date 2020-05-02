const fs = require('fs');
const { createWallArc } = require('../wallGenerator');
const generateGlobalId = require('../utils/generateGlobalId');

const startNum = 115;

const ownerHistory = '#30';

const geoCtx = { axisCtxNum: '#24', bodyCtxNum: '#25' };

const localPlacementRefNum = '#17';
const toMeter = 0.001;
const wall = {
  ifcGuid: generateGlobalId(),
  name: 'Namewall',
  locationArc: {
    centerPoint: { X: -2072.29 * toMeter, Y: 2195.52 * toMeter },
    startPoint: { X: -3307.89 * toMeter, Y: -2702.17 * toMeter },
    endPoint: { X: 1671.96 * toMeter, Y: 5585.9 * toMeter },
    radius: 5051 * toMeter,
  },
  height: 5000 * toMeter,
  elementId: '12345678',
  thinkness: 200 * toMeter,
};

const { result, endNum } = createWallArc(startNum, ownerHistory, geoCtx, localPlacementRefNum, wall);
// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/wallArc.ifc', result, function (err) {
  if (err) throw err;
  console.log('WallArc is created successfully.', `End number = ${endNum}`);
});
