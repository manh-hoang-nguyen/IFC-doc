const { Organization, Application } = require('./constants');
const { valueConverter } = require('./utils/valueConverter');

function configGenerator(startNum) {
  const L1 = `#${startNum} = IFCAPPLICATION(#${startNum + 1},${valueConverter(Application.Version)},${valueConverter(
    Application.ApplicationFullName,
  )},${valueConverter(Application.ApplicationIdentifier)});`;
  const L2 = `#${startNum + 1}= IFCORGANIZATION($,${valueConverter(Organization.Name)},$,$,$);`;
  const L3 = `#${startNum + 2}= IFCCARTESIANPOINT((0.,0.,0.));`;
  const L4 = `#${startNum + 3}= IFCCARTESIANPOINT((0.,0.));`;
  const L5 = `#${startNum + 4}= IFCDIRECTION((1.,0.,0.));`;
  const L6 = `#${startNum + 5}=  IFCDIRECTION((-1.,0.,0.));`;
  const L7 = `#${startNum + 6}= IFCDIRECTION((0.,1.,0.));`;
  const L8 = `#${startNum + 7}= IFCDIRECTION((0.,-1.,0.));`;
  const L9 = `#${startNum + 8}= IFCDIRECTION((0.,0.,1.));`;
  const L10 = `#${startNum + 9}= IFCDIRECTION((0.,0.,-1.));`;
  const L11 = `#${startNum + 10}= IFCDIRECTION((1.,0.));`;
  const L12 = `#${startNum + 11}= IFCDIRECTION((-1.,0.));`;
  const L13 = `#${startNum + 12}= IFCDIRECTION((0.,1.));`;
  const L14 = `#${startNum + 13}= IFCDIRECTION((0.,-1.));`;
  const L15 = `#${startNum + 14}= IFCAXIS2PLACEMENT3D(#${startNum + 2},$,$);`;

  const result =
    L1 +
    '\n' +
    L2 +
    '\n' +
    L3 +
    '\n' +
    L4 +
    '\n' +
    L5 +
    '\n' +
    L6 +
    '\n' +
    L7 +
    '\n' +
    L8 +
    '\n' +
    L9 +
    '\n' +
    L10 +
    '\n' +
    L11 +
    '\n' +
    L12 +
    '\n' +
    L13 +
    '\n' +
    L14 +
    '\n' +
    L15;

  return { endNum: startNum + 15, result };
}

module.exports = { configGenerator };
