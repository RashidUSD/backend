'use strict'
const { ApolloError } = require('apollo-server-errors')
const authorsModel = require('../../../models/autors/autors')
const booksModel = require('../../../models/books/books')

// Queries
const authorsQueries = {
    authors: async (_root ) => {
        try {
            const res = await authorsModel.findAll({ attributes:[ 'autId', 'name' ] })
            return res
        } catch (e) {
            return e
        }
    }
}

// Mutations 
const authorsMutations = {
    createAutor: async (_root, { input }) => {
        try {
          const res = await  authorsModel.create({ ...input })          
            return res
        } catch (e) {
            return  console.log(e)
        }
    }
}


// Types
const authorsTypes = {
    Authors: async ( ) => {
            try {
                const res = (9, info)
                const data = await authorsModel.findOne({ attributes, where: { cId: deCode(parent.cId) } })
                return data
            } catch { return null }
    },
}


module.exports = {
    authorsQueries,
    authorsMutations,
    authorsTypes
}