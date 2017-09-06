const passport = require('passport')
const bcrypt= require('bcrypt-nodejs')
const LocalStrategy = require('passport-local')
const User = require('../models/users')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
      return null
    })
    .catch(err => {
      done(err, null)
      return null
    })
})

const localOptions = { usernameField: 'email' }

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  User.findByEmail(email)
    .then(user => {
      if (!user) { return done(null, false) }
      if (user) {
        bcrypt.compare(password, user.password, function(err, isMatch) {
          if (err) { return done(err, false) }
          if (!isMatch) { return done(null, false) , { message: 'Invalid Credentials' }}

          return done(null, user)
        })
      }
    })
    .catch(error => error)
})

passport.use(localLogin)

