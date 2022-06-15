import app from "../index";
import Request from 'supertest';

describe("Orders", () => {
    test("Get all the orders", async () => {
        const response = await Request(app).get("/allOrders");
        expect(response.status).toBe(201);
    });

    test("Get the order of Id", async () => {
        const response = await Request(app).get("/getOrderById/:id");
        expect(response.status).toBe(201);
    });

    test("Create new Order", async () => {
        const response = await Request(app).post("/postOrder").send({
            id_company: 10001,
            client_email: "carlos123@gmail.com",
            client_name: "Carlos Giraldo",
            client_phone: "3535621204",
            client_address: "Cra. 6 # 33 - 4 Medell¡n - Colombia",
            date_delivery: "2020-06-05T05:00:00.000Z",
            estimated_time: "10:00:00"
        })
        expect(response.status).toBe(201);
    });

    test("Update an Order", async () => {
        const response = await Request(app).put("/putOrder/:id");
        expect(response.status).toBe(201);
    });

    test("Update an Order with the method PATCH", async () => {
        const response = await Request(app).patch("/patchOrder/:id");
        expect(response.status).toBe(201);
    });

    test("Delete an Order", async () => {
        const response = await Request(app).delete("/deleteOrder/:id");
        expect(response.status).toBe(201);
    });

})

 