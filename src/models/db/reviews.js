const db = require('./config/connection')

const getThreeReviews = () => {
  return db.any(`
    SELECT reviews.id, reviews.review, reviews.review_date, users.name AS reviewer, albums.title AS album_title, albums.id AS album_id
    FROM reviews
    INNER JOIN users ON reviews.user_id = users.id
    INNER JOIN albums ON reviews.album_id = albums.id
    ORDER BY review_date
    DESC LIMIT 3
  `)
}

const getReviewsForOneAlbum = (albumId) => {
  return db.any(`
    SELECT reviews.review, reviews.id, reviews.review_date, users.name AS reviewer
    FROM reviews INNER JOIN users ON reviews.user_id = users.id
    INNER JOIN albums ON reviews.album_id = albums.id
    WHERE albums.id = $1
    ORDER BY reviews.review_date`,
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

module.exports = {
  getThreeReviews,
  getReviewsForOneAlbum,
  createNewReview
}
