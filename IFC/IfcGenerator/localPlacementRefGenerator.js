const { valueConverter } = require('./utils/valueConverter');

function localPlacementRefGenerator(startNum) {
  const L1 = `#${startNum}= IFCCARTESIANPOINT((0.0,0.0,0.0));`;
  const L2 = `#${startNum + 1}= IFCAXIS2PLACEMENT3D(#${startNum},$,$);`;
  const L3 = `#${startNum + 2}= IFCLOCALPLACEMENT($,#${startNum + 1});`;

  const result = L1 + '\n' + L2 + '\n' + L3;

  return { endNum: startNum + 3, result };
}

module.exports = { localPlacementRefGenerator };
