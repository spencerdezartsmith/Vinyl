const User = require('../models/account')

const renderSignup = (req, res, next) => {
  res.render('signup')
}

const userSignup = (req, res, next) => {
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
        }
      })
  }
}

const renderSignin = (req, res, next) => {
  res.render('signin')
}

const userSignin = (req, res, next) => {
  const user = req.user
  req.flash('success', 'You are now logged in!')
  res.redirect('/');
}

const userLogout = (req, res, next) => {
  req.logout();
  req.flash('success', 'You have successfully logged out')
  res.redirect('/')
}

const renderProfile = (req, res, next) => {
  res.render('profile', { user: req.user })
}

module.exports = {
  renderSignup,
  userSignup,
  renderSignin,
  userSignin,
  userLogout,
  renderProfile
}
