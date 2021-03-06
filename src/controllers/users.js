const Review = require('../models/reviews')

const renderUserProfile = (req, res, next) => {
  const { userId } = req.params

  return Review.getReviewsForOneUser(userId)
    .then(reviews => {
      res.render('profile', { reviews, title: 'Profile' })
    })
    .catch(err => next(err))
}

module.exports = {
  renderUserProfile
}