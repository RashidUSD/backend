const { Op } = require('sequelize')
const User = require('../../models/UsersLogin/Users')
const bcrypt = require('bcryptjs');
const { ApolloError } = require('apollo-client');
const jwt = require('jsonwebtoken');
const deCode = require('../../utils');
const { decode } = require('js-base64');
/**
 * Loguea a un usuario.
 * @param {Object} _ No usado
 * @param {Oject} args Argumentos de la petición
 * @return {Object} GQL response
 */
async function login(input) {
    const { email, password } = input;
    try {
        // Buscar al usuario
        const user = await User.findOne({ attributes: ['id', 'name', 'username', 'email', 'password'], where: { email: email } })
        if (!user) return { success: false, message: `El email '${email}' no se encuentra registrado.` }
        // Comparar contraseña
        const compare = await bcrypt.compareSync(password, user.password)
        if (!compare) return { success: false, message: 'La contraseña no es correcta.' }
        // Formatear datos de usuario
        const dataUser = { uId: user.id, UName: user.name, uUsername: user.username, uEmail: user.email, uPassword: user.password }
        // Crear token de session
        const token = jwt.sign({ uId: user.id, Uname: user.name, uUsername: user.username, uEmail: user.email }, process.env.AUTHO_USER_KEY, { expiresIn: "2d" })
        // login
        return {
            user: dataUser,
            success: true,
            message: 'Sesión creada.',
            token,
        }
    } catch (error) {
        console.log(error)
        throw new ApolloError('No ha sido posible procesar su solicitud.', 500)
    }
}
/**
 * Sube una imagen de usuario.
 * @param {Object} _ No usado
 * @param {Oject} file Argumentos de la petición
 * @return {Object} GQL response
 */
async function UpdateAvatar(file) {
    console.log(file)
    return null
}
/**
 * Actualiza la información de cada usuario.
 * @param {Object} _ No usado
 * @param {Oject} file Argumentos de la petición
 * @return {Object} GQL response
 */
async function UpdateUser(input, context) {
    try {
        // Obtener variables
        const { currentPassword, newPassword } = input
        console.log(input)
        // Verificar que exista el usuario
        const user = await User.findOne({ attributes: ['id', 'name', 'username', 'email', 'password'], where: { id: deCode.deCode(context.User.uId) } })
        // Comparar contraseña
        const compare = await bcrypt.compare(currentPassword, user.password)
        if (!compare) return 'La contraseña actual no es correcta.'
        // Comparar contraseña Y verifica que no sea Igual que a la anterior
        const compareNew = await bcrypt.compare(newPassword, user.password)
        if (compareNew) return 'La nueva contraseña no puede ser igual a la actual.'
        // Hash de contraseña
        const newPassHash = await bcrypt.hash(newPassword, 10)
        // Actualiza la contraseña
        await User.update({ password: newPassHash }, { where: { id: deCode.deCode(context.User.uId) } })
        // Registro correcto
        return 'Se ha actualizado la contraseña con éxito.'
    } catch (e) {
        const error = new Error('Lo sentimos, ha ocurrido un error interno')
        return error
    }
}

/**
 * Busca a todos los usuarios.
 * @param {Object} _root No usado
 * @param {Oject} args Argumentos de la petición
 * @return {Object} GQL response
 */

async function Search(_root, args, info, context ) {
    try {
        const { search, min, max } = args
        let whereSearch = {}
        if (search) {
            whereSearch = {
                [Op.or]: [
                    { name: { [Op.substring]: search.replace(/\s+/g, ' ') } },
                    { username: { [Op.substring]: search.replace(/\s+/g, ' ') } },
                    { email: { [Op.substring]: search.replace(/\s+/g, ' ') } },
                ]
            }
        }
        const data = await User.findAll({
            attributes: ['id', 'name', 'username', 'email', 'password'], where: {
                ...whereSearch,
            }, limit: [min || 0, max || 10]
        })
        
        return  data
    } catch (e) {
        const error = new Error('Lo sentimos, ha ocurrido un error interno')
        console.log(error)
        return e
    }
}

module.exports = {
    login,
    UpdateAvatar,
    UpdateUser,
    Search,
}   