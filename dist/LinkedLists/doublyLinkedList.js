"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data, prev, next) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
  this.prev = prev;
};

var DoublyLinkedList = function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  _createClass(DoublyLinkedList, [{
    key: "getHeadNode",
    value: function getHeadNode() {
      return this.head.data;
    }
  }, {
    key: "getTailNode",
    value: function getTailNode() {
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode.data;
    }
  }, {
    key: "insert",
    value: function insert(data) {
      var node = new Node(data);

      if (this._length) {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      } else {
        this.head = node;
        this.tail = node;
      }
      this._length++;
      return node;
    }

    // insertFirst(value) {
    //   let insertedNode = 
    //   this.head = 
    // }

    // insertBefore(value) {

    // }

    // insertAfter(value) {

    // }

    // find() {

    // }

  }, {
    key: "find",
    value: function find(position) {
      var currentNode = this.head;
      var length = this._length;
      var count = 1;

      if (length === 0 || position < 1 || position > length) {
        throw new Error("This node position does not exist in this list.");
      }

      while (count < position) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode.data;
    }
  }, {
    key: "remove",
    value: function remove() {
      var currentNode = this.head;
      var nodeToDelete = this.getTailNode();

      while (currentNode.next) {
        if (currentNode.next === nodeToDelete) {
          currentNode.next = null;
          this._length--;
          break;
        }
      }
      currentNode = currentNode.next;
    }
  }, {
    key: "removeFirst",
    value: function removeFirst() {
      var currentNode = this.head;

      this.head = currentNode.next;
      this._length--;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._length === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this._length;
    }
  }, {
    key: "clear",
    value: function clear() {
      this._length = 0;
      this.head = null;
    }
  }]);

  return DoublyLinkedList;
}();

// const dll = new DoublyLinkedList()
// dll.insert(10)
// dll.insert(11)
// dll.insert(12)
// console.log(dll.getTailNode())


exports.default = DoublyLinkedList;