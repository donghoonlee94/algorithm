interface INode {
  val: string | number;
  next: INode;
  prev: INode;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

class ListNode implements Nullable<INode> {
  val: string | number | null;
  next: INode | null;
  prev: INode | null;

  constructor(val: string | number | null) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const List = new DoublyLinkedList();
console.log(List);
