var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    return ListNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.push = function (val) {
        var newNode = new ListNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    };
    return DoublyLinkedList;
}());
var List = new DoublyLinkedList();
var node1 = new ListNode(12);
node1.next = new ListNode(11);
List.push(99);
List.push(100);
console.log(List);
console.log(node1);
