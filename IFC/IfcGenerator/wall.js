function ifcWallStandardCaseGenerator(
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
) {
  let localPlacementNum = startNum + 1;
  let productDefNum = startNum + 2;
  let L1_ifcWall = `#${startNum}= IFCWALLSTANDARDCASE('${globalId}',#${ownerHistory},${wallName},${wallDesc},${wallTypeName},#${localPlacementNum},#${productDefNum},${tag});`;
  /**Create placemennt */
  let L2_ifcLocalPlacement = `#${localPlacementNum}= IFCLOCALPLACEMENT($,#${startNum + 3});`;
  let L3_axis2Placement = `#${startNum + 3}= IFCAXIS2PLACEMENT3D(#${startNum + 4},$,#${startNum + 5});`;
  let L4_cartesianpoint1 = `#${startNum + 4}= IFCCARTESIANPOINT(${pointOrigin});`;
  let L5_direction1 = `#${startNum + 5}= IFCDIRECTION(${orientation});`;

  /**Create representation */
  let L6_ifcProductDef = `#${productDefNum}= IFCPRODUCTDEFINITIONSHAPE($,$,(#${startNum + 6},#${startNum + 7}));`;
  /**Create axis */
  let L7_shape1 = `#${startNum + 6}= IFCSHAPEREPRESENTATION(#${geoPresentationCtx},'Axis, 'Curve2D',(#${
    startNum + 8
  }));`;
  let L8_trimmedCurve = `#${startNum + 8}= IFCTRIMMEDCURVE(#${startNum + 9},(#${startNum + 10}),(#${
    startNum + 11
  }),.T.,.CARTESIAN.);`;
  let L9_line = `#${startNum + 9}= IFCLINE(#${startNum + 12},#${startNum + 13});`;
  let L10_pointLine = `#${startNum + 12}= IFCCARTESIANPOINT((0.0,0.0));`;
  let L11_vectorLine = `#${startNum + 13}= IFCVECTOR(#${startNum + 14},1);`;
  let L12_direcVector = `#${startNum + 14} =IFCDIRECTION((1.0,0.0));`;
  let L13_pointShape1 = `#${startNum + 10}= IFCCARTESIANPOINT((0.0,0.0));`;
  let L14_point2Shape1 = `#${startNum + 11}= IFCCARTESIANPOINT((1,0.0));`;

  let L15_shape2 = `#${startNum + 7}= IFCSHAPEREPRESENTATION(#${geoPresentationCtx},'Body, 'SweptSolid',(#${
    startNum + 15
  }));`;
  let L16_extrudeSolid = `#${startNum + 15}= IFCEXTRUDEDAREASOLID(#${startNum + 16},#${startNum + 17},#${
    startNum + 18
  },${height});`;
  let L17_profileDef = `#${startNum + 16}= IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#${startNum + 19});`;
  let L18_polyLine = `#${startNum + 19}= IFCPOLYLINE((#${startNum + 20},#${startNum + 21},#${startNum + 22},#${
    startNum + 23
  },#${startNum + 20}));`;
  let L19_point1 = `#${startNum + 20}= IFCCARTESIANPOINT((0.0,${thinkness / 2}));`;
  let L20_point2 = `#${startNum + 21}= IFCCARTESIANPOINT((${length},${thinkness / 2}));`;
  let L21_point3 = `#${startNum + 22}= IFCCARTESIANPOINT(((${length},${-thinkness / 2}));`;
  let L22_point4 = `#${startNum + 23}= IFCCARTESIANPOINT((0.0,${-thinkness / 2}));`;
  let L23_axis = `#${startNum + 17}= IFCAXIS2PLACEMENT3D(#${startNum + 24},$,$);`;
  let L24_point = `#${startNum + 24}= IFCCARTESIANPOINT((0.0,0.0,0.0));`;
  let L25_direcExtrude = `#${startNum + 18}= IFCDIRECTION((0.0,0.0,1.0));`;

  let result =
    L1_ifcWall +"\n"+
    L2_ifcLocalPlacement +"\n"+
    L3_axis2Placement +"\n"+
    L4_cartesianpoint1 +"\n"+
    L5_direction1 +"\n"+
    L6_ifcProductDef +"\n"+
    L7_shape1 +"\n"+
    L8_trimmedCurve +"\n"+
    L9_line +"\n"+
    L10_pointLine +"\n"+
    L11_vectorLine +"\n"+
    L12_direcVector +"\n"+
    L13_pointShape1 +"\n"+
    L14_point2Shape1 +"\n"+
    L15_shape2 +"\n"+
    L16_extrudeSolid +"\n"+
    L17_profileDef +"\n"+
    L18_polyLine +"\n"+
    L19_point1 +"\n"+
    L20_point2 +"\n"+
    L21_point3 +"\n"+
    L22_point4 +"\n"+
    L23_axis +"\n"+
    L24_point +"\n"+
    L25_direcExtrude;
  return { endNum: startNum + 25, result: result };
}

module.exports = { ifcWallStandardCaseGenerator };
/*Create wall 1*/
// #115= IFCWALLSTANDARDCASE('1urY1C0pr868NQAzgNZBCl',#41,'Mur de base200',$,'Mur de base',#116,#117,'250537');
//     /*Placement*/
//     #116= IFCLOCALPLACEMENT($,#118);
//     #118= IFCAXIS2PLACEMENT3D(#119,$,#1181);
//     #119= IFCCARTESIANPOINT((-4.71416300553985,-1.6697739494469,0.));
//     #1181= IFCDIRECTION((-0.642787609686542,0.766044443118976,0.));
//     /*Representation*/
//       /*Multi geometric representation*/
//     #117= IFCPRODUCTDEFINITIONSHAPE($,$,(#120,#121));
//         /*Create wall axis*/
//         #120= IFCSHAPEREPRESENTATION(#96,'Axis', 'Curve2D',(#122));
//         #122= IFCTRIMMEDCURVE(#123,(#124),(#125),.T.,.CARTESIAN.);
//         #123= IFCLINE(#126,#127);
//         #126= IFCCARTESIANPOINT((0.0,0.0));
//         #127= IFCVECTOR(#128,1);
//         #128= IFCDIRECTION((1.0,0.0));
//         #124= IFCCARTESIANPOINT((0.0,0.0));
//         #125= IFCCARTESIANPOINT((5,0.0));
//         /*Create wall body*/
//         #121= IFCSHAPEREPRESENTATION(#96,'Body','SweptSolid',(#130));
//         #130= IFCEXTRUDEDAREASOLID(#131,#132,#133,10.0);
//         #131= IFCARBITRARYCLOSEDPROFILEDEF(.AREA.,$,#134);
//         #134= IFCPOLYLINE((#135,#136,#137,#138,#135));
//         #135= IFCCARTESIANPOINT((0.0,0.1));
//         #136= IFCCARTESIANPOINT((5.0,0.1));
//         #137= IFCCARTESIANPOINT((5.0,-0.1));
//         #138 = IFCCARTESIANPOINT((0.0,-0.1));
//         #132= IFCAXIS2PLACEMENT3D(#139,$,$);
//         #139= IFCCARTESIANPOINT((0.0,0.0,0.0));
//         #133= IFCDIRECTION((0.0,0.0,1.0));
/*End: Create wall 1*/
