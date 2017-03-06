var express = require('express')
// var path = require('path')
// var router = express.Router()
// var favicon = require('serve-favicon')
// var logger = require('morgan')
// var cookieParser = require('cookie-parser')
// var bodyParser = require('body-parser')
//
var index = require('./routes/index')
// var users = require('./routes/users')

var app = express()

var god = require('./routes/god')
const findGod = (name) => {
  return gods.find(god => name == god.name)
}

// view engine setup
// app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(logger('dev'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)
// app.use('/users', users)
app.use('/gods', god)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})
router.get('/:name', function (req, res, next) {
  const god = findGod(req.params.name)
  res.render('god', {god: god})
})

module.exports = app
