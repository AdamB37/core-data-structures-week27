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

  context('removePosition()', () => {
    it('deletes the node at the specific position in the list', () => {
      const sll = new singlyLinkedList()
      sll.add(10)

      expect(sll.removePosition(1)).to.eql({data: 10, next: null})
    })
  })  

})

 