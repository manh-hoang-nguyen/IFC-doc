const { applicationGenerator } = require('./applicationGenerator');
const { configGenerator } = require('./configGenerator');
const { unitGenerator } = require('./unitGenerator');
const { personAndOrganizationGenerator } = require('./personAndOrganizationGenerator');
const { geoRepresentationCtxGenerator } = require('./geoRepresentationCtxGenerator');
const { ownerHistoryGenerator } = require('./ownerHistoryGenerator');
const { buildingGenerator } = require('./buildingGenerator');
const { projectGenerator } = require('./projectGenerator');

function bodyGenerator(user, model = {}, project = {}) {
  const application = applicationGenerator(1);
  const config = configGenerator(application.endNum);
  const unit = unitGenerator(config.endNum);
  const geometricRepresentationCtx = geoRepresentationCtxGenerator(unit.endNum);
  const personAndOrganization = personAndOrganizationGenerator(geometricRepresentationCtx.endNum, user);
  const ownerHistory = ownerHistoryGenerator(personAndOrganization.endNum, personAndOrganization.endNum - 1, 1);
  const building = buildingGenerator(ownerHistory.endNum, model.IfcBuildingGUID, `#${ownerHistory.endNum - 1}`);
  const ifcproject = projectGenerator(
    building.endNum,
    project,
    `#${ownerHistory.endNum - 1}`,
    `#${geometricRepresentationCtx.endNum - 5}`,
    `#${unit.endNum - 1}`,
  );
  const result =
    application.result +
    '\n' +
    config.result +
    '\n' +
    unit.result +
    '\n' +
    geometricRepresentationCtx.result +
    '\n' +
    personAndOrganization.result +
    '\n' +
    ownerHistory.result +
    '\n' +
    building.result +
    '\n' +
    ifcproject.result;

  return { result };
}

module.exports = { bodyGenerator };
