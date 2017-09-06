const Album = require('./db/albums')

const getAllAlbums = () => {
  return Album.getAllAlbums()
}

const getOneAlbumById = (albumID) => {
  return Album.getOneAlbumById(albumID)
}

module.exports = {
  getAllAlbums,
  getOneAlbumById
}
