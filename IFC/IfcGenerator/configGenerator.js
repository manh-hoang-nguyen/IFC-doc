const { Organization, Application } = require('./constants');
const { valueConverter } = require('./utils/valueConverter');

function configGenerator(startNum) {
  const L1 = `#${startNum}= IFCORGANIZATION($,${valueConverter(Organization.Name)},$,$,$);`;
  const L2 = `#${startNum + 1}= IFCCARTESIANPOINT((0.,0.,0.));`;
  const L3 = `#${startNum + 2}= IFCCARTESIANPOINT((0.,0.));`;
  const L4 = `#${startNum + 3}= IFCDIRECTION((1.,0.,0.));`;
  const L5 = `#${startNum + 4}= IFCDIRECTION((-1.,0.,0.));`;
  const L6 = `#${startNum + 5}= IFCDIRECTION((0.,1.,0.));`;
  const L7 = `#${startNum + 6}= IFCDIRECTION((0.,-1.,0.));`;
  const L8 = `#${startNum + 7}= IFCDIRECTION((0.,0.,1.));`;
  const L9 = `#${startNum + 8}= IFCDIRECTION((0.,0.,-1.));`;
  const L10 = `#${startNum + 9}= IFCDIRECTION((1.,0.));`;
  const L11 = `#${startNum + 10}= IFCDIRECTION((-1.,0.));`;
  const L12 = `#${startNum + 11}= IFCDIRECTION((0.,1.));`;
  const L13 = `#${startNum + 12}= IFCDIRECTION((0.,-1.));`;
  const L14 = `#${startNum + 13}= IFCAXIS2PLACEMENT3D(#${startNum + 1},$,$);`;

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
    L14;

  return { endNum: startNum + 14, result };
}

module.exports = { configGenerator };
