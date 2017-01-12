import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import doubleLinkedList from '../../src/LinkedLists/doubleLinkedList'

chai.use(chaiChange)

describe('doubleLinkedList', () => {
  it('exists', function () {
    expect(doubleLinkedList).to.be.a('function')
  }) 
  
  context('add()', () => {
    it('adds the value to the list', () => {
      const dll = new doubleLinkedList()
      dll.add(10)

    expect(dll.add(10)).to.eql({data: 10, next: null })
    })
  })

  context('searchNodeAt()', () => {
    it('searches for a node at a specific position in the list', () => {
      const dll = new doubleLinkedList()
      dll.add(10)

      expect(dll.searchNodeAt(1)).to.eql({data: 10, next: null })
    })
  })


  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      const dll = new doubleLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)

      expect(dll.getHeadNode()).to.eql({data: 10, next: {data: 11, next: {data: 12, next: {data: 13, next: null}}}})
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const dll = new doubleLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)

      expect(dll.getTailNode()).to.eql({data: 13, next: null})
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      const dll = new doubleLinkedList
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
      const dll = new doubleLinkedList
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
      const dll = new doubleLinkedList

      expect(dll.isEmpty()).to.eql(true)
    })
  })

  context('isEmpty()', () => {
    it('returns false if the list is empty', () => {
      const dll = new doubleLinkedList
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
      const dll = new doubleLinkedList
      dll.add(10)
      dll.add(11)
      dll.add(12)
      dll.add(13)
      dll.add(14)

      expect( () => dll.clear() ).to.alter(() => dll.size(), { from: 5, to: 0 } )
    })
  })

})







 