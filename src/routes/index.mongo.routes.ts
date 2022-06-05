import { Router } from "express";
const routerMap = Router();

// Importando los controladores para las rutas
import { getAllMaps, getMapById, postMap, putMap, deleteMap } from "../controllers/map.controller";

//Coleccion Map
routerMap.get("/allMaps", getAllMaps);
routerMap.get("/getMapById/:id", getMapById);
routerMap.post("/postMap", postMap);
routerMap.put("/putMap/:id", putMap);
routerMap.delete("/deleteMap/:id", deleteMap);

export default routerMap;
