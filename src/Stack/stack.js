class Node {
  constructor(data, next, prev) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class Stack {
  constructor() {
    this.head = null 
    this.top = null
  }

  push(value) {
    if(this.head == null){
      this.head = new Node(value)
      this.top = this.head
      return this
    }
    let addedNode = new Node(value)
    addedNode.prev = this.top
    this.top.next = addedNode
    this.top = addedNode
    return this
  }

  pop() {
    if(this.head == null) {
      return null
    } 
    let currentTop = this.top
    this.top = this.top.prev
    this.top.next = null
    return currentTop
  }

  length() {
    let currentNode = this.head
    let count = 0
    while(currentNode){
      currentNode = currentNode.next
      count++
    }
    return count
  }

  isEmpty() {
    return (this.head == null) ? true : false
  }

  // contents(data) {
  //   let newArr = []
  //   let currentNode = this.head

  //   while(currentNode) {
  //     currentNode = currentNode.next
  //   //get the data out of each node
  //     return currentNode.data
  //   }
  //   return newArr
  //   //store data in new array
    
  //   // while(currentNode.data) {


  //   //   currentNode.data = currentNode.next
  //   //   newArr.push(this.top.next.data)
  //   // }
  //   // return newArr
  // }

}

// const stack = new Stack()
// stack.push(10)
// stack.push(5)
// console.log(stack.pop())


export default Stack
