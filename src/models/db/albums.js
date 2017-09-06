const db = require('./config/connection')

const getAllAlbums = () => {
  return db.any('SELECT * FROM albums')
}

const getOneAlbumById = (albumID) => {
  return db.one('SELECT * FROM albums WHERE id = $1', [albumID])
}

module.exports = {
  getAllAlbums,
  getOneAlbumById
}