import jwt from 'jwt-simple';
import User from '../models/user.model';
import secret from '../config';

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  const userId = user.id.toString();
  return jwt.encode({ sub: userId, iat: timestamp }, secret.secret);
}

exports.signin = (req, res) => {
  console.log('two');
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  if (!email || !password || !username) {
    return res.status(422).send({ error: 'You must provide email and password' });
  }

  try {
    const userResponse = await User.findAll({
      where: {
        email,
      },
    });

    if (userResponse.length > 0) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = {
      username,
      email,
      password,
    };

    const createUser = await User.create(user);

    if (createUser) {
      const userObj = JSON.stringify(createUser);
      res.json({ token: tokenForUser(JSON.parse(userObj)) });
    }
  } catch (err) {
    next(err);
  }
};
