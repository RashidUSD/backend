'use strict'
const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/UsersLogin/Users')
const bcryptjs = require('bcryptjs')
const recoverAccountController = require('../../../controller/RecoverAccount')

//Busca a los usuarios registrados 
const RecoverAccount = {
    UserRecoverAccount: async(_root, search, args, min, max) => recoverAccountController.recoverAccount(_root, search, args, min, max)
}

module.exports = {
    // Recupera la cuenta si se olvida la contraseña
    RecoverAccount,
}