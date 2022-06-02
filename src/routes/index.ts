import { Router } from 'express';
const router = Router();

import { getAll } from '../controllers/index.controller';


router.get('/users', getAll);

export default router;