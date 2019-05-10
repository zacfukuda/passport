# Authentication with [passport.js](http://www.passportjs.org/)

This repository contains the codes of sample appliations which deal with authentication using [passport.js](http://www.passportjs.org/), authentication middleware for Node.js.

The codes are slit into four parts:

- [01-basic](https://github.com/zacfukuda/passport/tree/master/01-basic)
- [02-mongo-signup](https://github.com/zacfukuda/passport/tree/master/02-mongo-signup)
- [03-hashing-remember](https://github.com/zacfukuda/passport/tree/master/03-hashing-remember)
- [04-react](https://github.com/zacfukuda/passport/tree/master/04-react)

For `01-basic` to`03-hashing-remember`, the applications use [passport-local](https://github.com/jaredhanson/passport-local) module, which authenticates users via username and password. For 04, in order to show how to authenticate with passport.js in the front-end driven single page application, the app uses [passport-jwt](https://www.npmjs.com/package/passport-jwt). [JSON Web Token](https://jwt.io/) is a industry standard RFC 7519 method, that is intended to be used to secure RESTful endpoints.

## Prerequisites

In order to run the applications, you must have followings (inside the round brackets are the versions of software tested):

- Node.js (10.15.0)
- MongoDB Community Server (4.0.9)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- (Yarn)

> If you haven’t installed Yarn on your computer, please replace `yarn` with corresponding `npm` or `npx` commands.

## Getting started

From `02-momngo-singup` upon, the applications use MongoDB to store user information. Before running the apps, please make sure you are running MongoDB.

```bash
$ mongod

# You might need to specify the config file
$ mongod --config /usr/local/etc/mongod.conf
```

To run the applications, please either clone the repository with Git or download the zip file.

### Database

The applications assume that you use MongoDB database named `passport`. Database name is declared in the `server.js` of each directory—except 01-basic since it doesn’t use DB, and if you don’t want to—or cannnot—use `passport` as a database, please update the declaration on your own.

Please make a database called `passport` on the Mongo shell.

``` bash
> use passport;
> db.foo.insert({foo: 'bar'});
> exit;
```

> Simply running `use passport` don’t create a new database. Hence, you need to insert a dummy document to it.

### Application

The below is how to run the `01-basic` application using Git and Yarn.

``` bash
$ git clone 
$ cd passport/01-bacis
$ yarn
$ yarn start
$ node server.js

# If you have nodemon globally installed...
$ nodemon server.js
```

Besides `04-react app`, the server runs at [localhost:3000](http://localhost:3000). For `04-react app`, the React.js application will be run at `port:3000` and API server at `port:4000`.

## Note

The applications have no regard on UI/UX, even nelecting the error handling such as when one user inputs wrong password. Error handling is beyond the scope of these samples and leaving it toe the reader of this repository coming up their idea on their own.