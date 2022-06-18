const { app, server } = require("../index")
import Request from 'supertest';

let id_assigned = 1000001


afterAll(() => {
    server.close();
})


describe("Assigned Orders", () => {
    test("Get all the assigned orders", async () => {
        const response = await Request(app).get("/allAssignedOrder");
        expect(response.status).toBe(201);
    });

    test("Create new Assigned Order", async () => {
        const response = await Request(app).post("/postAssignedOrder").send({
            id_delivery_man: 3,
            id_order: 100003
        })
        expect(response.status).toBe(201);
    });

    test("Update an Assigned Order", async () => {
        const response = await Request(app).put(`/putAssignedOrder/${id_assigned}`).send({
            id_delivery_man: 2,
            id_order: 100002
        })
        expect(response.status).toBe(201);
    });

    test("Update an Assigned Order with the method PATCH", async () => {
        const response = await Request(app).patch(`/patchAssignedOrder/${id_assigned}`).send({
            id_delivery_man: 1
        })
        expect(response.status).toBe(201);
    });

    test("Delete an Assigned Order", async () => {
        const response = await Request(app).delete(`/deleteAssignedOrder/${id_assigned}`);
        expect(response.status).toBe(201);
    });
})
