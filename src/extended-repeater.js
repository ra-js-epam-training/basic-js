const CustomError = require("../extensions/custom-error");

// a basic class-like function
/*
function Text() {
  this.txt = [];
  this.str = '';
  this.sep = '';
};
Text.prototype.repeat = function(num) {
  for (let i = 0; i < num; i++) {
    this.txt.push(this.str);
  }
};
Text.prototype.separate = function() {
  for (let i = 1; i < this.txt.length; i++) {
    this.txt[i] = `${this.sep}${this.txt[i]}`;
  }
}
Text.prototype.flatten = function() {
  return this.txt.join('');
};
*/
class Text {
  constructor(str, sep) {
    this.txt = [];
    this.str = new String(str);
    this.sep = new String(sep);
  }
  // to repeat string N times
  repeat(n) {
    for (let i = 0; i < n; i++) {
      this.txt.push(this.str);
    }
  }
  // to insert a separator between each string
  separate() {
    for (let i = 1; i < this.txt.length; i++) {
      this.txt[i] = `${this.sep}${this.txt[i]}`;
    }
  }
  flatten() {
    return this.txt.join('');
  }
}

/*
function Str(str, sep = '+') {
  this.str = str;
  this.sep = new String(sep);
}
Str.prototype = new Text();
Str.prototype.addition = function(addObj) {
  this.txt = this.txt.map(s => s + addObj.flatten());
};
*/
// this is a representation of a string
class Str extends Text {
  constructor(str, sep = '+') {
    super(str, sep);
  }
  addition(addObj) {
    this.txt = this.txt.map(s => s + addObj.flatten());
  }
}

/*
const str = new Str('foo', undefined);
str.repeat(5);
str.separate();
console.log(str.txt);
console.log(str.flatten());
const add = new Addition('XXX', '00');
add.repeat(3);
add.separate();
str.addition(add);
console.log(str.flatten());
*/

module.exports = function repeater(str, options) {
  const strObj = new Str(str, options["separator"]);
  // repeat the string
  strObj.repeat(options["repeatTimes"] || 1);
  // separate the string
  strObj.separate();
  // do another stuff which is needed for an addtional string
  if (options["addition"]) {
    const addObj = new Text(options["addition"], options["additionSeparator"]);
    addObj.repeat(options["additionRepeatTimes"] || 1);
    addObj.separate();
    strObj.addition(addObj);
  }
  return strObj.flatten();
};

