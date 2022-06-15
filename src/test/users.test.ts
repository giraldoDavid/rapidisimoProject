import mongodb from 'mongodb';
const { app, server } = require("../index");
import Request from 'supertest';
const id = 33


afterAll(() => {
    server.close();
})

describe("Users", () => {

    test("Get - Users", async () => {
        const response = await Request(app).get("/allUsers");
        expect(response.status).toBe(201);
    });

    test.skip("Post - New User", async () => {
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
        const response = await Request(app).put(`/putUser/${id}`).send({
            email: "mariocardenas@gmail.com",
            document: 420106835,
            name: "Prueba",
            lastname: "Jest",
            phone: "3136763849"
        });
        expect(response.status).toBe(201);
        console.log(response);


    });



    test("Patch - Update Info User", async () => {
        const response = await Request(app).patch("/patchUser/11").send({
            phone: "3208763849",
        });
        expect(response.status).toBe(201);

    });

    test("Delete - Delete User", async () => {
        const response = await Request(app).delete("/deleteUser/11").send({
            phone: "3208763849",
        });
        expect(response.status).toBe(201);

    });


})

// describe("Company", () => {

//     test("Get - Company", async () => {
//         const response = await Request(app).get("/allCompanies");
//         expect(response.status).toBe(201);
//     });

// })