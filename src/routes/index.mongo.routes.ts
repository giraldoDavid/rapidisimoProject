import { Router } from "express";
const routerMap = Router();

// Importando los controladores para las rutas
import {
    getAllMap
  } from "../controllers/map.controller";

import {
    postMap
} from "../controllers/map.controller";

import {
    putMap
} from "../controllers/map.controller";

import {
    deleteMap
} from "../controllers/map.controller";

//Coleccion Map
routerMap.get("/allMap", getAllMap);
routerMap.post("/postMap", postMap);
routerMap.put("/putMap/:id", putMap);
routerMap.delete("/deleteMap/:id", deleteMap);

export default routerMap;