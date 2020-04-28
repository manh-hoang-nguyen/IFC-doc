const { valueConverter } = require('./utils/valueConverter');

function personAndOrganizationGenerator(startNum, user) {
  const { firstName, lastName, email, status, company } = user;
  const Id = valueConverter(email);
  const FamilyName = valueConverter(firstName);
  const GivenName = valueConverter(firstName + lastName);
  const Roles = valueConverter(status);

  const L1 = `#${startNum}= IFCPERSONANDORGANIZATION(#${startNum + 1},#${startNum + 2},$);`;
  const L2 = `#${startNum + 1}= IFCPERSON(${Id},${FamilyName},${GivenName},($),$,$,(${Roles}),$);`;
  const L3 = `#${startNum + 2}= IFCORGANIZATION($,${valueConverter(company)},$ ,$,$);`;

  const result = L1 + '\n' + L2 + '\n' + L3;
  return { endNum: startNum + 3, result };
}

module.exports = { personAndOrganizationGenerator };
