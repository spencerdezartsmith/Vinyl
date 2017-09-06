const Review = require('./db/reviews')

const getThreeReviews = () => {
  return Review.getThreeReviews()
}

const getReviewsForOneAlbum = (albumId) => {
  return Review.getReviewsForOneAlbum(albumId)
}

const createNewReview = (data) => {
  return Review.createNewReview(data)
}

module.exports = {
  getThreeReviews,
  getReviewsForOneAlbum,
  createNewReview
}