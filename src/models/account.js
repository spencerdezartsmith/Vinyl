const User = require('./db/account')

const findByEmail = (email) => {
  return User.findByEmail(email)
}

const findById = (id) => {
  return User.findById(id)
}

const createNewUser = (data) => {
  return User.createNewUser(data)
}

module.exports = {
  findByEmail,
  findById,
  createNewUser
}