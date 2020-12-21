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
      // to clean up an array
      this.chain.length = 0;
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
    const chainStr = this.chain.map(i => `( ${i} )`).join('~~');
    // to empty the array
    this.chain.length = 0;
    return chainStr;
  }
};

module.exports = chainMaker;
