class Node {
  constructor(data, prev, next) {
  this.data = data
  this.next = next
  this.prev = prev
  }
}

const DoublyLinkedList = class {
  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

 getHeadNode() { return this.head }

  getTailNode() {
    let currentNode = this.head

    while( currentNode.next ) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  insert( data ) {
    let node = new Node( data )
    let currentNode = this.head

    if( !this.head ) {
      this.head = node
      this._length++
      node.prev = null
      return node
    }
    while( currentNode.next ) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    node.prev = currentNode
    // console.log('data',node);
    this._length++

    return node.data
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

// const dll = new DoublyLinkedList()
// dll.insert(10)
// dll.insert(11)
// dll.insert(12)
// dll.insert(13)
// console.log(dll.isEmpty())


export default DoublyLinkedList
