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

interface DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  push(val: string | number): DoublyLinkedList;
}

class DoublyLinkedList implements DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: string | number): DoublyLinkedList {
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
}

const List = new DoublyLinkedList();
const node1 = new ListNode(12);
node1.next = new ListNode(11);

List.push(99);
List.push(100);

console.log(List);
console.log(node1);
