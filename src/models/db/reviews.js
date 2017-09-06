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

module.exports = {
  getThreeReviews
}
