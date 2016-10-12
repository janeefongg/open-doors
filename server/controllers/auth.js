import jwt from 'jwt-simple';
import User from '../models/user.model';
import secret from '../config';

function tokenForUser(user) {
  console.log('user object', user);
  const timestamp = new Date().getTime();
  const userId = user.id.toString();
  return jwt.encode({ sub: userId, iat: timestamp }, secret.secret);
}

exports.signin = (req, res) => {
  // User has already has their email and password authenticated
  // we just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  if (!email || !password || !username) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  // see if a user with a given email exists
  return User.findAll({
    where: {
      email,
    },
  }).then((existingUser) => {
    console.log('existing user', existingUser);
    // if a user with email does exist, return error
    if (existingUser.length > 0) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // is a user with email does NOT exist, create and save user record
    const user = {
      username,
      email,
      password,
    };

    User.create(user)
      .then((response) => {
        console.log('this is response after creating', JSON.stringify(response));
        const userObj = JSON.stringify(response);
        res.json({ token: tokenForUser(JSON.parse(userObj)) });
      })
      .catch(err => next(err)
      );
  }).catch(err => next(err)
  );
};
