import express from 'express';
import passport from 'passport';
import Authentication from '../controllers/auth';
import passportServer from '../services/passport';

console.log(passportServer);
const router = express.Router();
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.get('/', requireAuth, (req, res) => {
  res.send({ test: true });
});

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);

export default router;
