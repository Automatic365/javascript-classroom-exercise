'use strict'

class Classroom {
  constructor(numberOfStudents) {
    this.numberOfStudents = numberOfStudents
  }

  addStudents(number) {
    this.numberOfStudents += number
  }
}

module.exports = Classroom
