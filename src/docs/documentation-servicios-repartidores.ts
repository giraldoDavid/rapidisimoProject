/**            
 * @swagger
 * /deliveryMan/:id:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get delivery man according to Id
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
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
 *    security:
 *          - bearerAuth: []
 *    summary: Get the orders of delivery man 
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
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

/**            
 * @swagger
 * /deliveryManAvailable:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get the delivery man available
 *    tags: [Services of delivery man]
 *    responses:
 *      201:
 *          description: Trae los repartidores disponibles
 *      508:
 *          description: Error al traer los repartidores disponibles
 */


/**            
 * @swagger
 * /deliveriesByDeliveryMan/:id:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get the deliveries by delivery man (current date)
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del repartidor
 *    responses:
 *      201:
 *          description: Trae las ordenes actuales del repartidor
 *      508:
 *          description: Error al traer las ordenes del repartidor
 */


/**            
 * @swagger
 * /deliveriesByDeliveryManRange/:id/:startDate/:endDate:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get the deliveries by delivery man (date range)
 *    tags: [Services of delivery man]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del repartidor
 *        - in: path
 *          name: startDate
 *          schema:
 *              type: date
 *          required: true
 *          description: Fecha de inicio
 *        - in: path
 *          name: endDate
 *          schema:
 *              type: date
 *          required: true
 *          description: Fecha final
 *    responses:
 *      201:
 *          description: Trae las ordenes por rango de fecha del repartidor
 *      202:
 *          description: No hay entregas en el rango de fechas
 *      508:
 *          description: Error al traer las ordenes del repartidor por el rango de fecha
 */