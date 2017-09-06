const router = require('express').Router()
const AlbumsController = require('../controllers/albums')

router.get('/', AlbumsController.getAllAlbums)

router.get('/albums/:albumID', AlbumsController.getOneAlbumById)

module.exports = router