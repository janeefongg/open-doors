import express from 'express';
// import passport from 'passport';
import Authentication from '../controllers/auth.controller';
// import '../services/passport';

const router = express.Router();
// const requireAuth = passport.authenticate('jwt', { session: false });
// const requireSignin = passport.authenticate('local', { session: false });

router.get('/', (req, res) => {
  res.send({ test: true });
});

router.post('/signin', Authentication.signin);
router.post('/signup', Authentication.signup);

export default router;
