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

// Importando las rutas de las imagenes
import { image } from '../controllers/images/image_multer.controller';
import { imageUser } from '../controllers/images/image_user.controller';
import { imageOrder } from '../controllers/images/image_order.controller';

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

// Importando la validaci??n del token
import { decodeToken } from '../firebase/manage.token';

// Tabla usuarios
router.get('/allUsers', decodeToken, getAllUsers);
router.post('/postUser', decodeToken, validator.body(userSchema), postUser);
router.put('/putUser/:id', decodeToken, validator.body(userSchema), putUser);
router.patch('/patchUser/:id', decodeToken, validator.body(userSchemaPatch), patchUser);
router.delete('/deleteUser/:id', decodeToken, deleteUser);

// Tabla empresas
router.get('/allCompanies', decodeToken, getAllCompanies);
router.post('/postCompany', decodeToken, validator.body(companySchema), postCompany);
router.put('/putCompany/:id', decodeToken, validator.body(companySchema), putCompany);
router.patch('/patchCompany/:id', decodeToken, validator.body(companySchemaPatch), patchCompany);
router.delete('/deleteCompany/:id', decodeToken, deleteCompany);

// Tabla ordenes
router.get('/allOrders', decodeToken, getAllOrders);
router.get('/getOrderById/:id', getOrderById);  //NO TOKEN
router.post('/postOrder', decodeToken, validator.body(ordersSchema), postOrder);
router.put('/putOrder/:id', decodeToken, validator.body(ordersSchema), putOrder);
router.patch('/patchOrder/:id', decodeToken, validator.body(ordersSchemaPatch), patchOrder);
router.delete('/deleteOrder/:id', decodeToken, deleteOrder);

// Tabla de ordenes asignadas
router.get('/allAssignedOrder', decodeToken, getAllAssignedOrder);
router.post('/postAssignedOrder', decodeToken, validator.body(assignedOrderSchema), postAssignedOrder);
router.put('/putAssignedOrder/:id', decodeToken, validator.body(assignedOrderSchema), putAssignedOrder);
router.patch('/patchAssignedOrder/:id', decodeToken, validator.body(assignedOrderSchemaPatch), patchAssignedOrder);
router.delete('/deleteAssignedOrder/:id', decodeToken, deleteAssignedOrder);

// Consultas repartidor
router.get('/deliveryMan/:id', decodeToken, getDeliveryManById);                                                                        // Traer la informaci??n del repartidor segun id
router.get('/ordersOfDeliveryMan/:id', decodeToken, getOrdersOfDeliveryMan);                                                            // Traer todos las ordenes segun id del repartidor
router.get('/deliveryManAvailable', decodeToken, getDeliveryManAvailable)                                                               //Traer todos los repartidores disponiles
router.get('/deliveriesByDeliveryMan/:id', decodeToken, getDeliveriesByDeliveryMan)                                                     //Traer todas las ordenes del d??a segun id del repartidor
router.get('/deliveriesByDeliveryManRange/:id/:startDate/:endDate', decodeToken, getDeliveriesByDeliveryManRange)                       //Traer todas las ordenes del d??a segun id del repartidor


// Consultas ordenes
router.get('/getOrdersCompanySlopes/:id_company', decodeToken, getOrdersCompanySlopes);                                         //Pedido pendientes por comercio
router.get('/OrdersDateDelivery', decodeToken, getOrdersDateDelivery)                                                           //Pedidos pendientes para el siguiente d??a
router.get('/getOrdersDateDeliveryToday', decodeToken, getOrdersDateDeliveryToday)                                              //Pedidos pendientes para el d??a de hoy (actual)')
router.get('/getDiscriminatedDeliveries', decodeToken, getDiscriminatedDeliveries)                                              // Pedidos discriminados por estado
router.get('/getDeliveriesCompany/:id_company', decodeToken, getDeliveriesCompany)                                              // Pedidos discriminados por comercio
router.get('/getNumOrdersToday', decodeToken, getNumOrdersToday)                                                                             // Numero de pedidos entregados hoy


// Consultas ganancias
router.get('/getTotalEarnings', decodeToken, getTotalEarnings)                                                                  //Obtener las ganancias totales del d??a
router.get('/getTotalEarnings/date_start/date_end', getTotalEarningsByDate)                                        //Obtener las ganancias totales en un periodo de tiempo determinado
router.get('/getTotalEarningsByDateOfDeliveryMan/:id_delivery/:date_start/:date_end', decodeToken, getTotalEarningsByDateOfDeliveryMan) //Obtener las ganancias totales del d??a segun id del repartidor
router.get('/getTotalEarningsByDateOfDeliveryMan/:id_delivery', decodeToken, getTotalEarningsOfDeliveryManToday)                //Obtener las ganancias totales del d??a segun id del repartidor
router.get('/utilities', decodeToken, utilities)                                                                                             //Obtener la utilidades acumuladas en un d??a
router.get('/utilitiesRangeDate/:date_start/:date_end', decodeToken, utilitiesRangeDate)                                                     //Obtener las utilidades acumuladas por rango de fecha

// Subir imagen
router.post('/uploadImage', decodeToken, image);
router.post('/uploadImageUser/:id', decodeToken, imageUser);                                                                    // Subir imagen de usuario editando base de datos
router.post('/uploadImageOrder/:id', decodeToken, imageOrder);                                                                  // Subir imagen de orden editando base de datos

// Exportando el router
export default router;
