//Remove breakline from both ends of a string
function breaklineTrim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

module.exports = { breaklineTrim };
