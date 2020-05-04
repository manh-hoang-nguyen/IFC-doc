const { valueConverter } = require('./utils/valueConverter');
const calculateAngle = require('./utils/calculateAngle');
const getPointWall = require('./utils/getPointWall');

function ifcWallStandardCaseGenerator(
  startNum,
  ownerHistory,
  geoPresentationCtx = { axisCtxNum: '#2', bodyCtxNum: '#3' },
  localPlacementRefNum,
  walls = [],
  levelsWithNum = [],
) {
  /**Create axis */
  const L01 = `#${startNum}= IFCSHAPEREPRESENTATION(${valueConverter(
    geoPresentationCtx.axisCtxNum,
  )},'Axis', 'Curve2D',(#${startNum + 1}));`;
  const L02 = `#${startNum + 1}= IFCTRIMMEDCURVE(#${startNum + 2},(#${startNum + 3}),(#${
    startNum + 4
  }),.T.,.CARTESIAN.);`;
  const L03 = `#${startNum + 2}= IFCLINE(#${startNum + 5},#${startNum + 6});`;
  const L04 = `#${startNum + 3}= IFCCARTESIANPOINT((0.0,0.0));`;
  const L05 = `#${startNum + 4}= IFCCARTESIANPOINT((1,0.0));`;
  const L06 = `#${startNum + 5}= IFCCARTESIANPOINT((0.0,0.0));`;
  const L07 = `#${startNum + 6}= IFCVECTOR(#${startNum + 7},1);`;
  const L08 = `#${startNum + 7}= IFCDIRECTION((1.0,0.0));`;
  const L09 = `#${startNum + 8}= IFCCARTESIANPOINT((0.0,0.0,0.0));`;
  const L010 = `#${startNum + 9}= IFCDIRECTION((0.0,0.0,1.0));`;

  let createdWalls = '';
  let i = 0;
  for (let k = 0; k < walls.length; k++) {
    const wall = walls[k];
    /**format originePont and orietation (x.0,y.0,z.0) */
    let { name, height, length, thinkness, originPoint, orientation, ifcGuid, elementId, level } = wall;

    name = valueConverter(name);
    height = valueConverter(height);
    length = valueConverter(length);
    thinkness = valueConverter(thinkness);
    ifcGuid = valueConverter(ifcGuid);
    elementId = valueConverter(elementId);

    const L1 = `#${startNum + 10 + i}= IFCWALLSTANDARDCASE(${ifcGuid},${ownerHistory},${name},$,$ ,#${
      startNum + 11 + i
    },#${startNum + 12 + i},${elementId});`;
    /**Create placemennt */
    const L2 = `#${startNum + 11 + i}= IFCLOCALPLACEMENT(${localPlacementRefNum},#${startNum + 13 + i});`;
    const L3 = `#${startNum + 13 + i}= IFCAXIS2PLACEMENT3D(#${startNum + 14 + i},$,#${startNum + 15 + i});`;
    const L4 = `#${startNum + 14 + i}= IFCCARTESIANPOINT(${originPoint});`;
    const L5 = `#${startNum + 15 + i}= IFCDIRECTION(${orientation});`;
    /**Create representation */
    const L6 = `#${startNum + 12 + i}= IFCPRODUCTDEFINITIONSHAPE($,$,(#${startNum},#${startNum + 16 + i}));`;
    const L7 = `#${startNum + 16 + i}= IFCSHAPEREPRESENTATION(${geoPresentationCtx.bodyCtxNum},'Body', 'SweptSolid',(#${
      startNum + 17 + i
    }));`;
    const L8 = `#${startNum + 17 + i}= IFCEXTRUDEDAREASOLID(#${startNum + 18 + i},#${startNum + 19 + i},#${
      startNum + 9
    },${height});`;
    const L9 = `#${startNum + 18 + i}= IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,'Wall Profile',#${startNum + 20 + i});`;
    const L10 = `#${startNum + 19 + i}= IFCAXIS2PLACEMENT3D(#${startNum + 8},$,$);`;
    const L11 = `#${startNum + 20 + i}= IFCPOLYLINE((#${startNum + 21 + i},#${startNum + 22 + i},#${
      startNum + 23 + i
    },#${startNum + 24 + i},#${startNum + 21 + i}));`;
    const L12 = `#${startNum + 21 + i}= IFCCARTESIANPOINT((0.0,${thinkness / 2}));`;
    const L13 = `#${startNum + 22 + i}= IFCCARTESIANPOINT((${length},${thinkness / 2}));`;
    const L14 = `#${startNum + 23 + i}= IFCCARTESIANPOINT((${length},${-thinkness / 2}));`;
    const L15 = `#${startNum + 24 + i}= IFCCARTESIANPOINT((0.0,${-thinkness / 2}));`;

    const levelContainer = levelsWithNum.filter((lv) => lv.name == level)[0];
    const L16 = `#${startNum + 25 + i}= IFCRELCONTAINEDINSPATIALSTRUCTURE('3Sa3dTJGn0H8TQIGiuGQd5',$,'','',(#${
      startNum + 10 + i
    }),#${levelContainer.num});`;
    createdWalls +=
      L1 +
      '\n' +
      L2 +
      '\n' +
      L3 +
      '\n' +
      L4 +
      '\n' +
      L5 +
      '\n' +
      L6 +
      '\n' +
      L7 +
      '\n' +
      L8 +
      '\n' +
      L9 +
      '\n' +
      L10 +
      '\n' +
      L11 +
      '\n' +
      L12 +
      '\n' +
      L13 +
      '\n' +
      L14 +
      '\n' +
      L15 +
      '\n' +
      L16 +
      '\n';

    i += 16;
  }

  const commonLines =
    L01 +
    '\n' +
    L02 +
    '\n' +
    L03 +
    '\n' +
    L04 +
    '\n' +
    L05 +
    '\n' +
    L06 +
    '\n' +
    L07 +
    '\n' +
    L08 +
    '\n' +
    L09 +
    '\n' +
    L010;

  const result = commonLines + '\n' + createdWalls;

  return { endNum: startNum + 25 + walls.length, result: result };
}

function createWallArc(
  startNum,
  ownerHistory,
  geoPresentationCtx = { axisCtxNum: '#2', bodyCtxNum: '#3' },
  localPlacementRefNum,
  wall,
) {
  let { ifcGuid, name, locationArc, height, elementId, thinkness } = wall;
  let { centerPoint, startPoint, endPoint, radius } = locationArc;
  name = valueConverter(name);
  height = valueConverter(height);
  thinkness = valueConverter(thinkness);
  ifcGuid = valueConverter(ifcGuid);
  ownerHistory = valueConverter(ownerHistory);
  elementId = valueConverter(elementId);
  const angleStartPoint = calculateAngle({ X: centerPoint.X, Y: centerPoint.Y }, { X: startPoint.X, Y: startPoint.Y });
  const angleEndPoint = calculateAngle({ X: centerPoint.X, Y: centerPoint.Y }, { X: endPoint.X, Y: endPoint.Y });
  const L1 = `#${startNum}= IFCWALLSTANDARDCASE(${ifcGuid},${ownerHistory},${name},$,$,#${startNum + 1},#${
    startNum + 2
  },${elementId});`;
  const L2 = `#${startNum + 1}= IFCLOCALPLACEMENT(${localPlacementRefNum},#${startNum + 3});`;
  const L3 = `#${startNum + 3}= IFCAXIS2PLACEMENT3D(#${startNum + 4},$,$);`;
  const L4 = `#${startNum + 4}= IFCCARTESIANPOINT((${startPoint.X},${startPoint.Y}));`;
  const L5 = `#${startNum + 2}= IFCPRODUCTDEFINITIONSHAPE($,$,(#${startNum + 5},#${startNum + 6}));`;
  /**Axis */
  const L6 = `#${startNum + 5}= IFCSHAPEREPRESENTATION(${geoPresentationCtx.axisCtxNum},'Axis','Curve2D',(#${
    startNum + 7
  }));`;
  const L7 = `#${startNum + 7} = IFCTRIMMEDCURVE(#${
    startNum + 8
  },(IFCPARAMETERVALUE(${angleStartPoint})),(IFCPARAMETERVALUE(${angleEndPoint})),.T.,.PARAMETER.); `;
  const L8 = `#${startNum + 8}= IFCCIRCLE(#${startNum + 9},${valueConverter(radius)});`;
  const L9 = `#${startNum + 9}= IFCAXIS2PLACEMENT2D(#${startNum + 10},#11);`; //TODO: remplacer #11
  const L10 = `#${startNum + 10}= IFCCARTESIANPOINT((${valueConverter(centerPoint.X - startPoint.X)},${valueConverter(
    centerPoint.Y - startPoint.Y,
  )}));`;

  /**Extrusion */
  const L11 = `#${startNum + 6}=  IFCSHAPEREPRESENTATION(${valueConverter(
    geoPresentationCtx.bodyCtxNum,
  )},'Body','SweptSolid',(#${startNum + 11}));`;
  const L12 = `#${startNum + 11}= IFCEXTRUDEDAREASOLID(#${startNum + 12},#${startNum + 13},#9,${height});`; //TODO: remplacer #9
  const L13 = `#${startNum + 12}= IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#${startNum + 14});`;
  const L14 = `#${startNum + 13}= IFCAXIS2PLACEMENT3D(#${startNum + 15},$,$);`; //TODO: Optimiser
  const L15 = `#${startNum + 15}= IFCCARTESIANPOINT((0.,0.,0.));`;
  const L16 = `#${startNum + 14}= IFCCOMPOSITECURVE((#${startNum + 16},#${startNum + 17},#${startNum + 18},#${
    startNum + 19
  }),.F.);`;
  const L17 = `#${startNum + 16}= IFCCOMPOSITECURVESEGMENT(.CONTINUOUS.,.F.,#${startNum + 20});`;
  const L18 = `#${startNum + 20}= IFCTRIMMEDCURVE(#${
    startNum + 21
  },(IFCPARAMETERVALUE(${angleStartPoint})),(IFCPARAMETERVALUE(${angleEndPoint})),.T.,.PARAMETER.);`;
  const L19 = `#${startNum + 21}= IFCCIRCLE(#${startNum + 10},${radius - thinkness / 2});`;
  const L20 = `#${startNum + 17}= IFCCOMPOSITECURVESEGMENT(.CONTINUOUS.,.T.,#${startNum + 22});`;
  const L21 = `#${startNum + 22}= IFCPOLYLINE((#${startNum + 23},#${startNum + 24}));`;
  const pointLine1 = getPointWall(startPoint, centerPoint, thinkness / 2);
  const L22 = `#${startNum + 23}=  IFCCARTESIANPOINT((${pointLine1.intersectionPoint1.X - startPoint.X},${
    pointLine1.intersectionPoint1.Y - startPoint.Y
  }));`;
  const L23 = `#${startNum + 24}=  IFCCARTESIANPOINT((${pointLine1.intersectionPoint2.X - startPoint.X},${
    pointLine1.intersectionPoint2.Y - startPoint.Y
  }));`;
  const L24 = `#${startNum + 18}= IFCCOMPOSITECURVESEGMENT(.CONTINUOUS.,.F.,#${startNum + 25});`;
  const segmentArc2 = createSegmentArc(
    startNum + 25,
    { X: centerPoint.X, Y: centerPoint.Y },
    angleStartPoint,
    angleEndPoint,
    radius + thinkness / 2,
  );
  const L25 = segmentArc2.result;
  const L26 = `#${startNum + 19}= IFCCOMPOSITECURVESEGMENT(.CONTINUOUS.,.T.,#${segmentArc2.endNum});`;
  const L27 = `#${segmentArc2.endNum}= IFCPOLYLINE((#${segmentArc2.endNum + 1},#${segmentArc2.endNum + 2}));`;
  const pointLine2 = getPointWall(endPoint, centerPoint, thinkness / 2);
  const L28 = `#${segmentArc2.endNum + 1}= IFCCARTESIANPOINT((${pointLine2.intersectionPoint1.X - startPoint.X},${
    pointLine2.intersectionPoint1.Y - startPoint.Y
  }));`;
  const L29 = `#${segmentArc2.endNum + 2}= IFCCARTESIANPOINT((${pointLine2.intersectionPoint2.X - startPoint.X},${
    pointLine2.intersectionPoint2.Y - startPoint.Y
  }));`;

  const result =
    L1 +
    '\n' +
    L2 +
    '\n' +
    L3 +
    '\n' +
    L4 +
    '\n' +
    L5 +
    '\n' +
    L6 +
    '\n' +
    L7 +
    '\n' +
    L8 +
    '\n' +
    L9 +
    '\n' +
    L10 +
    '\n' +
    L11 +
    '\n' +
    L12 +
    '\n' +
    L13 +
    '\n' +
    L14 +
    '\n' +
    L15 +
    '\n' +
    L16 +
    '\n' +
    L17 +
    '\n' +
    L18 +
    '\n' +
    L19 +
    '\n' +
    L20 +
    '\n' +
    L21 +
    '\n' +
    L22 +
    '\n' +
    L23 +
    '\n' +
    L24 +
    '\n' +
    L25 +
    '\n' +
    L26 +
    '\n' +
    L27 +
    '\n' +
    L28 +
    '\n' +
    L29;

  return { endNum: segmentArc2.endNum + 3, result };
}

function createSegmentArc(startNum, center = { X: 1, Y: 2 }, angleStartPoint, angleEndPoint, radius) {
  const L1 = `#${startNum}= IFCTRIMMEDCURVE(#${
    startNum + 1
  },(IFCPARAMETERVALUE(${angleStartPoint})),(IFCPARAMETERVALUE(${angleEndPoint})),.T.,.PARAMETER.);`;
  const L2 = `#${startNum + 1}= IFCCIRCLE(#${startNum + 2},${radius});`;
  const L3 = `#${startNum + 2}= IFCCARTESIANPOINT((${center.X},${center.Y}));`;

  const result = L1 + '\n' + L2 + '\n' + L3 + '\n';

  return { endNum: startNum + 3, result };
}
module.exports = { ifcWallStandardCaseGenerator, createWallArc };
