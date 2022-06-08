import { Router } from 'express';
const router = Router();
import { createValidator } from 'express-joi-validation';
const validator = createValidator();

// Importando los controladores para las rutas
import { getAllUsers, postUser, putUser, patchUser, deleteUser } from '../controllers/user.controller';
import { getAllCompanies, postCompany, putCompany, patchCompany, deleteCompany,} from '../controllers/company.controller';
import { getAllOrders, postOrder, putOrder, patchOrder, deleteOrder } from '../controllers/orders.controller';
import { getAllAssignedOrder, postAssignedOrder, putAssignedOrder, patchAssignedOrder, deleteAssignedOrder } from '../controllers/assigned_order.controller';
import { image } from '../controllers/image_multer.controllers';

// Importando consultas del repartidor
import { getDeliveryManById, getOrdersOfDeliveryMan, getDeliveryManAvailable } from "../controllers/queries/deliveryman.controller";

// Importando los esquemas para las rutas
import { companySchema, companySchemaPatch } from '../schemas-joi/company.schemajoi';
import { assignedOrderSchemaPatch, assignedOrderSchema, } from '../schemas-joi/assigned_order.schemajoi';
import { ordersSchema, ordersSchemaPatch } from '../schemas-joi/orders.schemajoi';
import { userSchema, userSchemaPatch } from '../schemas-joi/user.schemajoi';

// Tabla usuarios
router.get('/allUsers', getAllUsers);
router.post('/postUser', validator.body(userSchema), postUser);
router.put('/putUser/:id', validator.body(userSchema), putUser);
router.patch('/patchUser/:id', validator.body(userSchemaPatch), patchUser);
router.delete('/deleteUser/:id', deleteUser);

// Tabla empresas
router.get('/allCompanies', getAllCompanies);
router.post('/postCompany', validator.body(companySchema), postCompany);
router.put('/putCompany/:id', validator.body(companySchema), putCompany);
router.patch('/patchCompany/:id', validator.body(companySchemaPatch), patchCompany);
router.delete('/deleteCompany/:id', deleteCompany);

// Tabla ordenes
router.get('/allOrders', getAllOrders);
router.post('/postOrder', validator.body(ordersSchema), postOrder);
router.put('/putOrder/:id', validator.body(ordersSchema), putOrder);
router.patch('/patchOrder/:id', validator.body(ordersSchemaPatch), patchOrder);
router.delete('/deleteOrder/:id', deleteOrder);

// Tabla de ordenes asignadas
router.get('/allAssignedOrder', getAllAssignedOrder);
router.post('/postAssignedOrder', validator.body(assignedOrderSchema), postAssignedOrder );
router.put('/putAssignedOrder/:id', validator.body(assignedOrderSchema), putAssignedOrder );
router.patch('/patchAssignedOrder/:id', validator.body(assignedOrderSchemaPatch), patchAssignedOrder );
router.delete('/deleteAssignedOrder/:id', deleteAssignedOrder);

// Consultas
router.get("/deliveryMan/:id", getDeliveryManById);                 // Traer la información del repartidor segun id
router.get("/ordersOfDeliveryMan/:id", getOrdersOfDeliveryMan);     // Traer todos las ordenes segun id del repartidor
router.get("/deliveryManAvailable", getDeliveryManAvailable)    //Traer todos los repartidores disponiles

// Subir imagen
router.post('/uploadImage', image);

// Exportando el router
export default router;
