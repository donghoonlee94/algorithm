class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head || this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const isStart = index <= this.length / 2;
    let count = isStart ? 0 : this.length - 1;
    let current = isStart ? this.head : this.tail;

    while (count !== index) {
      current = isStart ? current.next : current.prev;
      isStart ? count++ : count--;
    }

    return current;
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = this.get(index + 1);

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removedNode = this.get(index);
    let beforeNode = this.get(index - 1);
    let afterNode = this.get(index + 1);

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}

// Big O
// insertion O(1) || O(n)
// Removal O(1) || O(n)
// Searching O(N)
// Access O(N)
