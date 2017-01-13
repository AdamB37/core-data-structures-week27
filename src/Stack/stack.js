  class Node {
  constructor(data, next, prev) {
  this.data = data
  this.next = next
  this.prev = prev
  }
}

class Stack {
  constructor() {
  this.top = null
  }

  push(data) {
    const addedNode = new Node(data, null)
    if(this.top) {
      this.top.next = addedNode
    }
    addedNode.prev = this.top 
    this.top = addedNode
  }

  contents() {
    const newArr = []
    
    while(this.top.next) {
      this.top = this.top.next
      newArr.push(this.top.next.data)
    }
    return newArr
  }

  pop(data) {
    if(!this.top) {
      throw new Error("There are no values in the stack")
      return null
    } 
    let topToPop = this.top
    let newTop = topToPop.next

    return topToPop
  }
}

// const stack = new Stack()
// stack.push(10)
// stack.push(5)
// console.log(stack.pop())

export default Stack
