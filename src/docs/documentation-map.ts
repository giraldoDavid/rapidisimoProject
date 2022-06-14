/**
 * @swagger
 * components:
 *  schemas:
 *      Location:
 *          type: object
 *          properties:
 *  
 *             _id:
 *                 type: ObjectId
 *                 description: Id for default
 *             id_order:
 *                 type: string
 *                 description: Id of the Order
 *             address_origin:
 *                 type: string
 *                 description: Address origin of the Order
 *             address_destiny:
 *                 type: string
 *                 description: Address destiny of the Order
 *             time_estimate:
 *                 type: string
 *                 description: Time estimate of the Order
 *             current_latitude:
 *                 type: number
 *                 description: Current latitude of the Order
 *             current_longitude:
 *                 type: number
 *                 description: Current longitude of the Order
 *
 *          required:
 *             - id_order
 *             - address_origin
 *             - address_destiny
 *             - time_estimate
 *             - current_latitude
 *             - current_longitude
 *          example:
 *             "id_order": "2"
 *             "address_origin": "Cra. 70 # 60 - 70 Medellin - Colombia"
 *             "address_destiny": "Cra. 55c # 89 - 79 Medellin - Colombia"
 *             "time_estimate": "10:00:00"
 *             "current_latitude": "35"
 *             "current_longitude": "40"
 */

/**            
 * @swagger
 * /allMaps:
 *  get:
 *    security:
 *          - bearerAuth: []
 *    summary: Get all locations
 *    tags: [Location]
 *    responses:
 *      201:
 *          description: Trae todas las locaciones
 *      508: 
 *          description: Error al traer las localizaciones
 */

/**            
 * @swagger
 * /getMapById/:id:
 *  get:
 *    summary: Get all locations for his Id
 *    tags: [Location]
 *    parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la localización
 *    responses:
 *      201:
 *          description: Trae todas las localizaciones
 *      508: 
 *          description: Error al traer la localización
 */

/** 
 * @swagger
 * /postMap:
 *  post:
 *    security:
 *          - bearerAuth: []
 *    summary: Create new location
 *    tags: [Location]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Location'
 *                  
 *    responses:
 *      201:
 *          description: Locación creada satisfactoriamente, con id ${result.insertedId}
 *      508:
 *          description: Error al crear la locación
 * 
 */ 

/**
 * @swagger
 * /putMap/:id:
 *  put:
 *      security:
 *          - bearerAuth: []
 *      summary: Edit a Location
 *      tags: [Location]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la localización
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Location'
 *      responses:
 *          201:
 *              description: Locación con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar la locación
 */

/**
 * @swagger
 * /deleteMap/:id:
 *  delete:
 *      security:
 *          - bearerAuth: []
 *      summary: Delete a Location
 *      tags: [Location]
 *      parameters:
 *        - in: path
 *          name: :id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la localización
 *      responses:
 *          201:
 *              description: Locación con id ${id}, eliminado satisfactoriamente
 *          500:
 *              description: Error al eliminar la localización
 */ 
