interface INode {
  val: string | number | null;
  next: INode | null;
  prev: INode | null;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

class ListNode implements INode {
  val: string | number | null;
  next: INode | null;
  prev: INode | null;

  constructor(val: string | number | null) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

interface IDoublyLinkedList {
  head: INode | null;
  tail: INode | null;
  length: number;
  push(val: string | number): IDoublyLinkedList;
}

class DoublyLinkedList implements IDoublyLinkedList {
  head: INode | null;
  tail: INode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: string | number): IDoublyLinkedList {
    const newNode = new ListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): INode | undefined | null {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode?.prev ?? null;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

const list = new DoublyLinkedList();
const node1 = new ListNode(12);
node1.next = new ListNode(11);

list.push(99);
list.push(100);

console.log(list);
console.log(node1);
