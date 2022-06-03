import { Router } from 'express';
const router = Router();

import { getAllUsers, postUser, putUsuario, patchUsuario, deleteUsuario } from '../controllers/user.controller';
import {getAllCompanies, postCompany, putCompany, patchCompany, deleteCompany} from '../controllers/company.controller'

// Tabla usuarios
router.get('/allUsers', getAllUsers);
router.post('/postUser', postUser);
router.put('/putUser/:id', putUsuario);
router.patch('/patchUser/:id', patchUsuario);
router.delete('/deleteUser/:id', deleteUsuario);

// Tabla empresas
router.get('/allCompanies', getAllCompanies);
router.post('/postCompany', postCompany);
router.put('/putCompany/:id', putCompany);
router.patch('/patchCompany/:id', patchCompany);
router.delete('/deleteCompany/:id', deleteCompany);



export default router;