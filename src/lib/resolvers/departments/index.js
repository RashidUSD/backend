'use strict'
const { ApolloError } = require('apollo-server-errors')
const CountriesModel = require('../../../models/locations/CountriesModel')
const DepartmentsModel = require('../../../models/locations/DepartmentsModel')
const { linkBelongsTo } = require('../../../utils')
const { Op } = require('sequelize')

// Queries
const departmentsQueries = {
    departments: async (_root, args, { input }) => {
        // const { d_id } = args
        // console.log(d_id)
        try {
            // linkBelongsTo(DepartmentsModel, CountriesModel, 'c_id', 'c_id')

            // /** verificando que parámetro es para hacer la consulta */
            // /** verificando que parametro es para hacer la consulta */
            // const data = await DepartmentsModel.findOne({
            //     attributes: ['d_name', 'd_state'],
            //     include: [{
            //         attributes: ['c_id', 'c_name', 'c_calCod'],
            //         model: CountriesModel
            //     }],
            //     where: { d_id  }
            // })
            // console.log(data)
            const data = await DepartmentsModel.findAll({ attributes: ['d_id', 'c_id',  'd_name', 'd_state' ] })
            return data
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}
// Mutations 
const departmentsMutation = {
    createDepartments: async (_root, { input }) => {
        const { d_name, c_id } = input
        console.log(input)
        try {
            //   const res = await  DepartmentsModel.create({ ...input })   
            const data = await DepartmentsModel.create({ d_name, c_id: deCode(c_id), d_state: 1 }).catch(x => error = true)

            return data
        } catch (e) {
            return console.log(e)
        }
    }
}

module.exports = {
    // Busca a todos los PAÍSES
    departmentsQueries,
    // Crea un país
    departmentsMutation
}