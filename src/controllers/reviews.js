const Review = require('../models/reviews')
const Album = require('../models/albums')

const renderNewReview = (req, res, next) => {
  const { albumId } = req.params
  Album.getOneAlbumById(albumId)
    .then(album => {
      res.render('new_review', { album })
    })
    .catch(err => next(err))
}

const dataForHomePage = (req, res, next) => {
  Album.getAllAlbums()
    .then(albums => {
      Review.getThreeReviews()
        .then(reviews => {
          res.render('index', { albums, reviews })
        })
    })
    .catch(err => next(err))
}

const handleNewReview = (req, res, next) => {
  const { review } = req.body
  const { albumId } = req.params
  const userId = req.user.id

  Review.createNewReview({ review, userId, albumId })
    .then(album => {
      res.redirect(`/albums/${albumId}`)
    })
    .catch(err => next(err))
}

module.exports = {
  dataForHomePage,
  renderNewReview,
  handleNewReview
}