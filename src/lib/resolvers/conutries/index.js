'use strict'
const { ApolloError } = require('apollo-server-errors')
const CountriesModel = require('../../../models/locations/CountriesModel')
const { Op } = require('sequelize')
const { deCode } = require('../../../utils')
// Queries
const countriesQueries = {
    countries: async root => {
        try {
            const data = await CountriesModel.findAll({ attributes: ['c_id', 'c_name',  'c_calCod', 'c_state' ] })
            if (data.length) return data
            else{
                return []
            }
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}
// Queries
const getCountriesQueries = {
    getOneCountry: async (_root, args )=> {
        // Argumentos --- Datos entrantes para hacer la consulta
        const { c_calCod } = args
        try {
            const data = await CountriesModel.findOne({ attributes: ['c_id' ,'c_name', 'c_calCod', 'c_state'], where: { c_calCod: c_calCod } })
            if (data.length < 0 ) return 'No se encontró ningún resultado'
            return data
        } catch(e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }

}


// Mutations 
const countriesMutation = {
    createCountries: async (_root, { input }) => {
        try {
          const res = await  CountriesModel.create({ ...input })    
          if(res !== null ) return res
        } catch (e) {
            return  console.log(e)
        }
    }
}

module.exports = {
    // Busca a todos los PAÍSES
    countriesQueries,
    // Busca a un País
    getCountriesQueries,
    // Crea un país
    countriesMutation
}