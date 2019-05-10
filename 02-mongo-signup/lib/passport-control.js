const passport = require('passport'),
			Strategy = require('passport-local').Strategy,
			User = require('../db/User')

// Strategy
passport.use(new Strategy( (username, password, done) => {
	User.findOne({username: username}, (err, user) => {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    if (user.password != password) { return done(null, false) }
    return done(null, user)
  })
}))

// Session
passport.serializeUser( (user, done) => done(null, user.id) )

passport.deserializeUser( (id, done) => {
  User.findById(id, (err, user) => {
    if (err) { return done(err) }
    done(null, user)
  })
})

module.exports = passport