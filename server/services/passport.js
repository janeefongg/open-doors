import passport from 'passport';
import User from '../models/user.model';
import config from '../config';

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');
// create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  // verify this username and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false

  try {
    const user = (await User.findAll({
      where: {
        email,
      },
    }))[0];
    if (!user || !await user.checkPassword(password, user.password)) {
      done(null, false);
    }
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

// setup options for jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey   : config.secret,
};

// create JWT strategy
// payload is the decoded jwt token (in our case, sub and iat//userid and timestamp)
// done is a callback depending on whether or not successful authenticate
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  // see if the userid in the payload exists in our database
  // if it does, call 'done' with that other
  // otherwise, call done without a user object
  try {
    const user = await User.findAll({
      where: {
        id: payload.sub,
      },
    });
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (err) {
    done(err, false);
  }
});

// tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
