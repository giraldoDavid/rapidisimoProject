import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from 'dotenv';

import router from './routes/index';

dotenv.config();
const app = express();

//Midelware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//verificar si esta en produccion
app.use("/api/", (req, res, next) => {
    res.send("Welcome to the API of Rapidisimo");
});

//routes
app.use("/", router);


//Establecer puerto
app.set("port", process.env.PORT || 3000);

//Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});