const promise = require('bluebird')
const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)

const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`
const db = pgp(connectionString)

module.exports = db


