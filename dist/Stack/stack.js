"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data, next, prev) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = next;
  this.prev = prev;
};

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.head = null;
    this.top = null;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(value) {
      if (this.head == null) {
        this.head = new Node(value);
        this.top = this.head;
        return this;
      }
      var addedNode = new Node(value);
      addedNode.prev = this.top;
      this.top.next = addedNode;
      this.top = addedNode;
      return this;
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.head == null) {
        return null;
      }
      var currentTop = this.top;
      this.top = this.top.prev;
      this.top.next = null;
      return currentTop;
    }
  }, {
    key: "length",
    value: function length() {
      var currentNode = this.head;
      var count = 0;
      while (currentNode) {
        currentNode = currentNode.next;
        count++;
      }
      return count;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.head == null ? true : false;
    }
  }, {
    key: "peek",
    value: function peek() {
      if (this.head == null) {
        return null;
      }
      var currentTop = this.top;
      return currentTop.data;
    }
  }]);

  return Stack;
}();

exports.default = Stack;