function unitGenerator(startNum) {
  const L1 = `#${startNum}= IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);`;
  const L2 = `#${startNum + 1}= IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);`;
  const L3 = `#${startNum + 2}= IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);`;
  const L4 = `#${startNum + 3}= IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.);`;
  const L5 = `#${startNum + 4}= IFCSIUNIT(*,.TIMEUNIT.,$,.SECOND.);`;
  const L6 = `#${startNum + 5}= IFCDIMENSIONALEXPONENTS(0,0,0,0,0,0,0);`;
  const L7 = `#${startNum + 6}= IFCMEASUREWITHUNIT(IFCRATIOMEASURE(0.0174532925199433),#${startNum + 3});`;
  const L8 = `#${startNum + 7}= IFCCONVERSIONBASEDUNIT(#${startNum + 5},.PLANEANGLEUNIT.,'DEGREE',#${startNum + 6});`;
  const L9 = `#${startNum + 8}= IFCUNITASSIGNMENT((#${startNum},#${startNum + 1},#${startNum + 2},#${startNum + 3},#${
    startNum + 4
  },#${startNum + 7}));`;

  const result = L1 + '\n' + L2 + '\n' + L3 + '\n' + L4 + '\n' + L5 + '\n' + L6 + '\n' + L7 + '\n' + L8 + '\n' + L9;

  return { endNum: startNum + 9, result };
}

module.exports = { unitGenerator };
