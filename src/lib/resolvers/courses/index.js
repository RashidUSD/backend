'use strict'
const { ApolloError } = require('apollo-server-errors')
const coursesModel = require('../../../models/courses/courses')

// Queries
const coursesQueries = {
    courses: async ( root ) => {
        try {
            const res = await coursesModel.findAll({ attributes:[ 'cId', 'title', 'description', 'topic'] })
            return res
        } catch (e) {
            return e
        }
    }
}

// Mutations 
const coursesMutations = {
    createCourses: async (_root, { input }) => {
        try {
          const res = await  coursesModel.create({ ...input })          
            return res
        } catch (e) {
            return e
        }
    }
}


// Types
const coursesTypes = {
    Courses: async ( ) => {
            try {
                console.log('object')
                // const data = await ClientsModel.findOne({ attributes, where: { cId: deCode(parent.cId) } })
                return data
            } catch { return null }
    },
}


module.exports = {
    coursesQueries,
    coursesMutations,
    coursesTypes
}