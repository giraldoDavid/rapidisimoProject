/**
 * @swagger
 * components:
 *  schemas:
 *      Company:
 *          type: object
 *          properties:
 *  
 *              id_company:
 *                  type: number
 *                  description: Id autoincrementing
 *              email_company:
 *                  type: string
 *                  description: Email of the Company
 *              name_company:
 *                  type: string
 *                  description: Name of the Company
 *              phone_company:
 *                  type: number
 *                  description: Phone of the Company
 *              city:
 *                  type: string
 *                  description: City of the Company
 *              neighborhood:
 *                  type: string
 *                  description: Neighborhood of the Company
 *              companie_address:
 *                  type: string
 *                  description: Streat of the Company
 *              close_time_company:
 *                  type: string
 *                  description: close_time_company
 *              companie_latitude:
 *                  type: number
 *                  description: latitude of the Company
 *              companie_longitude:
 *                  type: number
 *                  description: longitude of the Company
 *  
 *          required:
 *              - email_company
 *              - name_company
 *              - phone_company
 *              - city
 *              - neighborhood
 *              - companie_address
 *              - close_time_company
 *          example:
 *              "email_company": "nike123@gmail.com"
 *              "name_company": "Nike"
 *              "phone_company": "3456789123"
 *              "city": "Cali"
 *              "neighborhood": "Santa Rita"
 *              "companie_address": "Calle 102"
 *              "close_time_company": "21:00:00"
 *              "companie_latitude": 4.56789
 *              "companie_longitude": 3.45678
 */

/**            
 * @swagger
 * /allCompanies:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get all Companies
 *    tags: [Company]
 *    responses:
 *      200:
 *          description: Trae todas las empresas
 *      508: 
 *          description: Error al traer las empresas
 */

/** 
 * @swagger
 * /postCompany:
 *  post:
 *    security:
 *          - bearerAuth: []
 *    summary: Create new Company
 *    tags: [Company]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Company'
 *                  
 *    responses:
 *      200:
 *          description: Empresa creada con exito
 *      409:
 *          description: Error al crear la empresa
 * 
 */ 

/**
 * @swagger
 * /putCompany/:id:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      summary: Edit a Companies
 *      tags: [Company]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Company'
 *      responses:
 *          200:
 *              description: Empresa con id ${id_company}, editada satisfactoriamente
 *          409:
 *              description: Error al editar la empresa
 */

/**
 * @swagger
 * /patchCompany/:id:
 *  patch:
 *      security:
 *          - bearerAuth: []
 *      summary: Edit a Companies with the method PATCH
 *      tags: [Company]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Company'
 *      responses:
 *          201:
 *              description: Compañia con id ${id_company}, se ha editado satisfactoriamente
 *          508:
 *              description: Error al editar la compañia
 */

/**
 * @swagger
 * /deleteCompany/:id:
 *  delete:
 *      security:
 *          - bearerAuth: []
 *      summary: Delete a Companies
 *      tags: [Company]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *      responses:
 *          200:
 *              description: Empresa con id ${id}, eliminada satisfactoriamente
 *          409:
 *              description: Error al eliminar la empresa
 */ 