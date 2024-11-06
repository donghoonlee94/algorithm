// Binary Search tree
// 자식은 최대 2개.
// 왼쪽은 낮은 값, 우측은 높은 값을 기준으로 정렬된 트리.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(15);
