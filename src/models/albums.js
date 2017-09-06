const db = require('./db/albums')


const getAllAlbums = () => {
  return db.getAllAlbums()
}

const getOneAlbumById = (albumID) => {
  return db.getOneAlbumById(albumID)
}

module.exports = {
  getAllAlbums,
  getOneAlbumById
}
