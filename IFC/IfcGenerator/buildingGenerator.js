const { valueConverter } = require('./utils/valueConverter');

function buildingGenerator(startNum, building = {}, ownerHistory) {
  let { ifcBuildingGUID, name } = building;
  ifcBuildingGUID = valueConverter(ifcBuildingGUID);
  ownerHistory = valueConverter(ownerHistory);
  name = valueConverter(name);
  const L1 = `#${startNum}= IFCCARTESIANPOINT((0.0,0.0,0.0));`;
  const L2 = `#${startNum + 1}= IFCAXIS2PLACEMENT3D(#${startNum},$,$);`;
  const L3 = `#${startNum + 2}= IFCLOCALPLACEMENT($,#${startNum + 1});`;
  const L4 = `#${startNum + 3}= IFCBUILDING(${ifcBuildingGUID},${ownerHistory},${name},$,$,#${
    startNum + 2
  },$,'',.ELEMENT.,$,$,$);`;

  const result = L1 + '\n' + L2 + '\n' + L3 + '\n' + L4;

  return { endNum: startNum + 4, result };
}

module.exports = { buildingGenerator };
