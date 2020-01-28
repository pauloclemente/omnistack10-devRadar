module.exports = function parseStringAsArrays(arrayString) {
  return arrayString.split(",").map(tech => tech.trim());
};
