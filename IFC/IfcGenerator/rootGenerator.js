function rootGenerator(header, body) {
  let result =
    'ISO-10303-21;' +
    '\n' +
    `${header}` +
    '\n' +
    '\n' +
    'DATA;' +
    '\n' +
    `${body}` +
    '\n' +
    'ENDSEC;' +
    '\n' +
    '\n' +
    'END-ISO-10303-21;';
  return result;
}

module.exports = { rootGenerator };
