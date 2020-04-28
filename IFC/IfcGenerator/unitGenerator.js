function unitGenerator(startNum) {
  const L1 = `#${startNum}= IFCUNITASSIGNMENT((#${startNum + 1},#${startNum + 2},#${startNum + 3},#${startNum + 4},#${
    startNum + 5
  }));`;
  const L2 = `#${startNum + 1}= IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.);`;
  const L3 = `#${startNum + 2}= IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.);`;
  const L4 = `#${startNum + 3}= IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.);`;
  const L5 = `#${startNum + 4}= IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.);`;
  const L6 = `#${startNum + 5}= IFCSIUNIT(*,.TIMEUNIT.,$,.SECOND.);`;

  const result = L1 + '\n' + L2 + '\n' + L3 + '\n' + L4 + '\n' + L5 + '\n' + L6;

  return { endNum: startNum + 6, result };
}

module.exports = { unitGenerator };
