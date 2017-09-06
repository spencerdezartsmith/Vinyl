require('../services/passport')
const router = require('express').Router()
const passport = require('passport')

const AuthController = require('../controllers/authentication')
const AlbumsController = require('../controllers/albums')
const ReviewsController = require('../controllers/reviews')
const UsersController = require('../controllers/users')

const { isLoggedIn } = require('./middlewares')

const requireSignin = passport.authenticate('local', { failureRedirect: '/signin' , failureFlash: 'Invalid Credentials'})

router.get('/signup', AuthController.renderSignup)
router.post('/signup', AuthController.handleSignup)
router.get('/signin', AuthController.renderSignin)
router.post('/signin', requireSignin, AuthController.handleSignin)
router.get('/logout', AuthController.handleLogout)

router.get('/', AlbumsController.renderHomePage)
router.use(isLoggedIn)

router.get('/albums/:albumId', AlbumsController.renderAlbumShow)

router.get('/users/:userId', UsersController.renderUserProfile)

router.get('/albums/:albumId/reviews/new', ReviewsController.renderNewReview)
router.post('/albums/:albumId/reviews/new', ReviewsController.handleNewReview)
router.delete('/reviews/:reviewId', ReviewsController.handleDeleteReview)

module.exports = router