/** 
 * @swagger
 * /uploadImageUser/:id:
 *  post:
 *      security:
 *          - bearerAuth: []
 *      summary: Upload image user and edit in DataBase
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