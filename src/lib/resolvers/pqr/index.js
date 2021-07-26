'use strict'
const { ApolloError } = require('apollo-server-errors')
const coursesModel = require('../../../models/courses/courses')
const PQR = require('../../../models/PQR/PQR')
const TypePQR = require('../../../models/PQR/TypPQR')
const { deCode } = require('../../../utils')

// Queries
const pqrQueries = {
    pqr: async (root) => {
        try {
            const res = await PQR.findAll({ attributes: ['hpqrId', /* Relación de Id con el tipo de PQR ----> */ 'thpId', 'hpqrQuestion', 'hpqrAnswer', 'hpqrState', 'hpqrDatCre', 'hpqrDatMod'] })
            if (res.length) return res
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}

// Queries
const pqrTypesQueries = {
    typepqr: async (root) => {
        try {
            const res = await TypePQR.findAll({ attributes: ['thpId', 'thpName', 'thpIcon'], where: { thpState: 1 } })
            if (res.length) return res
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}
// Queries

/** *  Obtiene un pqr.
 * @param {Object} _root No usado
 * @param {Oject} input Entrada de datos
 * @param {Oject} args Argumentos 
 * @return {Object} GQL response
 */
const pqrGetOneQueries = {
    getOnePqr: async (_root, args, input) => {
        try {
            const { hpqrId } = args
            console.log(hpqrId)
            const data = await TypePQR.findOne({
                attributes: ['thpId', 'thpName', 'thpIcon'],
                include: [{
                    attributes: ['hpqrId', 'hpqrQuestion', 'hpqrAnswer'],
                    model: PQR,
                    where: { hpqrId }
                }]
            })
            if (data) return data

            return 'No se ha encontrado ningún resultado.'
        } catch (e) {
            throw new ApolloError('Algo ha salido mal, intenta nuevamente.', 500, e)
        }
    }
}

// Mutations 
const createPqrMutations = {
    createPqr: async (_root, { input }) => {
        console.log(input)
        try {
            const data = await PQR.create({ ...input })
            return data
        } catch (e) {
            throw new ApolloError('No ha sido posible procesar su solicitud.', 500, e)
        }
    }
}


// Types
const coursesTypes = {
    Courses: async () => {
        try {
            console.log('object')
            // const data = await ClientsModel.findOne({ attributes, where: { cId: deCode(parent.cId) } })
            return data
        } catch { return null }
    },
}


module.exports = {
    // Busca a todos los PQR
    pqrQueries,
    // Buscamos todos los tipos
    pqrTypesQueries,
    // Busca a un PQR
    pqrGetOneQueries,
    // Mutacion para crear un PQR
    createPqrMutations,
}