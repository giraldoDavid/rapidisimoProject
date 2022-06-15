import app from "../index";
import Request from 'supertest';

describe("Assigned Orders", () => {
    test("Get all the assigned orders", async () => {
        const response = await Request(app).get("/allAssignedOrder");
        expect(response.status).toBe(201);
    });

    test("Create new Assigned Order", async () => {
        const response = await Request(app).post("/postAssignedOrder").send({
            id_delivery_man: 3,
            id_order: 100000
        })
        expect(response.status).toBe(201);
    });

    test("Update an Assigned Order", async () => {
        const response = await Request(app).put("/putAssignedOrder/:id");
        expect(response.status).toBe(201);
    });

    test("Update an Assigned Order with the method PATCH", async () => {
        const response = await Request(app).patch("/patchAssignedOrder/:id");
        expect(response.status).toBe(201);
    });

    test("Delete an Assigned Order", async () => {
        const response = await Request(app).delete("/deleteAssignedOrder/:id");
        expect(response.status).toBe(201);
    });
})
