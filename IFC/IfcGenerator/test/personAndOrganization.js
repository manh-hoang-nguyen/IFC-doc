const fs = require('fs');

const { personAndOrganizationGenerator } = require('../personAndOrganizationGenerator');

const person = {
  Id: 'manh-hoang.nguyen@egis.fr',
  FamilyName: 'NGUYEN',
  GivenName: 'NGUYEN Manh Hoang',
  MiddleNames: '$',
  PrefixTitles: '$',
  SuffixTitles: '$',
  Roles: 'BIM  engineer',
  Addresses: '$',
};

const organization = {
  Id: '$',
  Name: 'Egis Rail',
  Description: '',
  Roles: '$',
  Addresses: '$',
};

const { result, endNum } = personAndOrganizationGenerator(6, person, organization);

// writeFile function with filename, content and callback function
fs.writeFile('./IFC/IfcGenerator/outputTests/personAndOrganization.ifc', result, function (err) {
  if (err) throw err;
  console.log('personAndOrganization file is created successfully.', `End Num = ${endNum}`);
});
