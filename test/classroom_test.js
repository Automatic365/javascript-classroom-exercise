'use strict'

const expect = require('chai').expect
const Classroom = require('../src/classroom')

describe('Classroom', () => {
  describe('new classroom', () => {
    it('has the number of students provided as an argument', () => {
      const classroom = new Classroom(10)
      expect(classroom.numberOfStudents).to.equal(10)
    })
  })
})
