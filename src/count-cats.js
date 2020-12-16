const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  //вариант решения
  //const arr = [].concat(...cats);

  //return arr.filter(str => str === '^^').length;

  let total = 0;
  if (!Array.isArray(cats) || cats.length == 0) { //  предпочтительно строгое сравнение; можно обойтись без проверки на длину массива
    return total;
  }

  for (const element of cats) {
    if (!Array.isArray(element) || element.length == 0) { // ===; так как выше уже была подобная проверка и вызвано возвращение результата, нет необходимости перепроверять это в цикле
      break;
    }
    total += element.reduce(function(sum, current) {
      if (current === '^^') {
        return sum += 1;
      }
      return sum;
    }, 0);
  }
  return total;
};
