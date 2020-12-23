const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LN_OF_TWO = 0.693;

module.exports = function dateSample(sampleActivity) {
  // exit if there are no arguments or the input is not a string
  if (arguments.length === 0 || typeof sampleActivity !== "string") {
    return false;
  }
  // the string must have numbers only
  let sampleNum = new Number(sampleActivity);
  if (typeof sampleNum !== "number" || sampleNum <= 0 || sampleNum > MODERN_ACTIVITY) {
    return false;
  }
  // calculate the result and round up it
  return ((sampleNum/LN_OF_TWO) * HALF_LIFE_PERIOD).toFixed();
};
