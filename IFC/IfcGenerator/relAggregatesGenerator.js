const { valueConverter } = require('./utils/valueConverter');
const generateGlobalId = require('./utils/generateGlobalId');

function relAggregatesGenerator(startNum, ownerHistory, project, building, levelNum = {}) {
  let levels = '';
  for (let i = 0; i < levelNum.endNum - levelNum.startNum; i++) {
    levels += `#${i + levelNum.startNum},`;
  }

  const globalId1 = generateGlobalId();
  const L1 = `#${startNum}= IFCRELAGGREGATES(${valueConverter(globalId1)},${valueConverter(
    ownerHistory,
  )},$,$,${valueConverter(project)},(${valueConverter(building)}));`;

  const globalId2 = generateGlobalId();
  const L2 = `#${startNum + 1}= IFCRELAGGREGATES(${valueConverter(globalId2)},${valueConverter(
    ownerHistory,
  )},$,$,${valueConverter(building)},(${levels.slice(0, -1) /**slice for moving last character */}));`;

  const result = L1 + '\n' + L2;

  return { endNum: startNum + 2, result };
}

module.exports = { relAggregatesGenerator };
