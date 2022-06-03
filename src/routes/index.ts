import { Router } from 'express';
const router = Router();

import { getAllUsers, postUser, putUsuario, patchUsuario, deleteUsuario } from '../controllers/index.controller';

// Tabla usuarios
router.get('/allUsers', getAllUsers);
router.post('/postUser', postUser);
router.put('/putUser/:id', putUsuario);
router.patch('/patchUser/:id', patchUsuario);
router.delete('/deleteUser/:id', deleteUsuario);


export default router;