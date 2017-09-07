require('../services/passport')
const router = require('express').Router()
const passport = require('passport')

const AuthController = require('../controllers/authentication')
const AlbumsController = require('../controllers/albums')
const ReviewsController = require('../controllers/reviews')
const UsersController = require('../controllers/users')

const { isLoggedIn } = require('./middlewares')

const requireSignin = passport.authenticate('local', { failureRedirect: '/signin' , failureFlash: 'Invalid Credentials'})

// Authentication Routes
router.get('/sign-up', AuthController.renderSignup)
router.post('/sign-up', AuthController.handleSignup)
router.get('/sign-in', AuthController.renderSignin)
router.post('/sign-in', requireSignin, AuthController.handleSignin)
router.get('/logout', AuthController.handleLogout)

// Unprotected Home Route
router.get('/', AlbumsController.renderHomePage)

// Authentication middleware
router.use(isLoggedIn)

// Protected Routes
router.get('/albums/:albumId', AlbumsController.renderAlbumShow)

router.get('/users/:userId', UsersController.renderUserProfile)

router.get('/albums/:albumId/reviews/new', ReviewsController.renderNewReview)
router.post('/albums/:albumId/reviews/new', ReviewsController.handleNewReview)
router.delete('/reviews/:reviewId', ReviewsController.handleDeleteReview)

module.exports = router