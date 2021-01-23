const SERVER_PORT = "3001"
const SERVER_URL = `http://localhost:${SERVER_PORT}/`
const DB_URL = "mongodb://localhost:27017/main"
const FRONTEND_URL = "http://localhost:3000"
const PASSPORT_SECRET_KEY = 'mainPassport'

module.exports = { SERVER_URL, SERVER_PORT, DB_URL, FRONTEND_URL, PASSPORT_SECRET_KEY }
