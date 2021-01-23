const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const User = require("./models/User")
const { PASSPORT_SECRET_KEY } = require("../utils/config")

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PASSPORT_SECRET_KEY,
  // issuer: "accounts.examplesoft.com",
  // audience: "yoursite.net",
}

module.exports = function (passport) {
  passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
      User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
          return done(err, false)
        }
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
          // or you could create a new account
        }
      })
    })
  )
}
