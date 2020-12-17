const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machineType = true) {
    this.machineType = machineType;
    this.output = [];
    this.LATIN_LEN = 26;
    this.LOWER_MIN = 97;
    this.LOWER_MAX = 122;
    this.UPPER_MIN = 65;
    this.UPPER_MAX = 90;
  }

  isLower(c) {
    return this.LOWER_MIN <= c && c <= this.LOWER_MAX;
  }

  isUpper(c) {
    return this.UPPER_MIN <= c && c <= this.UPPER_MAX;
  }

  isLetter(c) {
    return this.isUpper(c) || this.isLower(c);
  }

  encrypt(plaintext, secret) {
    if (plaintext.length === 0 || secret.length === 0) {
      return new Error('Input args are empty!');
    }
    const key = secret.split('').map(c => (c.codePointAt() - this.UPPER_MIN) % 32);
    console.log(key);
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      let c = plaintext.charCodeAt(i);
      console.log('>> code ', c);
      let code;
      if (this.isUpper(c)) {
        code = (c - this.UPPER_MIN + key[j % key.length]) % (this.LATIN_LEN + this.UPPER_MIN);
        this.output.push(String.fromCharCode(code));
        j++;
      } else if (this.isLower(c)) {
        code = (c - this.LOWER_MIN + key[j % key.length]) % (this.LATIN_LEN + this.LOWER_MIN);
        this.output.push(String.fromCharCode(code));
        j++;
      } else {
        this.output.push(plaintext.charAt(i))
      }
      console.log('> ', code);
    }
    return this.output;
  }

  decrypt(ciphertext, secret) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

//module.exports = VigenereCipheringMachine;
const cypher = new VigenereCipheringMachine();
const text = cypher.encrypt('Foo Bar Baz!', 'secret');
console.log(text);
