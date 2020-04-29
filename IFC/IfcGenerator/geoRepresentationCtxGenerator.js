function geoRepresentationCtxGenerator(startNum) {
  const L1 = `#${startNum}= IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.00000000000000E-5,#${startNum + 5},#${
    startNum + 6
  });`;
  const L2 = `#${startNum + 1}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Axis','Model',*,*,*,*,#${startNum},$,.GRAPH_VIEW.,$);`;
  const L3 = `#${startNum + 2}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,#${startNum},$,.MODEL_VIEW.,$);`;
  const L4 = `#${startNum + 3}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Box','Model',*,*,*,*,#${startNum},$,.MODEL_VIEW.,$);`;
  const L5 = `#${
    startNum + 4
  }= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('FootPrint','Model',*,*,*,*,#${startNum},$,.MODEL_VIEW.,$);`;
  const L6 = `#${startNum + 5}= IFCAXIS2PLACEMENT3D(#${startNum + 7},$,$);`;
  const L7 = `#${startNum + 6}= IFCDIRECTION((0.0,1.0));`;
  const L8 = `#${startNum + 7}= IFCCARTESIANPOINT((0.0,0.0,0.0));`;

  const result = L1 + '\n' + L2 + '\n' + L3 + '\n' + L4 + '\n' + L5 + '\n' + L6 + '\n' + L7 + '\n' + L8;
  return { endNum: startNum + 5, result };
}

module.exports = { geoRepresentationCtxGenerator };
