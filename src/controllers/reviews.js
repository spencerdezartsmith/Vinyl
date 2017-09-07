const Review = require('../models/reviews')
const Album = require('../models/albums')

const renderNewReview = (req, res, next) => {
  const { albumId } = req.params
  return Album.getOneAlbumById(albumId)
    .then(album => {
      res.render('new_review', { album })
    })
    .catch(error => res.status(500).render('error', { error }))
}

const handleNewReview = (req, res, next) => {
  const { review } = req.body
  const { albumId } = req.params
  const userId = req.user.id

  return Review.createNewReview({ review, userId, albumId })
    .then(album => {
      res.redirect(`/albums/${albumId}`)
    })
    .catch(error => res.status(500).render('error', { error }))
}

const handleDeleteReview = (req, res, next) => {
  const { reviewId } = req.params

  Review.deleteReview(reviewId)
    .then(() => {
      res.send('Review was successfully deleted!')
    })
    .catch(error => res.status(500).render('error', { error }))
}

module.exports = {
  renderNewReview,
  handleNewReview,
  handleDeleteReview
}