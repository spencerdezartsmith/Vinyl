const isLoggedIn = (req, res, next) => {
  if (!req.user) { return res.redirect('/signin') }
  next()
}

module.exports = { isLoggedIn }