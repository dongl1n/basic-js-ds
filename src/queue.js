const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.length = 0;
  }

  getUnderlyingList() {
    let obj={}
    obj.value=this.value;
    obj.next=this.next;
    return obj;
  }

  enqueue(value) {
    if (this.length === 0) {
      this.value = value;
      this.next = null;
      this.length++;
    } else {
      let pre = this;
      let cur = pre.next;
      while (cur !== null) {
        pre = cur;
        cur = cur.next
      }
      const node = new ListNode(value);
      pre.next = node;
      this.length++;
    }
  }

  dequeue() {
    if (this.length === 0) { return undefined; }
    if (this.length === 1) {
      let result = this.value;
      this.value = null;
      this.length = 0;
      return result;
    }
    let result = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    this.length--;
    return result;
  }
}

module.exports = {
  Queue
};
