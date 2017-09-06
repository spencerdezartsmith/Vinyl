const Review = require('./db/reviews')

const getThreeReviews = () => {
  return Review.getThreeReviews()
}

module.exports = {
  getThreeReviews
}