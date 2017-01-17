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
      return this.head;
    }
  }, {
    key: "getTailNode",
    value: function getTailNode() {
      var currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      return currentNode;
    }
  }, {
    key: "insert",
    value: function insert(data) {
      var node = new Node(data);
      var currentNode = this.head;

      if (!this.head) {
        this.head = node;
        this._length++;
        node.prev = null;
        return node;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      node.prev = currentNode;
      // console.log('data',node);
      this._length++;

      return node.data;
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
// dll.insert(13)
// console.log(dll.isEmpty())


exports.default = DoublyLinkedList;