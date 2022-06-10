import router from '../routes/index.routes';
import Request from 'supertest';

describe('GET /allUsers', () => {
   
    test("Retorne un array de users", async () => {
        const response = await Request(router).get('/allUsers').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})


// describe('GET /users', () => {
//     test('Retornar un status 200', async () => {
//         const response = await request(app).get('/test/users').send();
//         expect(response.statusCode).toBe(200);
//     })

//     test("Retorne un array de users", async () => {
//         const response = await request(app).get('/test/users').send();
//         expect(response.body).toBeInstanceOf(Array);
//     })
// })

