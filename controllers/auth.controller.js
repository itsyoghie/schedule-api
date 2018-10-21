const db = require('../models')

module.exports = {

  addOne: (req, res) => {
    db.Detail.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
      .then(detail => {
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          role: req.body.role,
          detail: detail._id
        })
          .then(result => {
            res.status(201).json(result)
          })
          .catch(error => {
            res.status(500).json(error)
          })
      })
      .catch(error => {
        res.status(500).json({error})
      })
  }

}