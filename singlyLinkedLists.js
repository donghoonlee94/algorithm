// 단일 연결 리스트, 다음 노드를 가리키는, 한 줄로 움직이는 형태의 리스트.
// 인덱스가 존재하지 않는 자료구조형.
// Element: node
// head: 첫 번째 노드, tail: 마지막 노드.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 기존 tail.next에 새로운 노드 추가 후 tail 업데이트
      // this.head와 this.tail은 같은 노드를 참조하기 때문에 head.next에 새로운 노드가 같이 추가됨. 그리고 tail 업데이트.
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  //   traverse() {
  //     let current = this.head;
  //     while (current) {
  //       console.log(current.val);
  //       current = current.next;
  //     }
  //   }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;

    this.head = current.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    let count = 0;

    while (count !== idx) {
      current = current.next;
      count++;
    }

    return current;
  }

  set(idx, val) {
    const foundNode = this.get(idx);

    if (!foundNode) return false;

    foundNode.val = val;

    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    let temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prevNode = this.get(idx - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      // 다음 값을 미리 저장. 시작은 바꾸기 전의 head.
      next = node.next;

      // next를 이전 값으로 변경
      node.next = prev;

      // prev를 현재 값으로 변경
      prev = node;

      // node를 다음으로 한칸 이동.
      node = next;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOOD BYE");
list.push("!");
list.push("!!!");
list.push("@");
