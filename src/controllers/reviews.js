const Review = require('../models/reviews')
const Album = require('../models/albums')

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

module.exports = {
  dataForHomePage
}