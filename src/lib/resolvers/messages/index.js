'use strict'
const { ApolloError } = require('apollo-server-errors')
const User = require('../../../models/UsersLogin/Users')
const bcryptjs = require('bcryptjs')
const recoverAccountController = require('../../../controller/RecoverAccount')

const messages = [];

//Query para los mensajes 
const messagesQuery = {
    messages: () => messages,
}

//Mutation para los mensajes
const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);
const PostMessagesMutation = {

    postMessage: (parent, { user, content, hour }) => {
        const id = messages.length;
        messages.push({
          id,
          user,
          content,
          hour
        });
        subscribers.forEach((fn) => fn());
        return id;
    },
}
module.exports = {
    messagesQuery,
    PostMessagesMutation,
}