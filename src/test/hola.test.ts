import app from "../index";
import Request from 'supertest';
import { createConnection, DataSource } from "typeorm";
import { Server } from "http";
const port = process.env.PORT || 3000;
let connection: DataSource, server: Server;

beforeEach(async () => {
    connection = await createConnection();
    await connection.synchronize();
    server = app.listen(port);
    
});

afterEach(() => {
    server.close();
    connection.close();
});


it("should return a 200 response", async () => {
    const response = await Request(app).get("/api/"); 
    console.log(response);
})