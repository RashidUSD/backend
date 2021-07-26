'use strict'
const { ApolloError } = require('apollo-server-errors')
const AreasModel = require('../../../models/area/AreasModel')

// Queries
const areasQueries = {
    areas: async (root, { aState }, context, info) => {
        try {
            AreasModel
            return console.log('object')
        } catch (e) {
            return e
        }
    }
}

// Mutations 
const areasMutations = {
    createArea: async (_root, { input }) => {
        try {
            AreasModel.create({ ...input })          
            return AreasModel
        } catch (e) {
            return e
        }
    }
}


// Types
const areasTypes = {
    Area: async ( ) => {
            try {
                console.log('object')

                // const attributes = getAttributes(ClientsModel, info)
                // const data = await ClientsModel.findOne({ attributes, where: { cId: deCode(parent.cId) } })
                return console.log('object')
            } catch { return null }
        },
}


module.exports = {
    areasQueries,
    areasMutations,
    areasTypes
}