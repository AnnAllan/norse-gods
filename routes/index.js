var express = require('express')
var router = express.Router()
const {gods} = require('../models/gods')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { gods: gods })
})

module.exports = router
