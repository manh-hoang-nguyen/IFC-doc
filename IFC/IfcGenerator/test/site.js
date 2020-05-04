const fs = require('fs');
const { siteGenerator } = require('../siteGenerator');
const generateGlobalId = require('../utils/generateGlobalId');

const startNum = 12;
const ownerHistory = '#32';
const originPointRef = '#18';
const site = {
  name: 'SiteName',
  latitude: '(48,51,23,999633)',
  longitude: '(2,21,3,553905)',
  elevation: 0,
  ifcGuid: generateGlobalId(),
};

const { result, endNum } = siteGenerator(startNum, ownerHistory, originPointRef, site);

fs.writeFile('./IFC/IfcGenerator/outputTests/site.ifc', result, function (err) {
  if (err) throw err;
  console.log('Site file is created successfully.', `End Num = ${endNum}`);
});
