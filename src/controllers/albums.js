const Album = require('../models/albums')
const Review = require('../models/reviews')

const dataForAlbumShow = (req, res, next) => {
  const { albumID } = req.params

  return Album.getOneAlbumById(albumID)
    .then(album => {
      return Review.getReviewsForOneAlbum(albumID)
        .then(reviews => {
          res.render('album', { album, reviews })
        })
    })
    .catch(err => next(err))
}

module.exports = {
  dataForAlbumShow
}

