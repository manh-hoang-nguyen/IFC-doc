function valueConverter(value) {
  if (value == '$' || value == null) return '$';
  if (value.toString().charAt(0) == '#') return value;
  if (Number.isFinite(value)) return value;
  return `'${value}'`;
}

module.exports = {
  valueConverter,
};
