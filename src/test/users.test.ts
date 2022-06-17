const { app, server } = require("../index");
import Request from 'supertest';

// Por medio de esta constante podemos hacer las pruebas de nuestra API
let id_user = 33;


afterAll(() => {
    server.close();
});

describe("Users", () => {

    test("Get - Users", async () => {
        const response = await Request(app).get("/allUsers");
        expect(response.status).toBe(201);
    });

    test("Post - New User", async () => {
        const response = await Request(app).post("/postUser").send({
            email: "mariocardena@gmail.com",
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
            email: "mariocardena@gmail.com",
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

