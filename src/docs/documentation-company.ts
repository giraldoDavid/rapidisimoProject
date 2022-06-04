/**
 * @swagger
 * components:
 *  schemas:
 *      Company:
 *          type: object
 *          properties:
 *  
 *             id_company:
 *                 type: number
 *                 description: Id autoincrementing
 *             email_company:
 *                 type: string
 *                 description: Email of the Company
 *             name_company:
 *                 type: string
 *                 description: Name of the Company
 *             phone_company:
 *                 type: number
 *                 description: Phone of the Company
 *             city:
 *                 type: string
 *                 description: City of the Company
 *             neighborhood:
 *                 type: string
 *                 description: Neighborhood of the Company
 *             streat:
 *                 type: string
 *                 description: Streat of the Company
 *             career:
 *                 type: string
 *                 description: Career of the Company 
 *             close_time_company:
 *                 type: string
 *                 description: close_time_company
 *
 *          required:
 *             - id_company
 *             - email_company
 *             - name_company
 *             - phone_company
 *             - city
 *             - neighborhood
 *             - streat
 *             - career
 *             - close_time_company
 *          example:
 *             "id_company": 1
 *             "email_company": "nike123@gmail.com"
 *             "name_company": "Nike"
 *             "phone_company": 3123456789
 *             "city": "Medellin"
 *             "neighborhood": "Laureles"
 *             "streat": "32C"
 *             "career": "87A-168"
 *             "close_time_company": "7pm"
 */

/**            
 * @swagger
 * /allCompanies:
 *  get:
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
 *    summary: Create new Company
 *    tags: [Company]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Users'
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
 *      summary: Edit a Companies
 *      tags: [Company]
 *      parameters:
 *        - in: path
 *          name: id_company
 *          schema:
 *              type: objectId
 *              $ref: '#/components/schemas/Users'
 *          required: true
 *          description: Identificador de la empresa
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *      responses:
 *          200:
 *              description: Empresa con id ${id_company}, editada satisfactoriamente
 *          409:
 *              description: Error al editar la empresa
 */

/**
 * @swagger
 * /deleteCompany/:id:
 *  delete:
 *      summary: Delete a Companies
 *      tags: [Company]
 *      parameters:
 *        - in: path
 *          name: id_company
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador de la empresa
 *      responses:
 *          200:
 *              description: Empresa con id ${id}, eliminada satisfactoriamente
 *          409:
 *              description: Error al eliminar la empresa
 */ 