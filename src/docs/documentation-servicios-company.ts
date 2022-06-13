/**            
 * @swagger
 * /getOrdersCompanySlopes/:id_company:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get pending orders by company
 *    tags: [Services of the Company]
 *    parameters:
 *        - in: path
 *          name: id_company
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *    responses:
 *      201:
 *          description: Trae las ordenes pendientes por comercio
 *      508: 
 *          description: Error al traer las ordenes de los comercios
 */

/**            
 * @swagger
 * /OrdersDateDelivery:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get pending orders for the next day
 *    tags: [Services of the Company]
 *    responses:
 *      201:
 *          description: Trae las ordenes pendientes para el siguiente día
 *      508: 
 *          description: Error al traer las ordenes de mañana
 */

/**            
 * @swagger
 * /getOrdersDateDeliveryToday:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get pending orders for today
 *    tags: [Services of the Company]
 *    responses:
 *      204:
 *          description: No hay ordenes para hoy
 *      201:
 *          description: Trae las ordenes de la fecha actual
 *      508: 
 *          description: Error al traer las ordenes de mañana
 */

/**            
 * @swagger
 * /getDiscriminatedDeliveries:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get all deliveries discriminated
 *    tags: [Services of the Company]
 *    responses:
 *      204:
 *          description: No hay entregas discriminadas
 *      201:
 *          description: Trae las entregas discriminadas
 *      508: 
 *          description: Error al traer las entregas discriminadas
 */

/**            
 * @swagger
 * /getDeliveriesCompany/:id:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get all deliveries discriminated by company
 *    tags: [Services of the Company]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador de la empresa
 *    responses:
 *      204:
 *          description: No hay entregas discriminadas por comercio
 *      201:
 *          description: Trae las entregas discriminadas por comercio
 *      508: 
 *          description: Error al traer las entregas discriminadas por comercio
 */




