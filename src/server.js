const path = require('path')
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const expressValidator = require('express-validator')
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = process.env.PORT || 3000

const app = express()

require('pug')
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 60000 * 30},
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next();
})

app.use('/', routes)

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
