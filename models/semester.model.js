const mongoose = require('mongoose')

const semesterSchema = new mongoose.Schema({
  name: String
})

const Semester = mongoose.model('Semester', semesterSchema)

module.exports = Semester