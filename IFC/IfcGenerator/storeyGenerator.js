const { valueConverter } = require('./utils/valueConverter');
const { breaklineTrim } = require('./utils/removeBreakLine');
function storeyGenerator(startNum, ownerHistory, levels = []) {
  let result = '';
  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    const { name, elevation, ifcGuid } = level;
    result +=
      `#${startNum + i}= IFCBUILDINGSTOREY(${valueConverter(ifcGuid)},${ownerHistory},${valueConverter(
        name,
      )},$,$,$,$,${valueConverter(name)},.ELEMENT.,${valueConverter(elevation)} );` + '\n';
  }

  return { endNum: startNum + levels.length, result: breaklineTrim(result) };
}

module.exports = { storeyGenerator };
