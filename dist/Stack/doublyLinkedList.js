"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var Stack = function Stack() {
  undefined.head = null;
  undefined.top = null;

  undefined.push = function (data) {
    if (undefined.head == null) {
      undefined.head = new Node(data);
      undefined.top = undefined.head;
      return undefined;
    }
    var addedNode = new Node(data);
    addedNode.last = undefined.top;
    undefined.top.next = addedNode;
    undefined.top = addedNode;
    return undefined;
  };

  undefined.pop = function (data) {
    if (!undefined.head) {
      throw new Error("There are no values in the stack");
      return null;
    }
    var removedTop = undefined.top;
    undefined.top = undefined.top.last;
    undefined.top.next = null;

    return removedTop;
  };
};

// const sll = new singlyLinkedList()
// sll.add(10)
// sll.add(11)
// sll.add(12)
// sll.add(13)
// console.log(sll.isEmpty())


exports.default = Stack;