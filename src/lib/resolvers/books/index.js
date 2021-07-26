'use strict'
const { ApolloError } = require('apollo-server-errors')
const booksModel = require('../../../models/books/books')
const authorsModel = require('../../../models/autors/autors')
const { Op } = require('sequelize')
const { deCode } = require('../../../utils')

// Queries
const booksQueries = {
    books: async (_root ) => {
        try {
            const res = await booksModel.findAll({ attributes:[ 'bId',  'title', 'description', 'topicBook', 'autId',] })
            return res
        } catch (e) {
            return e
        }
        
    }
}

// Mutations 
const booksMutations = {
    createBooks: async (_root, { input }) => {
        try {
          const res = await  booksModel.create({ ...input })        
              /** Guardar el registro */
            return res
        } catch (e) {
            return  console.log(e)
        }
    }
}


// Types
const booksTypes = {
    // relación de un autor con un autor
    Books: {
        autor: async ({ autId }) => {
        console.log(autId)
             try { //deCode si viene encriptado 
                const data = await authorsModel.findOne({ where: { autId: deCode(autId) } })
                return data
            } catch(e) {
                return e
            }
        }
    }
}


module.exports = {
    booksQueries,
    booksMutations,
    booksTypes
}