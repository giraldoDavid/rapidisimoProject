const { app, server } = require("../index");
import Request from 'supertest';

// Por medio de esta constante podemos hacer las pruebas de nuestra API
const id_delivery_man = 3
const startDate = '2010-04-29'
const endDate = '2030-02-02'

afterAll(() => {
    server.close();
});

describe("Query Deliveryman", () => {
    test("Get - Delivery Man for id", async () => {
        const response = await Request(app).get(`/deliveryMan/${id_delivery_man}`);
        expect(response.status).toBe(201);
    });
    test("Get - Delivery Man Orders", async () => {
        const response = await Request(app).get(`/ordersOfDeliveryMan/${id_delivery_man}`);
        expect(response.status).toBe(202);
    });
    test("Get - Delivery Man Available", async () => {
        const response = await Request(app).get(`/deliveryManAvailable`);
        expect(response.status).toBe(201)
    });
    test("Get - Deliveries By Delivery Man", async () => {
        const response = await Request(app).get(`/deliveriesByDeliveryMan/${id_delivery_man}`);
        expect(response.status).toBe(201)
    });
    test("Get - Deliveries By Delivery Man Range", async () => {
        const response = await Request(app).get(`/deliveriesByDeliveryManRange/${id_delivery_man}/${startDate}/${endDate}`);
        expect(response.status).toBe(202)
    });

});