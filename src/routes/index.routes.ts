import { Router } from "express";
const router = Router();
import { createValidator } from "express-joi-validation";
const validator = createValidator();

// Importando los controladores para las rutas
import { getAllUsers, postUser, putUser, patchUser, deleteUser } from "../controllers/user.controller";
import { getAllCompanies, postCompany, putCompany, patchCompany, deleteCompany,} from "../controllers/company.controller";
import { getAllOrders, postOrder, putOrder, patchOrder, deleteOrder } from "../controllers/orders.controller";
import { getAllAssignedOrder, postAssignedOrder, putAssignedOrder, patchAssignedOrder, deleteAssignedOrder } 
    from "../controllers/assigned_order.controller";

// Importando los esquemas para las rutas
import { companySchema, companySchemaPatch } from "../models/company.models";
import { assignedOrderSchemaPatch, assignedOrderSchema, } from "../models/assigned_order.models";
import { ordersSchema, ordersSchemaPatch } from "../models/orders.models";
import { userSchema, userSchemaPatch } from "../models/user.models";

// Tabla usuarios
router.get("/allUsers", getAllUsers);
router.post("/postUser", validator.body(userSchema), postUser);
router.put("/putUser/:id", validator.body(userSchema), putUser);
router.patch("/patchUser/:id", validator.body(userSchemaPatch), patchUser);
router.delete("/deleteUser/:id", deleteUser);

// Tabla empresas
router.get("/allCompanies", getAllCompanies);
router.post("/postCompany", validator.body(companySchema), postCompany);
router.put("/putCompany/:id", validator.body(companySchema), putCompany);
router.patch("/patchCompany/:id", validator.body(companySchemaPatch), patchCompany);
router.delete("/deleteCompany/:id", deleteCompany);

// Tabla ordenes
router.get("/allOrders", getAllOrders);
router.post("/postOrder", validator.body(ordersSchema), postOrder);
router.put("/putOrder/:id", validator.body(ordersSchema), putOrder);
router.patch("/patchOrder/:id", validator.body(ordersSchemaPatch), patchOrder);
router.delete("/deleteOrder/:id", deleteOrder);

// Tabla de ordenes asignadas
router.get("/allAssignedOrder", getAllAssignedOrder);
router.post("/postAssignedOrder", validator.body(assignedOrderSchema), postAssignedOrder );
router.put("/putAssignedOrder/:id", validator.body(assignedOrderSchema), putAssignedOrder );
router.patch("/patchAssignedOrder/:id", validator.body(assignedOrderSchemaPatch), patchAssignedOrder );
router.delete("/deleteAssignedOrder/:id", deleteAssignedOrder);

export default router;
