/**
 * @swagger
 * components:
 *  schemas:
 *      Orders:
 *          type: object
 *          properties:
 *  
 *             id_order:
 *                 type: number
 *                 description: Id autoincrementing
 *             id_company:
 *                 type: number
 *                 description: Id of the Company
 *             client_email:
 *                 type: string
 *                 description: Email of the Client
 *             client_name:
 *                 type: string
 *                 description: Name of the Client
 *             client_phone:
 *                 type: number
 *                 description: Phone of the Client
 *             client_address:
 *                 type: string
 *                 description: Adress of the Client
 *             date_delivery:
 *                 type: date
 *                 description: Date delivery of the Order
 *             estimated_time:
 *                 type: string
 *                 description: Estimated time of the Order 
 *             order_cost:
 *                 type: number
 *                 description: Order cost
 *             image:
 *                 type: string
 *                 description: Image of the Order
 *             status_order:
 *                 type: string
 *                 description: Status Order
 *
 *          required:
 *             - id_order
 *             - id_company
 *             - client_email
 *             - client_name
 *             - client_phone
 *             - client_address
 *             - date_delivery
 *             - estimated_time
 *             - order_cost
 *             - image
 *             - status_order
 *          example:
 *             "id_order": 1
 *             "id_company": 1
 *             "client_email": "camila@gmail.com"
 *             "client_name": "Camila Mejia"
 *             "client_phone": 3245434567
 *             "client_address": "Cr55c #89-79"
 *             "date_delivery": "15-06-2022"
 *             "estimated_time": "3 horas"
 *             "order_cost": 10000
 *             "image": "orden-3.png"
 *             "status_order": "En espera"
 */
/**            
 * @swagger
 * /allOrders:
 *  get:
 *    summary: Get all Orders
 *    tags: [Orders]
 *    responses:
 *      201:
 *          description: Trae todas las ordenes
 *      508: 
 *          description: Error al traer las ordenes
 */

/** 
 * @swagger
 * /postOrder:
 *  post:
 *    summary: Create new Order
 *    tags: [Orders]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Orders'
 *                  
 *    responses:
 *      200:
 *          description: Orden creada satisfactoriamente
 *      508:
 *          description: Error al crear la orden
 * 
 */ 

/**
 * @swagger
 * /putOrder/:id:
 *  put:
 *      summary: Edit a Orders
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id_order
 *          schema:
 *              type: objectId
 *              $ref: '#/components/schemas/Orders'
 *          required: true
 *          description: Identificador de la orden
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *      responses:
 *          201:
 *              description: Orden con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar la orden
 */

/**
 * @swagger
 * /deleteOrder/:id:
 *  delete:
 *      summary: Delete a Orders
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id_order
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador de la empresa
 *      responses:
 *          201:
 *              description: Orden con id ${id}, eliminada satisfactoriamente
 *          500:
 *              description: Error al eliminar la orden
 */ 