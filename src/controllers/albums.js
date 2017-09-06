const db = require('../models/albums')

const getAllAlbums = (req, res, next) => {
  db.getAllAlbums()
    .then(albums => {
      res.render('index', { albums, user: req.user })
    })
    .catch(err => next(err))
}


const getOneAlbumById = (req, res, next) => {
  const { albumID } = req.params

  db.getOneAlbumById(albumID)
    .then(album => {
      res.send(album)
    })
    .catch(err => next(err))
}

module.exports = {
  getAllAlbums,
  getOneAlbumById
}
