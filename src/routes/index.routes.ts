import { Router } from 'express';
const router = Router();
import { createValidator } from 'express-joi-validation';
const validator = createValidator();

// Importando los controladores para las rutas
import { getAllUsers, postUser, putUser, patchUser, deleteUser } from '../controllers/user.controller';
import { getAllCompanies, postCompany, putCompany, patchCompany, deleteCompany, } from '../controllers/company.controller';
import { getAllOrders, getOrderById, postOrder, putOrder, patchOrder, deleteOrder } from '../controllers/orders.controller';
import { getAllAssignedOrder, postAssignedOrder, putAssignedOrder, patchAssignedOrder, deleteAssignedOrder }
    from '../controllers/assigned_order.controller';
import { image } from '../controllers/image_multer.controller';
import { imageUser } from '../controllers/image_user.controller';

// Importando consultas del repartidor
import { getDeliveryManById, getOrdersOfDeliveryMan, getDeliveryManAvailable, getDeliveriesByDeliveryMan, getDeliveriesByDeliveryManRange, }
    from '../controllers/queries/deliveryman.controller';

//Importando consultas de las ordenes
import { getOrdersCompanySlopes, getOrdersDateDelivery, getOrdersDateDeliveryToday, getDiscriminatedDeliveries, getDeliveriesCompany, getNumOrdersToday }
    from '../controllers/queries/orders.controller'

//Importando consultas de ganancias
import { getTotalEarnings, getTotalEarningsByDate, getTotalEarningsByDateOfDeliveryMan, getTotalEarningsOfDeliveryManToday, utilities, utilitiesRangeDate }
    from '../controllers/queries/earnings.controller'

// Importando los esquemas de Joi para las rutas
import { companySchema, companySchemaPatch } from '../schemas-joi/company.schemajoi';
import { assignedOrderSchemaPatch, assignedOrderSchema, } from '../schemas-joi/assigned_order.schemajoi';
import { ordersSchema, ordersSchemaPatch } from '../schemas-joi/orders.schemajoi';
import { userSchema, userSchemaPatch } from '../schemas-joi/user.schemajoi';

// Importando la validación del token
import { decodeToken } from '../firebase/manage.token';
import { util } from '@google-cloud/storage/build/src/nodejs-common';

// Tabla usuarios
router.get('/allUsers', getAllUsers);
router.post('/postUser',  validator.body(userSchema), postUser);
router.put('/putUser/:id',  validator.body(userSchema), putUser);
router.patch('/patchUser/:id',  validator.body(userSchemaPatch), patchUser);
router.delete('/deleteUser/:id',  deleteUser);

// Tabla empresas
router.get('/allCompanies',  getAllCompanies);
router.post('/postCompany',  validator.body(companySchema), postCompany);
router.put('/putCompany/:id',  validator.body(companySchema), putCompany);
router.patch('/patchCompany/:id',  validator.body(companySchemaPatch), patchCompany);
router.delete('/deleteCompany/:id',  deleteCompany);

// Tabla ordenes
router.get('/allOrders',  getAllOrders);
router.get('/getOrderById/:id', getOrderById);  //NO TOKEN
router.post('/postOrder',  validator.body(ordersSchema), postOrder);
router.put('/putOrder/:id',  validator.body(ordersSchema), putOrder);
router.patch('/patchOrder/:id',  validator.body(ordersSchemaPatch), patchOrder);
router.delete('/deleteOrder/:id',  deleteOrder);

// Tabla de ordenes asignadas
router.get('/allAssignedOrder',  getAllAssignedOrder);
router.post('/postAssignedOrder', validator.body(assignedOrderSchema), postAssignedOrder);
router.put('/putAssignedOrder/:id',  validator.body(assignedOrderSchema), putAssignedOrder);
router.patch('/patchAssignedOrder/:id',  validator.body(assignedOrderSchemaPatch), patchAssignedOrder);
router.delete('/deleteAssignedOrder/:id',  deleteAssignedOrder);

// Consultas repartidor
router.get('/deliveryMan/:id',  getDeliveryManById);                                                                        // Traer la información del repartidor segun id
router.get('/ordersOfDeliveryMan/:id',  getOrdersOfDeliveryMan);                                                            // Traer todos las ordenes segun id del repartidor
router.get('/deliveryManAvailable',  getDeliveryManAvailable)                                                               //Traer todos los repartidores disponiles
router.get('/deliveriesByDeliveryMan/:id',  getDeliveriesByDeliveryMan)                                                     //Traer todas las ordenes del día segun id del repartidor
router.get('/deliveriesByDeliveryManRange/:id/:startDate/:endDate',  getDeliveriesByDeliveryManRange)                       //Traer todas las ordenes del día segun id del repartidor


// Consultas ordenes
router.get('/getOrdersCompanySlopes/:id_company',  getOrdersCompanySlopes);                                         //Pedido pendientes por comercio
router.get('/OrdersDateDelivery',  getOrdersDateDelivery)                                                           //Pedidos pendientes para el siguiente día
router.get('/getOrdersDateDeliveryToday', getOrdersDateDeliveryToday)                                              //Pedidos pendientes para el día de hoy (actual)')
router.get('/getDiscriminatedDeliveries',  getDiscriminatedDeliveries)                                              // Pedidos discriminados por estado
router.get('/getDeliveriesCompany/:id',  getDeliveriesCompany)                                              // Pedidos discriminados por comercio
router.get('/getNumOrdersToday', getNumOrdersToday)


// Consultas ganancias
router.get('/getTotalEarnings',  getTotalEarnings)                                                                  //Obtener las ganancias totales del día
router.get('/getTotalEarnings/date_start/date_end',  getTotalEarningsByDate)                                        //Obtener las ganancias totales en un periodo de tiempo determinado
router.get('/getTotalEarningsByDateOfDeliveryMan/:id_delivery/:date_start/:date_end',  getTotalEarningsByDateOfDeliveryMan) //Obtener las ganancias totales del día segun id del repartidor
router.get('/getTotalEarningsByDateOfDeliveryMan/:id_delivery',  getTotalEarningsOfDeliveryManToday)                //Obtener las ganancias totales del día segun id del repartidor
router.get('/utilities', utilities)
router.get('/utilitiesRangeDate/:date_start/:date_end', utilitiesRangeDate)

// Subir imagen
router.post('/uploadImage',  image);
router.post('/uploadImageUser/:id',  imageUser);                                                                    // Subir imagen de usuario editando base de datos

// Exportando el router
export default router;
