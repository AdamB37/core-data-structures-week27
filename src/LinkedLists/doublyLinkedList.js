class Node {
  constructor(data) {
  this.data = data
  this.next = null
  this.prev = null
  }
}

const DoublyLinkedList = class {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  getHeadNode() {
    return this.head
  }
  

  getTailNode() {
    let currentNode = this.head

    while(currentNode.next) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  insert(value) {
    let insertedNode = new Node(value)
    if(this._length) {
      insertedNode = this.tail.next
      insertedNode.prev = this.tail
      this.tail = insertedNode
    } else {
      this.head = insertedNode
      this.tail = insertedNode
    }
    this._length++
    return insertedNode
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

  remove() {
    let currentNode = this.head
    let nodeToDelete = this.getTailNode()

    while(currentNode.next) {
      if(currentNode.next === nodeToDelete){
        currentNode.next = null
        this._length--
        break
      }
    } 
    currentNode = currentNode.next   
  }

  removeFirst() {
    let currentNode = this.head

    this.head = currentNode.next
    this._length--
  }

  isEmpty() {
    return this._length === 0
  }

  size() {
    return this._length
  }

  clear() {
    this._length = 0
    this.head = null
  }

}

// const sll = new doublyLinkedList()
// sll.add(10)
// sll.add(11)
// sll.add(12)
// sll.add(13)
// console.log(sll.isEmpty())


export default DoublyLinkedList
