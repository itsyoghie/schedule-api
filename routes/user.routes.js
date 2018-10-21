const router = require('express').Router()
const { addOne } = require('../controllers/auth.controller') 

router.post('/', addOne)

module.exports = router