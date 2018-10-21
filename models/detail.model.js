const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

const Detail = mongoose.model('Detail', detailSchema)

module.exports = Detail