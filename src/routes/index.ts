import { Router } from 'express';
const router = Router();

import { getAllUsuarios, postUsuario, patchUsuario, deleteUsuario } from '../controllers/index.controller';


router.get('/allUsers', getAllUsuarios);
router.post('/postUser', postUsuario);
router.patch('/patchUser/:email', patchUsuario);
router.delete('/deleteUser/:email', deleteUsuario);


export default router;