import passport from 'passport';
import User from '../models/user.model';
import config from '../config';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // verify this username and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false
  console.log('User model', User);

  User.findAll({
    where: {
      email,
    },
  })
    .then((user) => {
      console.log('user instance', user[0].password, password);
      if (!user) {
        return done(null, false);
      }

      user[0].checkPassword(password, user[0].password)
        .then((isMatch) => {
          if (!isMatch) { return done(null, false); }
          console.log('inside checkpassword', JSON.stringify(user));
          const userObj = JSON.stringify(user);
          console.log('userObj at 0', JSON.parse(userObj)[0]);
          return done(null, JSON.parse(userObj)[0]);
        })
        .catch(err => done(err));
      // user[0].checkPassword(password, user[0].password, (err, isMatch) => {
      //   console.log('inside checkpassword', err, isMatch);
      //   if (err) {
      //     return done(err);
      //   }
      //
      //   if (!isMatch) {
      //     return done(null, false);
      //   }
      //   console.log('password matched!');
      //   return done(null, user);
      // });
    })
    .catch((err) => {
      done(err);
    });
});

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey   : config.secret,
};

// create JWT strategy
// payload is the decoded jwt token (in our case, sub and iat//userid and timestamp)
// done is a callback depending on whether or not successful authenticate
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // see if the userid in the payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done without a user object

  User.findAll({
    where: {
      id: payload.sub,
    },
  })
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err, false)
    );
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
