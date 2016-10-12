import { Router } from 'express';
import { fetchCompanies } from '../controllers/companies.controller';

const router = Router();

router.get('/', fetchCompanies);

export default router;
