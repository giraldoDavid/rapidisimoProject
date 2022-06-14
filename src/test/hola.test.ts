import app from "../index";
import Request from 'supertest';

describe("Server", () => {
    test("Should be up and running", async () => {
        const response = await Request(app).get("/allUsers");
        expect(response.status).toBe(201);
    })
})  
