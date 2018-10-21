const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smkn2guguak', {
  keepAlive: true
})

module.exports = {
  User: require('./user.model'),
  Role: require('./role.model'),
  Detail: require('./detail.model')
}