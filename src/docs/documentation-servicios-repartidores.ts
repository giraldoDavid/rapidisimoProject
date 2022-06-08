/**            
 * @swagger
 * /deliveryMan/:id:
 *  get:
 *    summary: Get delivery man according to Id
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id_user
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador del repartidor
 *    responses:
 *      201:
 *          description: Trae los repartidores según su Id
 *      508: 
 *          description: Error al traer el repartidor
 */

/**            
 * @swagger
 * /ordersOfDeliveryMan/:id:
 *  get:
 *    summary: Get the orders of delivery man 
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id_user
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador del repartidor
 *    responses:
 *      201:
 *          description: Trae las ordenes de los repartidores
 *      202:
 *          description: El repartidor con id ${id}, no ha realizado ninguna entrega
 *      508: 
 *          description: Error al traer las ordenes del repartidor
 */