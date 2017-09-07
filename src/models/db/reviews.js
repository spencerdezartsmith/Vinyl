const db = require('./config/connection')

const getThreeReviews = () => {
  return db.any(`
    SELECT reviews.id, reviews.review, reviews.review_date, users.name AS reviewer, albums.title AS album_title, albums.id AS album_id
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    JOIN albums ON reviews.album_id = albums.id
    ORDER BY review_date
    DESC LIMIT 3
  `)
}

const getReviewsForOneAlbum = (albumId) => {
  return db.any(`
    SELECT reviews.review, reviews.id, reviews.review_date, users.name AS reviewer, reviews.user_id AS reviewer_id
    FROM reviews INNER JOIN users ON reviews.user_id = users.id
    JOIN albums ON reviews.album_id = albums.id
    WHERE albums.id = $1
    ORDER BY reviews.review_date DESC`,
    [albumId]
  )
}

const createNewReview = (data) => {
  const { review, userId, albumId } = data

  return db.one(`
    INSERT INTO reviews (review, user_id, album_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [review, userId, albumId])
}

const getReviewsForOneUser = (userId) => {
  return db.any(`
    SELECT reviews.id, reviews.review_date, reviews.review, albums.title AS album_title, albums.id AS album_id
    FROM reviews
    JOIN users ON reviews.user_id = users.id
    JOIN albums ON reviews.album_id = albums.id
    WHERE users.id = $1
    ORDER BY reviews.review_date DESC
  `, [userId])
}

const deleteReview = (reviewId) => {
  return db.none('DELETE FROM reviews WHERE id = $1', [reviewId])
}

module.exports = {
  getThreeReviews,
  getReviewsForOneAlbum,
  createNewReview,
  getReviewsForOneUser,
  deleteReview
}
