const User = require('../models/users')
const Review = require('../models/reviews')

const renderSignup = (req, res, next) => {
  res.render('signup', { title: 'Sign up' })
}

const handleSignup = (req, res, next) => {
  const { name, email, password, passwordConf } = req.body

  req.check('name', 'Please enter your name!').notEmpty()
  req.check('email', 'Please enter a valid email').isEmail()
  req.check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
  req.check('password', 'Passwords must match!').equals(passwordConf)

  const errors = req.validationErrors()

  if (errors) {
    res.render('signup', { errors })
  } else {
      User.findByEmail(email)
      .then(user => {
        if (user) {
          req.flash('error', 'Email already in use!')
          res.status(422).render('signup')
        } else {
          User.createNewUser({ name, email, password })
            .then(user => {
              req.flash('success', 'You are now registered and can log in!')
              res.redirect('/signin')
          })
          .catch(error => res.status(500).render('error', { error }))
        }
      })
      .catch(error => res.status(500).render('error', { error }))
  }
}

const renderSignin = (req, res, next) => {
  res.render('signin', { title: 'Sign in' })
}

const handleSignin = (req, res, next) => {
  const user = req.user
  req.flash('success', 'You are now logged in!')
  res.redirect(`/users/${user.id}`);
}

const handleLogout = (req, res, next) => {
  req.logout();
  req.flash('success', 'You have successfully logged out')
  res.redirect('/')
}

module.exports = {
  renderSignup,
  handleSignup,
  renderSignin,
  handleSignin,
  handleLogout
}
