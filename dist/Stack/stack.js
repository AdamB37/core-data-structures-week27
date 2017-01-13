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

    this.top = null;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(data) {
      var addedNode = new Node(data, null);
      if (this.top) {
        this.top.next = addedNode;
      }
      addedNode.prev = this.top;
      this.top = addedNode;
    }
  }, {
    key: "contents",
    value: function contents() {
      var newArr = [];

      while (this.top.next) {
        this.top = this.top.next;
        newArr.push(this.top.next.data);
      }
      return newArr;
    }
  }, {
    key: "pop",
    value: function pop(data) {
      if (!this.top) {
        throw new Error("There are no values in the stack");
        return null;
      }
      var topToPop = this.top;
      var newTop = topToPop.next;

      return topToPop;
    }
  }]);

  return Stack;
}();

// const stack = new Stack()
// stack.push(10)
// stack.push(5)
// console.log(stack.pop())

exports.default = Stack;