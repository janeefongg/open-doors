import { Router } from 'express';
import {
  validateReview,
  postReview,
  } from '../controllers/reviews.controller';

const router = Router();

router.post('/', validateReview, postReview);

export default router;
