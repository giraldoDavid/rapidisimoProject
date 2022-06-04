import { Router } from 'express';
const router = Router();

import { getAllUsers, postUser, putUser, patchUser, deleteUser } from '../controllers/user.controller';
import { getAllCompanies, postCompany, putCompany, patchCompany, deleteCompany } from '../controllers/company.controller'
import { getAllOrders, postOrder, putOrder, patchOrder, deleteOrder } from '../controllers/orders.controller';
import { getAllAssignedOrder, postAssignedOrder, putAssignedOrder, patchAssignedOrder, deleteAssignedOrder } from '../controllers/assigned_order.controller';


// Tabla usuarios
router.get('/allUsers', getAllUsers);
router.post('/postUser', postUser);
router.put('/putUser/:id', putUser);
router.patch('/patchUser/:id', patchUser);
router.delete('/deleteUser/:id', deleteUser);

// Tabla empresas
router.get('/allCompanies', getAllCompanies);
router.post('/postCompany', postCompany);
router.put('/putCompany/:id', putCompany);
router.patch('/patchCompany/:id', patchCompany);
router.delete('/deleteCompany/:id', deleteCompany);

// Tabla ordenes
router.get('/allOrders', getAllOrders);
router.post('/postOrder', postOrder);
router.put('/putOrder/:id', putOrder);
router.patch('/patchOrder/:id', patchOrder);
router.delete('/deleteOrder/:id', deleteOrder);

// Tabla de ordenes asignadas
router.get('/allAssignedOrder', getAllAssignedOrder);
router.post('/postAssignedOrder', postAssignedOrder);
router.put('/putAssignedOrder/:id', putAssignedOrder);
router.patch('/patchAssignedOrder/:id', patchAssignedOrder);
router.delete('/deleteAssignedOrder/:id', deleteAssignedOrder);

export default router;