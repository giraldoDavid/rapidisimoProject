import app from "../index";
import Request from 'supertest';
import { createConnection, DataSource } from "typeorm";
import { Server } from "http";
const port = 4201;
let connection: DataSource, server: Server;



describe("Server", () => {
    test("Should be up and running", async () => {
        const response = await Request(app).get("/allUsers");
        expect(response.status).toBe(201);
    })
})  