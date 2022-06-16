import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from 'dotenv';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import router from './routes/index.routes';
import routerMap from "./routes/index.mongo.routes";
import { connectToDatabase } from './data-base/config.mongodb';
import { mailRouter } from "./routes/mail.routes";
import { authRouter } from "./routes/auth.router";


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
                description: "Local"
            },
            {
                url: `http://34.75.198.96:${process.env.PORT}/`,
                description: "Servidor"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer"
                }
            }
        }
    },
    apis: ['./dist/src/docs/*.js']
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
app.use("/", routerMap);                        // rutas para la Peticiones de MongoDB
app.use('/mail', mailRouter);                   // rutas de mail SendGrid
app.use("/auth", authRouter);                   // ruta de autenticación

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerSpec)))

//Establecer puerto
app.set("port", process.env.PORT || 3000);

// Conectar con la base de datos MONGODB
connectToDatabase()
    .then(async () => {
        console.log("Connected to database");
    })
    .catch(async (error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

//Iniciar el servidor
app.listen(app.get("port"), () => {
    console.log(`Server started at http://localhost:${app.get("port")}`);
});

export default app;