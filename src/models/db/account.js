const bcrypt = require('bcrypt-nodejs')
const db = require('./config/connection')

const findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email = $1', [email])
}

const findById = (id) => {
  return db.oneOrNone('SELECT * FROM users WHERE id = $1', [id])
}

const createNewUser = (data) => {
  const sql = 'INSERT INTO users(name, email, password) values($1, $2, $3) RETURNING id'
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data.password, salt);
  const variables = [
    data.name,
    data.email,
    hash
  ]
  return db.one(sql, variables)
}

module.exports = {
  findByEmail,
  findById,
  createNewUser
}