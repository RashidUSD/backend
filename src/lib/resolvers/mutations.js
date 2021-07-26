const { areasMutations } = require('./area')
const { coursesMutations } = require('./courses')
const { booksMutations } = require('./books')
const { authorsMutations } = require('./autors')
const { lectorMutations } = require('./lectors')
const { registerUserMutation, loginMutation, updateAvatar, UpdateInfo } = require('./userLogin')
const { PostMessagesMutation } = require('./messages')
const { createPqrMutations } = require('./pqr')
const { countriesMutation } = require('./conutries')
const { departmentsMutation } = require('./departments')
const { MunicipalitiesMutation } = require('./municipalities')

module.exports = {
    ...areasMutations,
    ...coursesMutations,
    ...booksMutations,
    ...authorsMutations,
    ...lectorMutations,
    ...registerUserMutation,
    ...loginMutation,
    ...updateAvatar,
    ...UpdateInfo,
    ...PostMessagesMutation,
    //´Para crear un PQR 
    ...createPqrMutations,
    //´Para crear un PAÍS 
    ...countriesMutation,
    ...departmentsMutation,
    ...MunicipalitiesMutation,
    
}