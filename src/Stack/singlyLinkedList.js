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
    const node = new Node(value)
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


  removePosition(position) {
    let currentNode = this.head
    let length = this._length
    let count = 0
    let beforeNodeToDelete = null
    let nodeToDelete = null
    let deletedNode = null

    if(position < 0 || position > length) {
      throw new Error("This node position does not exist in this list")
    }

    if(position === 1) {
      this.head = currentNode.next
      deletedNode = currentNode
      currentNode = null
      this._length--

      return deletedNode
    }

    while(count < position) {
      beforeNodeToDelete = currentNode
      nodeToDelete = currentNode.next
      count++
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this._length--;
    return deletedNode;
  }
}

// const sll = new singlyLinkedList()
// sll.add(10)
// sll.add(11)

export default singlyLinkedList
