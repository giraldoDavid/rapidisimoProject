import { Router } from "express";
const routerMap = Router();

// Importando los controladores para las rutas
import { getAllMaps, getMapById, postMap, putMap, deleteMap } from "../controllers/map.controller";

// Importando la validación del token
import { decodeToken } from '../firebase/manage.token';

//Coleccion Map
routerMap.get("/allMaps", decodeToken, getAllMaps);
routerMap.get("/getMapById/:id", decodeToken, getMapById);
routerMap.post("/postMap", decodeToken, postMap);
routerMap.put("/putMap/:id", decodeToken, putMap);
routerMap.delete("/deleteMap/:id", decodeToken, deleteMap);

export default routerMap;
