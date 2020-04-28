const { valueConverter } = require('./utils/valueConverter');

function personAndOrganizationGenerator(startNum, person, organization) {
  let { Id, FamilyName, GivenName, MiddleNames, PrefixTitles, SuffixTitles, Roles, Addresses } = person;
  Id = valueConverter(Id);
  FamilyName = valueConverter(FamilyName);
  GivenName = valueConverter(GivenName);
  MiddleNames = valueConverter(MiddleNames);
  PrefixTitles = valueConverter(PrefixTitles);
  SuffixTitles = valueConverter(SuffixTitles);
  Roles = valueConverter(Roles);
  Addresses = valueConverter(Addresses);
  organization.Id = valueConverter(organization.Id);
  organization.Name = valueConverter(organization.Name);
  organization.Description = valueConverter(organization.Description);
  organization.Roles = valueConverter(organization.Roles);
  organization.Addresses = valueConverter(organization.Addresses);

  const L1 = `#${startNum}= IFCPERSONANDORGANIZATION(#${startNum + 1},#${startNum + 2},$);`;
  const L2 = `#${
    startNum + 1
  }= IFCPERSON(${Id},${FamilyName},${GivenName},(${MiddleNames}),${PrefixTitles},${SuffixTitles},(${Roles}),${Addresses});`;
  const L3 = `#${startNum + 2}= IFCORGANIZATION(${organization.Id},${organization.Name},${organization.Description},${
    organization.Roles
  },${organization.Addresses});`;

  const result = L1 + '\n' + L2 + '\n' + L3;
  return { endNum: startNum + 3, result };
}

module.exports = { personAndOrganizationGenerator };
