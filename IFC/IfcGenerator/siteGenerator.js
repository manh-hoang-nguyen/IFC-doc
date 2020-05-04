const { valueConverter } = require('./utils/valueConverter');

function siteGenerator(startNum, ownerHistory, originPointRef, site) {
  let { name, latitude, longitude, elevation, ifcGuid } = site;
  name = valueConverter(name);
  elevation = valueConverter(elevation);
  ownerHistory = valueConverter(ownerHistory);
  ifcGuid = valueConverter(ifcGuid);
  originPointRef = valueConverter(originPointRef);
  const L1 = `#${startNum}= IFCSITE(${ifcGuid},${ownerHistory},${name},$,$,${originPointRef},$,$,.ELEMENT.,${latitude},${longitude},${elevation},$,$);`;

  return { endNum: startNum + 1, result: L1 };
}

module.exports = { siteGenerator };
