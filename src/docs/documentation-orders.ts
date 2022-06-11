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
 *             image_order:
 *                 type: string
 *                 description: Image of the Order
 *             status_order:
 *                 type: string
 *                 description: Status Order
 *             rating:
 *                 type: number
 *                 description: Rating of the Order
 *             _id_traking:
 *                 type: string
 *                 description: Trancking of the Order
 *
 *          required:
 *             - id_company
 *             - client_email
 *             - client_name
 *             - client_phone
 *             - client_address
 *             - date_delivery
 *             - estimated_time
 *          example:
 *             "id_company": 10001
 *             "client_email": "isa123@gmail.com"
 *             "client_name": "Isabella Taborda"
 *             "client_phone": "3535621234"
 *             "client_address": "Cra. 5 # 34 - 4 Medell¡n - Colombia"
 *             "date_delivery": "2020-05-05T05:00:00.000Z"
 *             "estimated_time": "12:00:00"
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
 *              type: number
 *          required: true
 *          description: Identificador de la orden
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Orders'
 *      responses:
 *          201:
 *              description: Orden con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar la orden
 */

/**
 * @swagger
 * /patchOrder/:id:
 *  patch:
 *      summary: Edit a Orders with the method PATCH
 *      tags: [Orders]
 *      parameters:
 *        - in: path
 *          name: id_order
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la orden
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Orders'
 *      responses:
 *          201:
 *              description: Orden con id ${id}, editada satisfactoriamente
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
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *      responses:
 *          201:
 *              description: Orden con id ${id}, eliminada satisfactoriamente
 *          500:
 *              description: Error al eliminar la orden
 */ 