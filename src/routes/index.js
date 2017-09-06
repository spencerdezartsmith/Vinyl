require('../services/passport')
const router = require('express').Router()
const passport = require('passport')
const AlbumsController = require('../controllers/albums')
const AuthController = require('../controllers/authentication')

const requireSignin = passport.authenticate('local')

router.get('/', AlbumsController.getAllAlbums)

router.get('/signup', AuthController.renderSignup)
router.post('/signup', AuthController.userSignup)

router.get('/signin', AuthController.renderSignin)
router.post('/signin', requireSignin, AuthController.userSignin)

router.get('/logout', AuthController.userLogout)

router.get('/albums/:albumID', AlbumsController.getOneAlbumById)

module.exports = router