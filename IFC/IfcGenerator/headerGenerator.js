const { valueConverter } = require('./utils/valueConverter');

function headerGenerator(
  description,
  name,
  time_stamp,
  author,
  organization,
  preprocessor_version, //name of the toolbox used to create the IFC file
  originating_system, //name of the application (including built number)
  authorization,
  schema,
) {
  description = valueConverter(description);
  name = valueConverter(name);
  time_stamp = valueConverter(time_stamp);
  author = valueConverter(author);
  organization = valueConverter(organization);
  preprocessor_version = valueConverter(preprocessor_version);
  originating_system = valueConverter(originating_system);
  authorization = valueConverter(authorization);
  schema = valueConverter(schema);
  let result =
    'HEADER;' +
    '\n' +
    `FILE_DESCRIPTION((${description}),'2;1');` +
    '\n' +
    `FILE_NAME(${name},${time_stamp},(${author}),(${organization}),${preprocessor_version},${originating_system},${authorization});` +
    '\n' +
    `FILE_SCHEMA((${schema}));` +
    '\n' +
    'ENDSEC;';
  return result;
}

module.exports = { headerGenerator };
