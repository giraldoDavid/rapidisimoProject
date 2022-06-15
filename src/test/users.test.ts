const { app, server } = require("../index");
import Request from 'supertest';

// Por medio de esta constante podemos hacer las pruebas de nuestra API
let id_user = 33, id_company = 10015;


afterAll(() => {
    server.close();
})

describe("Users", () => {

    test("Get - Users", async () => {
        const response = await Request(app).get("/allUsers");
        expect(response.status).toBe(201);
    });

    test("Post - New User", async () => {
        const response = await Request(app).post("/postUser").send({
            email: "mariocardenas@gmail.com",
            document: 420106835,
            name: "Mario",
            lastname: "Cárdenas",
            phone: "3136763849",
            delivery_man_status: "Ocupado",
            vehicle: "Carro",
            rol: "Delivery man",
            user_image: "imagen.png"
        });
        expect(response.status).toBe(201);
    });

    test("Put - Update Info User", async () => {
        const response = await Request(app).put(`/putUser/${id_user}`).send({
            email: "mariocardenas@gmail.com",
            document: 420106835,
            name: "Prueba",
            lastname: "Jest",
            phone: "3136763849"
        });
        expect(response.status).toBe(201);
    });

    test("Patch - Update Info User", async () => {
        const response = await Request(app).patch(`/patchUser/${id_user}`).send({
            phone: "3208763849",
        });
        expect(response.status).toBe(201);
    });

    test("Delete - Delete User", async () => {
        const response = await Request(app).delete(`/deleteUser/${id_user}`);
        expect(response.status).toBe(201);
    });
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
            streat: "Calle 102",
            career: "Carrera 129",
            close_time_company: "21:00:00"
        });
        expect(response.status).toBe(201);
    });


    test("Put - Update Info User", async () => {
        const response = await Request(app).put(`/putCompany/${id_company}`).send({
            email_company: "amaretto123@gmail.com",
            name_company: "Amaretto Inc.",
            phone_company: "3456789123",
            city: "Cali",
            neighborhood: "Santa Rita",
            streat: "Calle 102",
            career: "Carrera 129",
            close_time_company: "21:00:00"
        });
        expect(response.status).toBe(201);
    });

    test.skip("Patch - Update Info User", async () => {
        const response = await Request(app).patch(`/patchCompany/${id_company}`).send({
            phone_company: "3104778549",
            city: "Medellín",
        });
        expect(response.status).toBe(201);
    });

    test("Delete - Delete User", async () => {
        const response = await Request(app).delete(`/deleteCompany/${id_company}`);
        expect(response.status).toBe(201);
    });

})