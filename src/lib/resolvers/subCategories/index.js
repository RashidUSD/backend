'use strict'
const { ApolloError } = require('apollo-server-errors')
const SubCategoryProductsModel = require('../../../models/subCategories/SubCategoryProductsModel')

// Queries
const SubCategoryQueries = {
    subCategorieproduct: async (_root ) => {
        try {
            const res = await SubCategoryProductsModel.findAll({ attributes:[ 'subcatpId'] })
            return res
        } catch (e) {
            return new ApolloError(e)
        }
        
    }
}


module.exports = {
    SubCategoryQueries,
}