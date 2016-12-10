import jwt from 'jsonwebtoken';
import authCredentials from '../config';

const auth = {};

auth.Decode = (token) => {
  return jwt.decode(token);
};

auth.generateToken = (user) => {
  console.log('user inside generateToken', authCredentials.secret);
  return jwt.sign({ id: user.id, username: user.username },
    authCredentials.secret,
    { expiresIn: 60000 });
};

auth.ifAuthorized = (req, res, next) => {
  function unauthorized(response) {
    response.sendStatus(401);
  }

  const token = req.body.token;

  if (token) {
    jwt.verify(token, authCredentials.secret, (err) => {
      if (err) {
        console.error('err');
        unauthorized(res);
      } else {
        next();
      }
    });
  } else {
    unauthorized(res);
  }
};

export default auth;
