function valueConverter(value) {
  if (value == '$' || value == null) return '$';
  if (value.toString().charAt(0) == '#') return value;
  if (Number.isFinite(value)) return value.toFixed(6);
  return `'${value}'`;
}

module.exports = {
  valueConverter,
};
