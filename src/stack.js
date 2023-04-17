const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  arr=[];
  push(el) {
    this.arr=(el+this.arr.join('').slice(0)).split('')
  }

  pop() {
    let buf=this.arr[0];
    if(typeof buf !=='undefined') buf=Number(buf);
    this.arr.splice(0,1);
    return buf;
  }

  peek() {
    return Number(this.arr[0]);
  }
}

module.exports = {
  Stack
};
