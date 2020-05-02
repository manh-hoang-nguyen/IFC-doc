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
const { ifcWallStandardCaseGenerator } = require('./wallGenerator');
const { localPlacementRefGenerator } = require('./localPlacementRefGenerator');

function bodyGenerator(user, model = {}, project = {}, levels = [], walls = []) {
  const application = applicationGenerator(1);
  const config = configGenerator(application.endNum);
  const originPointNum = application.endNum;
  const localPlacementRef = localPlacementRefGenerator(config.endNum, `#${originPointNum}`);
  const localPlacementRefNum = localPlacementRef.endNum - 1;
  const unit = unitGenerator(localPlacementRef.endNum);
  const geometricRepresentationCtx = geoRepresentationCtxGenerator(unit.endNum);
  const geoCtxWall = { axisCtxNum: `#${unit.endNum + 1}`, bodyCtxNum: `#${unit.endNum + 2} ` };
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

  const levelsWithNum = levels.map((level, i) => {
    return { ...level, num: i + ifcStoreyStartNum };
  });

  const ifcWalls = ifcWallStandardCaseGenerator(
    relAggregates.endNum,
    `${ownerHistoryNum}`,
    geoCtxWall,
    `#${localPlacementRefNum}`,
    walls,
    levelsWithNum,
  );
  const endNum = ifcWalls.endNum;
  const result =
    application.result +
    '\n' +
    config.result +
    '\n' +
    localPlacementRef.result +
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
    relAggregates.result +
    '\n' +
    ifcWalls.result;

  return { result, endNum };
}

module.exports = { bodyGenerator };
