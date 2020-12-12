const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.getLength()) {
      throw new CustomError('Wrong position!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainStr = this.toString();
    // to empty the array
    this.chain.length = 0;
    return chainStr;
  },
  toString() {
    return this.chain.map(i => `( ${i} )`).join('~~');
  }
};

module.exports = chainMaker;
