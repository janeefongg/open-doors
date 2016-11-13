import { Router } from 'express';
import {
  postReview,
  } from '../controllers/reviews.controller';

const router = Router();

router.post('/', postReview);

export default router;
