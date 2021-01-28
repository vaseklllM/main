const jwt = require("jsonwebtoken")
const { PASSPORT_SECRET_KEY } = require("../../utils/config")

function getToken(candidate) {
  const payload = { id: candidate._id, email: candidate.email }
  const options = { expiresIn: 86400 }
  return "Bearer " + jwt.sign(payload, PASSPORT_SECRET_KEY, options)
}

module.exports = getToken
