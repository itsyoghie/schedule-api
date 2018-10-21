const mongoose = require('mongoose')

const yearSchema = new mongoose.Schema({
  name: String,
  start: String,
  end: String,
  isActivated: {
    type: String,
    default: 'disable'
  },
  semesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Semester'
  }
})

const Year = mongoose.model('Year', yearSchema)

module.exports = Year