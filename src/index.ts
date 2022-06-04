import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import router from './routes/index';

dotenv.config();
const app = express();

//Establecer conexión con Swagger 
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentación Rapidisimo',
            description: 'Documentación de la API de Rapidisimo, creada en TypeScript con Express, con bases de datos en PostgreSQL y MongoDB',
            version: '1.0.0',
            contact: {
                name: 'Rapidisimo',
                email: 'dev.rapidisimo@gmail.com'
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
            }
        ]
    },
    apis: ['./dist/docs/*.js']
}


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

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

//Establecer puerto
app.set("port", process.env.PORT || 3000);

//Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});