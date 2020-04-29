const { valueConverter } = require('./utils/valueConverter');

function projectGenerator(startNum, project = {}, ownerHistory, geoRepresentationCtx, unitassignement) {
  const { name, ifcProjectGuid, description } = project;
  const result = `#${startNum}= IFCPROJECT(${valueConverter(ifcProjectGuid)},${valueConverter(
    ownerHistory,
  )},${valueConverter(name)},${valueConverter(description)},$,$,$,(${valueConverter(
    geoRepresentationCtx,
  )}),${valueConverter(unitassignement)});`;

  return { endNum: startNum + 1, result };
}

module.exports = { projectGenerator };
