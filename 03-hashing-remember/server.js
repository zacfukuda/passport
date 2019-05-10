/**
 * @link http://www.passportjs.org/docs/
 * @link http://www.passportjs.org/packages/passport-local/
 * @link https://github.com/jaredhanson/passport-local/
 * @link https://github.com/passport/express-4.x-local-example
 * @link https://github.com/expressjs/express/tree/master/examples/auth
 * @link http://expressjs.com/en/starter/hello-world.html
 * @link https://www.npmjs.com/package/connect-mongo
 */

// Common modules
const path = require('path')

// MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/passport', {useNewUrlParser: true, useCreateIndex: true})

// Initializing Express
const express = require('express'),
			app = express(),
			port = 3000

// Middlewares
const cookieParser = require('cookie-parser'),
			session = require('express-session'),
			bodyParser = require('body-parser'),
			MongoStore = require('connect-mongo')(session),
			passportControl = require('./lib/passport-control')

app.use(cookieParser())
app.use(session({
	secret: 'cats',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passportControl.initialize())
app.use(passportControl.session())

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Routers
app.use('/', require('./routes'))

// Run server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))