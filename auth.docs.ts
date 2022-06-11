/**
 * @swagger
 * components:
 *  securitySchemes:
 *      BearerAuth:
 *          type: http
 *          scheme: bearer
 * 
 * 
 * @swagger
 * components:
 *  schemas:
 *      auth:
 *          type: object
 *          properties:
 *              email:
 *                  type: string
 *                  description: item of the auth
 *              password:
 *                  type: string
 *                  description: item of the auth
 *          required:
 *              - email
 *              - password
 *          example:
 *              email: "example@example.com"
 *              password: "12345678"
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Login to the API with email and password
 *      tags: [auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/auth'
 *      responses:
 *          200:
 *              description: login successful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/auth'
 *          401:
 *              description: Unauthorized         
 * @swagger
 * /auth/signin:
 *  post:
 *      summary: Create a new user for login to the API with email and password
 *      tags: [auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/auth'
 *      responses:
 *          200:
 *              description: created successful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          $ref: '#/components/schemas/auth'
 *          401:
 *              description: Unauthorized         
 *
 */