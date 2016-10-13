import { Router } from 'express';
import {
  fetchCompanies,
  postCompany,
  } from '../controllers/companies.controller';

const router = Router();

router.get('/', fetchCompanies);
router.post('/', postCompany);

export default router;
