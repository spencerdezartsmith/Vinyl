const isLoggedIn = (req, res, next) => {
  if (!req.user) { return res.redirect('/sign-in') }
  next()
}

module.exports = { isLoggedIn }