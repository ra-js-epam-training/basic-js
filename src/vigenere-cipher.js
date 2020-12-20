const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machineType = true) {
    this.machineType = machineType;
    this.output = new String();
    this.ENGLISH_LEN = 26;
    this.LOWER_MIN = 97;
    this.LOWER_MAX = 122;
    this.UPPER_MIN = 65;
    this.UPPER_MAX = 90;
  }

  isLower(c) {
    return c >= this.LOWER_MIN && c <= this.LOWER_MAX;
  }

  isUpper(c) {
    return c >= this.UPPER_MIN && c <= this.UPPER_MAX;
  }

  getUpperSecret(secret, j) {
    return secret[j % secret.length].toUpperCase().charCodeAt() - this.UPPER_MIN;
  }

  getLowerSecret(secret, j) {
    return secret[j % secret.length].toLowerCase().charCodeAt() - this.LOWER_MIN;
  }

  encrypt(plaintext, secret) {
    if (plaintext.length === 0 || secret.length === 0) {
      return new Error('Input args are empty!');
    }
    for (let i = 0, j = 0; i < plaintext.length; i++) {
      let c = plaintext.charCodeAt(i);
      if (this.isUpper(c)) {
        const secretItem = this.getUpperSecret(secret, j);
        const codeToChar = (c - this.UPPER_MIN + secretItem) % this.ENGLISH_LEN;
        this.output += String.fromCharCode(codeToChar + this.UPPER_MIN);
        j++;
      } else if (this.isLower(c)) {
        const secretItem = this.getLowerSecret(secret, j);
        const codeToChar = (c - this.LOWER_MIN + secretItem) % this.ENGLISH_LEN;
        this.output += String.fromCharCode(codeToChar + this.LOWER_MIN);
        j++;
      } else {
        this.output += plaintext.charAt(i);
      }
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
const text = cypher.encrypt('foo bar baz!', 'SECRET');
//const text = cypher.encrypt('Foo Bar Baz!', 'secret');
console.log(text);
