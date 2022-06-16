const { app, server } = require("../index");
import Request from 'supertest';

// Por medio de esta constante podemos hacer las pruebas de nuestra API
let id_company = 10008;

afterAll(() => {
    server.close();
});
describe("Company", () => {
    test("Get - Company", async () => {
        const response = await Request(app).get("/allCompanies");
        expect(response.status).toBe(201);
    });

    test("Post - New Company", async () => {
        const response = await Request(app).post("/postCompany").send({
            email_company: "nike123@gmail.com",
            name_company: "Nike Inc.",
            phone_company: "3456789123",
            city: "Cali",
            neighborhood: "Santa Rita",
            close_time_company: "21:00:00",
            companie_address: "Calle falsa 123",
            company_latitude: "6.282564239626248",
            company_longitude: "-75.56616569093289"
        });
        expect(response.status).toBe(201);
    });

    test("Put - Update Info Company", async () => {
        const response = await Request(app).put(`/putCompany/${id_company}`).send({
            email_company: "nike123@gmail.com",
            name_company: "Nike Inc.",
            phone_company: "3456789123",
            city: "Bello",
            neighborhood: "Santa Rita",
            close_time_company: "18:00:00",
            companie_address: "Calle falsa 123",
            company_latitude: "6.282564239626248",
            company_longitude: "-75.56616569093289"
        });
        expect(response.status).toBe(201);
    });

    test("Patch - Update Info Company", async () => {
        const response = await Request(app).patch(`/patchCompany/${id_company}`).send({
            name_company: "Apple Inc.",
        });
        expect(response.status).toBe(201);
    });

    test("Delete - Delete User", async () => {
        const response = await Request(app).delete(`/deleteCompany/${id_company}`);
        expect(response.status).toBe(201);
    });

});