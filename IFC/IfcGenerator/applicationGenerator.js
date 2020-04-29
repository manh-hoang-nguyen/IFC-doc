const { Application } = require('./constants');
const { valueConverter } = require('./utils/valueConverter');

function applicationGenerator(startNum) {
  const result = `#${startNum}= IFCAPPLICATION(#${startNum + 1},${valueConverter(
    Application.Version,
  )},${valueConverter(Application.ApplicationFullName)},${valueConverter(Application.ApplicationIdentifier)});`;

  return { endNum: startNum + 1, result };
}

module.exports = { applicationGenerator };
