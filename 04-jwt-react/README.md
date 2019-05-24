# Single Page App Authentication with [JWT](https://jwt.io/) & [React.js](https://reactjs.org/)

As a single page application, this app uses JWT, which will be issued at the correct username/password input, to authenticate users. The front-end application relys on React.js and [React Router](https://github.com/ReactTraining/react-router) library.

## Getting started

Run the application as follows:

```bash
# On one window
$ mongod
# or
$ mongod --config /usr/local/etc/mongod.conf

# On another
$ yarn
$ yarn start

# On yet another
$ node server.js 
```

> Make sure you have `passport` MongoDB database. If you haven’t, please follow the [Getting started > Database](https://github.com/zacfukuda/passport#database).

## Resources

- https://jwt.io/
- https://github.com/auth0/node-jsonwebtoken
- https://www.npmjs.com/package/passport-jwt
- https://reactjs.org/