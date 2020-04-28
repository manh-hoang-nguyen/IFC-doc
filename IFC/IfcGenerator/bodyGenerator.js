const { configGenerator } = require('./configGenerator');
const { unitGenerator } = require('./unitGenerator');
const { personAndOrganizationGenerator } = require('./personAndOrganizationGenerator');
const { geoRepresentationCtxGenerator } = require('./geoRepresentationCtxGenerator');


function bodyGenerator(user) {
  const config = configGenerator(1);
  const unit = unitGenerator(config.endNum);
  const geometricRepresentationContext = geoRepresentationCtxGenerator(unit.endNum);
  const personAndOrganization = personAndOrganizationGenerator(geometricRepresentationContext.endNum, user);

  const result =
    config.result +
    '\n' +
    unit.result +
    '\n' +
    geometricRepresentationContext.result +
    '\n' +
    personAndOrganization.result;

  return { result };
}

module.exports = { bodyGenerator };
