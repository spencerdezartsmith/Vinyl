require('../services/passport')
const router = require('express').Router()
const passport = require('passport')
const AlbumsController = require('../controllers/albums')
const AuthController = require('../controllers/accounts')
const ReviewsController = require('../controllers/reviews')

const requireSignin = passport.authenticate('local', { failureRedirect: '/signin' , failureFlash: 'Invalid Credentials'})

router.get('/', ReviewsController.dataForHomePage)

router.get('/signup', AuthController.renderSignup)
router.post('/signup', AuthController.userSignup)

router.get('/signin', AuthController.renderSignin)
router.post('/signin', requireSignin, AuthController.userSignin)

router.get('/logout', AuthController.userLogout)

router.get('/users/:userId', AuthController.renderProfile)

router.get('/albums/:albumId/reviews/new', ReviewsController.renderNewReview)

router.post('/albums/:albumId/reviews/new', ReviewsController.handleNewReview)

router.delete('/reviews/:reviewId', ReviewsController.handleDeleteReview)

router.get('/albums/:albumID', AlbumsController.dataForAlbumShow)

module.exports = router