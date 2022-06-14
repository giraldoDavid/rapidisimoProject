/**            
 * @swagger
 * /getTotalEarnings:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get total earnings of the day
 *    tags: [Services of Earnings]
 *    responses:
 *      201:
 *          description: Trae el total de ganancias del día
 *      508: 
 *          description:Error al obtener las ganancias del día
 */

/**            
 * @swagger
 * /getTotalEarningsByDate:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get total earnings by date range
 *    tags: [Services of Earnings]
 *    responses:
 *      201:
 *          description: Trae el total de ganancias por rango de fechas
 *      508: 
 *          description: Error al obtener las ganancias por rango de fechas
 */

/**            
 * @swagger
 * /getTotalEarningsByDateOfDeliveryMan/:id_delivery/:date_start/:date_end:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get the earnings by date range with the id of a delivery man 
 *    tags: [Services of Earnings]
 *    parameters:
 *        - in: path
 *          name: date_start
 *          schema:
 *              type: date
 *          required: true
 *          description: Fecha de inicio
 *        - in: path
 *          name: date_end
 *          schema:
 *              type: date
 *          required: true
 *          description: Fecha final
 *        - in: path
 *          name: id_delivery
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del repartidor
 *    responses:
 *      201:
 *          description: Trae el total de ganancias por rango de fecha según el repartidor
 *      508:
 *          description: Error al obtener las ganancias del repartidor con id ${id_delivery} por rango de fechas
 */

/**            
 * @swagger
 * /getTotalEarningsByDateOfDeliveryMan/:id_delivery:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get the earnings of today by the id of a delivery man 
 *    tags: [Services of Earnings]
 *    parameters:
 *        - in: path
 *          name: id_delivery
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del repartidor
 *    responses:
 *      201:
 *          description: Trae el total de ganancias hoy según el repartidor
 *      508:
 *          description: Error al obtener las ganancias del repartidor con id ${id_delivery} por rango de fechas
 */