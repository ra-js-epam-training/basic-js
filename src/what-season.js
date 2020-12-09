const CustomError = require("../extensions/custom-error");

const seasons = {
  winter: ['Dec', 'Jan', 'Feb'],
  spring: ['Mar', 'Apr', 'May'],
  summer: ['Jun', 'Jul', 'Aug'],
  autumn: ['Sep', 'Oct', 'Nov']
};

module.exports = function getSeason(date) {
  // no arguments passed
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  // argument is here but it's invalid
  if (!(date instanceof Date)) {
    throw new CustomError('Bad input argument!');
  }
  // getting actual month
  const month = date.toLocaleString('default', { month: 'short' });
  for (let key in seasons) {
    if (seasons[key].includes(month)) {
      return key;
    }
  }
  return 'Unable to determine the time of year!';
};
