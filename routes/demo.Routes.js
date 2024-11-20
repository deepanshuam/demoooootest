import { Router } from 'express';
import { addOrUpdateCompany, getCompanyByName } from '../controller/demo.Controller.js';

const router = Router();


router.post('/company', addOrUpdateCompany);


router.get('/company/:name', getCompanyByName);

export default router;
