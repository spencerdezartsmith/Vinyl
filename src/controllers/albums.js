const Album = require('../models/albums')
const Review = require('../models/reviews')

const renderHomePage = (req, res, next) => {
  Album.getAllAlbums()
    .then(albums => {
      return Review.getThreeReviews()
        .then(reviews => {
          res.render('index', { albums, reviews })
        })
    })
    .catch(err => next(err))
}

const renderAlbumShow = (req, res, next) => {
  const { albumId } = req.params

  return Album.getOneAlbumById(albumId)
    .then(album => {
      return Review.getReviewsForOneAlbum(albumId)
        .then(reviews => {
          res.render('album', { album, reviews })
        })
    })
    .catch(err => next(err))
}

module.exports = {
  renderHomePage,
  renderAlbumShow
}

