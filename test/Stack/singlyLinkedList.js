import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import singlyLinkedList from '../../src/Stack/singlyLinkedList'

chai.use(chaiChange)

describe('singlyLinkedList', () => {
  it('exists', function () {
    expect(singlyLinkedList).to.be.a('function')
  }) 
  
  context('add()', () => {
    it('adds the value to the list', () => {
      const sll = new singlyLinkedList()
      sll.add(10)

    expect(sll.add(10)).to.eql({data: 10, next: null })
    })
  })

  context('searchNodeAt()', () => {
    it('searches for a node at a specific position in the list', () => {
      const sll = new singlyLinkedList()
      sll.add(10)

      expect(sll.searchNodeAt(1)).to.eql({data: 10, next: null })
    })
  })


  context('getHeadNode()', () => {
    it('returns the head node in the list', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)

      expect(sll.getHeadNode()).to.eql({data: 10, next: {data: 11, next: {data: 12, next: {data: 13, next: null}}}})
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)

      expect(sll.getTailNode()).to.eql({data: 13, next: null})
    })
  })

  context('remove()', () => {
    it('deletes the last node in the list', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)
      sll.add(14)

      expect( () => sll.removeFirst() ).to.alter(() => sll.size(), { from: 5, to: 4 } )
    })
  })
  
  context('removeFirst()', () => {
    it('deletes the head node in the list', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)
      sll.add(14)

      expect( () => sll.removeFirst() ).to.alter(() => sll.size(), { from: 5, to: 4 } )
    })
  })

  context('isEmpty()', () => {
    it('returns true if the list is empty', () => {
      const sll = new singlyLinkedList

      expect(sll.isEmpty()).to.eql(true)
    })
  })

  context('isEmpty()', () => {
    it('returns false if the list is empty', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)
      sll.add(14)

      expect(sll.isEmpty()).to.eql(false)
    })
  })

  context('clear()', () => {
    it('deletes all the values and nodes in the list', () => {
      const sll = new singlyLinkedList
      sll.add(10)
      sll.add(11)
      sll.add(12)
      sll.add(13)
      sll.add(14)

      expect( () => sll.clear() ).to.alter(() => sll.size(), { from: 5, to: 0 } )
    })
  })

})







 