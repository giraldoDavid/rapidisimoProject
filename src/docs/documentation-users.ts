/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          properties:
 *             id_user:
 *                 type: number
 *                 description: Id autoincrementing
 *             email:
 *                 type: string
 *                 description: Email of Users
 *             document:
 *                 type: number
 *                 description: Document of Users
 *             name:
 *                 type: string
 *                 description: Name of Users
 *             lastname:
 *                 type: string
 *                 description: Lastname of Users
 *             phone:
 *                 type: string
 *                 description: Phone of Users
 *             delivery_man_status:
 *                 type: string
 *                 description: Status of the courier in charge of the order
 *             vehicle:
 *                 type: string
 *                 description: Vehicle of the delivery men 
 *             rol:
 *                 type: string
 *                 description: User's role
 *             user_image:
 *                 type: string
 *                 description: User's image
 *
 *          required:
 *             - email
 *             - document
 *             - name
 *             - lastname
 *             - phone
 *          example:
 *              "email": "mariocardenas@gmail.com"
 *              "document": 420106835
 *              "name": "Mario"
 *              "lastname": "Cárdenas"
 *              "phone": "3136763849"
 *              "delivery_man_status": "Ocupado"
 *              "vehicle": "Carro"
 *              "rol": "Delivery man"
 *              "user_image": "imagen.png"
 */

/**            
 * @swagger
 * /allUsers:
 *  get:
 *    summary: Get all users
 *    tags: [Users]
 *    responses:
 *      201:
 *          description: Trae todos los usuarios
 *      508: 
 *          description: Error al traer los usuarios
 */

/** 
 * @swagger
 * /postUser:
 *  post:
 *    summary: Create new users
 *    tags: [Users]
 *    requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Users'
 *                  
 *    responses:
 *      201:
 *          description: Usuario creado satisfactoriamente
 *      508:
 *          description: Error al crear el usuario
 * 
 */ 

/**
 * @swagger
 * /putUser/:id:
 *  put:
 *      summary: Edit a Users
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id_user
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Users'
 *      responses:
 *          201:
 *              description: Usuario con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar el usuario
 */

/**
 * @swagger
 * /patchUser/:id:
 *  patch:
 *      summary: Edit a Users with the method PATCH
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id_user
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Users'
 *      responses:
 *          201:
 *              description: Usuario con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar el usuario
 */

/**
 * @swagger
 * /deleteUser/:id:
 *  delete:
 *      summary: Delete a Users
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: id_user
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador del User
 *      responses:
 *          201:
 *              description: Usuario con id ${id}, eliminado satisfactoriamente
 *          500:
 *              description: Error al eliminar el usuario
 */ 


