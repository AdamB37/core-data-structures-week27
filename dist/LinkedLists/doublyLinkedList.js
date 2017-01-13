"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
  this.prev = null;
};

var DoublyLinkedList = function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this._length = 0;
    this.head = null;
  }

  _createClass(DoublyLinkedList, [{
    key: "add",
    value: function add(value) {
      if (!value) {
        throw new Error("Please pass in a value!");
      }
      var node = new Node(value);
      if (!this.head) {
        this.head = node;
        this._length += 1;

        return node;
      }
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this._length += 1;
      return node;
    }
  }, {
    key: "searchNodeAt",
    value: function searchNodeAt(position) {
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
      return currentNode;
    }
  }, {
    key: "getHeadNode",
    value: function getHeadNode() {
      return this.head;
    }
  }, {
    key: "getTailNode",
    value: function getTailNode() {
      var currentNode = this.head;
      console.log(currentNode);

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      return currentNode;
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

// const sll = new doublyLinkedList()
// sll.add(10)
// sll.add(11)
// sll.add(12)
// sll.add(13)
// console.log(sll.isEmpty())


exports.default = DoublyLinkedList;