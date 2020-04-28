function geoRepresentationCtx(startNum) {
  const L1 = `#${startNum}= IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.00000000000000E-5,#93,#94);`;
  const L2 = `#${startNum + 1}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Axis','Model',*,*,*,*,#96,$,.GRAPH_VIEW.,$);`;
  const L3 = `#${startNum + 2}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*,#96,$,.MODEL_VIEW.,$);`;
  const L4 = `#${startNum + 3}= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Box','Model',*,*,*,*,#96,$,.MODEL_VIEW.,$);`;
  const L5 = `#${
    startNum + 4
  }= IFCGEOMETRICREPRESENTATIONSUBCONTEXT('FootPrint','Model',*,*,*,*,#96,$,.MODEL_VIEW.,$);`;
  return { endNum: startNum + 5 };
}

module.exports = { geoRepresentationCtx };
