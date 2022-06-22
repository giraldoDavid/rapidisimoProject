/**
 * @swagger
 * components:
 *  schemas:
 *      Mail:
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
 * /mail/mailAssignedOrden:
 *  post:
 *    security:
 *      - bearerAuth: []
 *    summary: Create new Assigned Order, and send mail by SendGrid to the client assosiated with the order
 *    tags: [Mail]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Mail'
 *    responses:
 *      201:
 *          description: "Orden asignada y correo enviado a MAIL"
 *      508:
 *          description: Error asignada la orden y enviar el correo
 * 
 */ 