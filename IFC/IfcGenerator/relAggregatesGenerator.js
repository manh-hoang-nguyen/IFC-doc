const { valueConverter } = require('./utils/valueConverter');
const generateGlobalId = require('./utils/generateGlobalId');

function relAggregatesGenerator(startNum, ownerHistory, project, site, building, levelNum = {}) {
  const globalId1 = valueConverter(generateGlobalId());
  ownerHistory = valueConverter(ownerHistory);
  project = valueConverter(project);
  building = valueConverter(building);
  site = valueConverter(site);
  const L1 = `#${startNum}= IFCRELAGGREGATES(${globalId1},${ownerHistory},$,$,${project},(${site}));`;

  const L2 = `#${startNum + 1}= IFCRELAGGREGATES(${globalId1},${ownerHistory},$,$,${site},(${building}));`;
  let levels = '';
  for (let i = 0; i < levelNum.endNum - levelNum.startNum; i++) {
    levels += `#${i + levelNum.startNum},`;
  }
  const globalId2 = valueConverter(generateGlobalId());
  const L3 = `#${startNum + 2}= IFCRELAGGREGATES(${globalId2},${ownerHistory},$,$,${building},(${
    levels.slice(0, -1) /**slice for moving last character */
  }));`;

  const result = L1 + '\n' + L2 + '\n' + L3;

  return { endNum: startNum + 3, result };
}

module.exports = { relAggregatesGenerator };
