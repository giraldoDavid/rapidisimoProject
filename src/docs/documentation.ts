/**
 * @swagger
 * components:
 *  schemas:
 *      Users:
 *          type: object
 *          properties:
 *
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
 *                 type: number
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
 *
 *          required:
 *             - email
 *             - document
 *             - name
 *             - lastname
 *             - phone
 *          example:
 *             id_user: 1
 *             email: estefa@gmail.com
 *             document: 1018223445
 *             name: Estefania
 *             lastname: Salazar
 *             phone: 3143230456
 *             delivery_man_status: En reparto
 *             vehicle: A pie
 *             rol: Repartidor
 *             
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
 * 
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
 *                  
 *    responses:
 *      201:
 *          description: Usuario creado satisfactoriamente
 *      508:
 *          description: Error al crear el usuario
 * 
 * 
 * @swagger
 * /putUser/:id:
 *  put:
 *      summary: Edit a Users
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: _id
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador del User
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *      responses:
 *          201:
 *              description: Usuario con id ${id}, editado satisfactoriamente
 *          508:
 *              description: Error al editar el usuario
 * 
 * @swagger
 * /deleteUser/:id:
 *  delete:
 *      summary: Delete a Users
 *      tags: [Users]
 *      parameters:
 *        - in: path
 *          name: _id
 *          schema:
 *              type: objectId
 *          required: true
 *          description: Identificador del User
 *      responses:
 *          201:
 *              description: Usuario con id ${id}, eliminado satisfactoriamente
 *          500:
 *              description: Error al eliminar el usuario
 */ 