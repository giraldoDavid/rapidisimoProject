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
 *             - id_delivery_man
 *             - id_order
 *          example:
 *             "id_delivery_man": 2
 *             "id_order": 100000
 */

/**            
 * @swagger
 * /allAssignedOrder:
 *  get:
 *    security:
 *      - bearerAuth: []
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
 *    security:
 *      - bearerAuth: []
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
 * /putAssignedOrder/{id}:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      summary: Edit a Assigned Order
 *      tags: [Assigned Order]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la orden asignada
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Assigned Order'
 *      responses:
 *          201:
 *              description: Orden asignada con id ${id_company}, editada satisfactoriamente
 *          508:
 *              description: Error al editar la orden asignada
 */

/**
 * @swagger
 * /patchAssignedOrder/{id}:
 *  patch:
 *      security:
 *          - bearerAuth: []
 *      summary: Edit a Assigned Order with the method PATCH
 *      tags: [Assigned Order]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la orden asignada
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Assigned Order'
 *      responses:
 *          201:
 *              description: Orden asignada con id ${id_company}, editada satisfactoriamente
 *          508:
 *              description: Error al editar la orden asignada
 */

/**
 * @swagger
 * /deleteAssignedOrder/{id}:
 *  delete:
 *      security:
 *          - bearerAuth: []
 *      summary: Delete a Assigned Order
 *      tags: [Assigned Order]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la orden asignada
 *      responses:
 *          200:
 *              description: Orden asignada con id ${id}, eliminada satisfactoriamente
 *          409:
 *              description: Error al eliminar una orden asignada
 */ 