import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../../src/LinkedLists/DoublyLinkedList'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  it('exists', function () {
    expect(DoublyLinkedList).to.be.a('function')
  }) 
  
  context('insert()', () => {
    it('inserts a new node and its value to the tail of the list', () => {
      const dll = new DoublyLinkedList()
      dll.add(10)
      dll.add(11)
      dll.add(12)

    expect(dll.find(12).to.eql(dll.getTailNode()))
   })
  })

  context('insertFirst()', () => {
    it('inserts a node and its value to the head of the list', () => {
      const dll = new DoublyLinkedList()
      dll.insert(10)
      dll.insert(11)
      dll.insert(12)

      expect(dll.getHeadNode().data).to.eql(10)
    })
  })

  context('insertAfter()', () => {
    it('inserts a node and its value after the first node', () => {

    })
  })

  context('find()', () => {
    it('searches for a node at a specific position in the list', () => {
      const dll = new DoublyLinkedList()
      dll.add(10)

      expect(dll.find(1)).to.eql({data: 10, next: null })
    })
  })


  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)

      expect(dll.getHeadNode()).to.eql({data: 10, next: {data: 11, next: {data: 12, next: {data: 13, next: null}}}})
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)

      expect(dll.getTailNode()).to.eql({data: 13, next: null})
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)
      dll.add(14)

      expect( () => dll.removeFirst() ).to.alter(() => dll.size(), { from: 5, to: 4 } )
    })
  })
  
  context('removeFirst()', () => {
    it('deletes the head node in the list', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)
      dll.add(14)

      expect( () => dll.removeFirst() ).to.alter(() => dll.size(), { from: 5, to: 4 } )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      const dll = new DoublyLinkedList

      expect(dll.isEmpty()).to.eql(true)
    })
  })

  context('isEmpty()', () => {
    it('returns false if the list is empty', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)
      dll.add(14)

      expect(dll.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('deletes all the values and nodes in the list', () => {
      const dll = new DoublyLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)
      dll.add(14)

      expect( () => dll.clear() ).to.alter(() => dll.size(), { from: 5, to: 0 } )
    })
  })

})







 