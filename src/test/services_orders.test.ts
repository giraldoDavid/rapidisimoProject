import app from "../index";
import Request from 'supertest';

describe("Services of the company", () => {
    test("Orders pending by company", async () => {
        const response = await Request(app).get("/getOrdersCompanySlopes/:id_company");
        expect(response.status).toBe(201);
    });

    test("Orders pending for the next day", async () => {
    const response = await Request(app).get("/OrdersDateDelivery");
        expect(response.status).toBe(201);
    });
    
  
    test("Orders pending for today", async () => {
    const response = await Request(app).get("/getOrdersDateDeliveryToday");
        expect(response.status).toBe(201);
    });
   
    
    test("Orders discriminated by state", async () => {
    const response = await Request(app).get("/getDiscriminatedDeliveries");
        expect(response.status).toBe(201);
    });
   
    
    test("Orders discriminated by company", async () => {
    const response = await Request(app).get("/getDeliveriesCompany/:id");
        expect(response.status).toBe(201);
    });
   
})

