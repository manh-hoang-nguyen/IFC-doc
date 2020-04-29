const { applicationGenerator } = require('./applicationGenerator');
const { configGenerator } = require('./configGenerator');
const { unitGenerator } = require('./unitGenerator');
const { personAndOrganizationGenerator } = require('./personAndOrganizationGenerator');
const { geoRepresentationCtxGenerator } = require('./geoRepresentationCtxGenerator');
const { ownerHistoryGenerator } = require('./ownerHistoryGenerator');
const { buildingGenerator } = require('./buildingGenerator');
const { projectGenerator } = require('./projectGenerator');
const { storeyGenerator } = require('./storeyGenerator');
const { relAggregatesGenerator } = require('./relAggregatesGenerator');

function bodyGenerator(user, model = {}, project = {}, levels = []) {
  const application = applicationGenerator(1);
  const config = configGenerator(application.endNum);
  const unit = unitGenerator(config.endNum);
  const geometricRepresentationCtx = geoRepresentationCtxGenerator(unit.endNum);
  const personAndOrganization = personAndOrganizationGenerator(geometricRepresentationCtx.endNum, user);
  const ownerHistory = ownerHistoryGenerator(personAndOrganization.endNum, personAndOrganization.endNum - 1, 1);
  const ownerHistoryNum = `#${ownerHistory.endNum - 1}`;
  const ProjectNum = ownerHistory.endNum;
  const ifcproject = projectGenerator(
    ProjectNum,
    project,
    `#${ownerHistory.endNum - 1}`,
    `#${geometricRepresentationCtx.endNum - 5}`,
    `#${unit.endNum - 1}`,
  );
  const building = buildingGenerator(ifcproject.endNum, model.IfcBuildingGUID, `${ownerHistoryNum}`);
  const ifcStoreyStartNum = building.endNum;
  const ifcStorey = storeyGenerator(ifcStoreyStartNum, `${ownerHistoryNum}`, levels);
  const storeyNum = {
    startNum: ifcStoreyStartNum,
    endNum: ifcStorey.endNum,
  };
  const relAggregates = relAggregatesGenerator(
    ifcStorey.endNum,
    ownerHistoryNum,
    `#${ProjectNum}`,
    `#${building.endNum - 1}`,
    storeyNum,
  );

  const endNum = relAggregates.endNum;
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
    ifcproject.result +
    '\n' +
    building.result +
    '\n' +
    ifcStorey.result +
    '\n' +
    relAggregates.result;

  return { result, endNum };
}

module.exports = { bodyGenerator };
