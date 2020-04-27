function valueConverter(value) {
  if (value == '$') return '$';
  if (value.toString().charAt(0) == '#') return value;
  else return `'${value}'`;
}

module.exports = {
  valueConverter,
};
