/** 
 * @swagger
 * /uploadImageUser/{id}:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: Upload user image and edit in DataBase with link of localstorage
 *      tags: [Image]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: User id
 *      responses:
 *          201:
 *              description: Imagen del usuario con id ID, editada satisfactoriamente
 *          508:
 *              description: Error al editar la imagen de usuario
 *  
 */ 

/** 
 * @swagger
 * /uploadImageOrder/{id}:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: Upload order image and edit in DataBase with link of localstorage
 *      tags: [Image]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: number
 *          required: true
 *          description: User id
 *      responses:
 *          201:
 *              description: Imagen de la orden con id ID, subida satisfactoriamente
 *          508:
 *              description: Error al editar la imagen de usuario
 *  
 */ 