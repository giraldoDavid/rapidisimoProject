/**
 * @swagger
 * components:
 *  schemas:
 *      Assigned Order:
 *          type: object
 *          properties:

 *             id_assigned:
 *                 type: number
 *                 description: Id autoincrementing
 *             id_delivery_man:
 *                 type: number
 *                 description: Id of delivery man
 *             id_order:
 *                 type: number
 *                 description: Id of the Order
 *             
 *          required:
 *             - id_assigned
 *             - id_delivery_man
 *             - id_order
 *          example:
 *             "id_user": 3
 *             "id_order": 100000
 */

/**            
 * @swagger
 * /allAssignedOrder:
 *  get:
 *    summary: Get all Assigned Order
 *    tags: [Assigned Order]
 *    responses:
 *      201:
 *          description: Trae todas las ordenes asignadas
 *      508: 
 *          description: Error al traer las ordenes asignadas
 */

/** 
 * @swagger
 * /postAssignedOrder:
 *  post:
 *    summary: Create new Assigned Order
 *    tags: [Assigned Order]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Assigned Order'
 *                  
 *    responses:
 *      201:
 *          description: Orden asignada satisfactoriamente
 *      508:
 *          description: Error al crear la orden
 * 
 */ 

/**
 * @swagger
 * /putAssignedOrder/:id:
 *  put:
 *      summary: Edit a Assigned Order
 *      tags: [Assigned Order]
 *      parameters:
 *        - in: path
 *          name: id_assigned
 *          schema:
 *              type: objectId
 *              $ref: '#/components/schemas/Assigned Order'
 *          required: true
 *          description: Identificador de la orden asignada
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *      responses:
 *          201:
 *              description: Orden asignada con id ${id_company}, editada satisfactoriamente
 *          508:
 *              description: Error al editar la orden asignada
 */

/**
 * @swagger
 * /deleteAssignedOrder/:id:
 *  delete:
 *      summary: Delete a Assigned Order
 *      tags: [Assigned Order]
 *      parameters:
 *        - in: path
 *          name: id_assigned
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador de la orden asignada
 *      responses:
 *          200:
 *              description: Orden asignada con id ${id}, eliminada satisfactoriamente
 *          409:
 *              description: Error al eliminar una orden asignada
 */ 