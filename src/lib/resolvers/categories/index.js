'use strict'
const { ApolloError } = require('apollo-server-errors')
const booksModel = require('../../../models/books/books')
const { Op } = require('sequelize')
const { deCode } = require('../../../utils')
const CategoryProductsModel = require('../../../models/categories/CategoryProductsModel')

// Queries
const categoryQueries = {
    categorieproduct: async (_root ) => {
        try {
            const res = await CategoryProductsModel.findAll({ attributes:[ 'catpro_id',  'ctgpro_name'] })
            return res
        } catch (e) {
            return e
        }
        
    }
}

// Mutations 
const lectorMutations = {
    createLectors: async (_root, { input }) => {
        try {
          const res = await  lectorModel.create({ ...input })          
            console.log(res)
            return res
        } catch (e) {
            return  console.log(e)
        }
    }
}


// Types
const lectorTypes = {
    // relación de un autor con un autor
    Lectors: {
        books: async ({ bId }) => {
             try { //deCode si viene encriptado 
                const data = await booksModel.findOne({ where: { bId: deCode(bId) } })
                return data
            } catch(e) {
                return e
            }
        }
    }
}


module.exports = {
    categoryQueries,
    lectorMutations,
    lectorTypes
}