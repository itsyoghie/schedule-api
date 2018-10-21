const mongoose = require('mongoose')
const hash = require('bycjwt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'disable'
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  },
  detail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Detail'
  }
})

userSchema.post('validate', function() {
  this.password = hash.bcencode(this.password)
})

const User = mongoose.model('User', userSchema)

module.exports = User