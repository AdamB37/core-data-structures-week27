class Node {
  constructor(data) {
  this.data = data
  this.next = null
  }
}

const singlyLinkedList = class {
  constructor() {
    this._length = 0
    this.head = null
  }

  add(value) {
    if(!value){
      throw new Error("Please pass in a value!")
    }
    let node = new Node(value)
    if(!this.head) {
      this.head = node
      this._length += 1

      return node
    }
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this._length += 1
    return node
  }

  searchNodeAt(position) {
    let currentNode = this.head
    let length = this._length
    let count = 1

    if(length === 0 || position < 1 || position > length) {
      throw new Error("This node position does not exist in this list.")
    }

    while(count < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  getHeadNode() {
    return this.head
  }

  getTailNode() {
    let currentNode = this.head
    console.log(currentNode)

    while(currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }

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

// const sll = new singlyLinkedList()
// sll.add(10)
// sll.add(11)
// sll.add(12)
// sll.add(13)
// console.log(sll.isEmpty())


export default singlyLinkedList
