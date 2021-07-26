'use strict'
const { ApolloError } = require('apollo-server-errors')
const MunicipalitiesModel = require('../../../models/locations/MunicipalitiesModel')

// Queries
const MunicipalitiesQueries = {
    getMunicipalities: async root => {
        console.log('object')
        try {
            const data = await MunicipalitiesModel.findAll({ attributes: ['m_id', 'd_id',  'm_name', 'm_state' ] })
            return data
            
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}
// Mutations 
const MunicipalitiesMutation = {
    createMunicipalities: async (_root, { input }) => {
        const { m_name, d_id } = input
        try {
          const data = await MunicipalitiesModel.create({ m_name, d_id: deCode(d_id), d_state: 1 }).catch(x => error = true)  
            return data
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}

module.exports = {
    // Busca a todos los PAÍSES
    MunicipalitiesQueries,
    // Crea un Municipio o cuidad como lo quieras llamar
    MunicipalitiesMutation
}