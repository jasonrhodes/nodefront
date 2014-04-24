module.exports = function (exponent) {
  return function (number) {
    return Math.pow(number, exponent);
  }
};