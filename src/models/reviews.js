const Review = require('./db/reviews')

const getThreeReviews = () => {
  return Review.getThreeReviews()
}

const getReviewsForOneAlbum = (albumId) => {
  return Review.getReviewsForOneAlbum(albumId)
}

const getReviewsForOneUser = (userId) => {
  return Review.getReviewsForOneUser(userId)
}

const createNewReview = (data) => {
  return Review.createNewReview(data)
}

const deleteReview = (reviewId) => {
  return Review.deleteReview(reviewId)
}

module.exports = {
  getThreeReviews,
  getReviewsForOneAlbum,
  createNewReview,
  getReviewsForOneUser,
  deleteReview
}