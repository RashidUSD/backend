const { areasQueries } = require('./area')
const { coursesQueries } = require('./courses')
const { booksQueries } = require('./books')
const { authorsQueries } = require('./autors')
const { lectorQueries } = require('./lectors')
const { getUser, Search } = require('./userLogin')
const { productsQueries } = require('./products')
const { categoryQueries } = require('./categories')
const { SubCategoryQueries } = require('./subCategories')
const { RecoverAccount } = require('./recoverAccount')
const { messagesQuery } = require('./messages')
const { pqrQueries, pqrTypesQueries, pqrGetOneQueries } = require('./pqr')
const { countriesQueries, getCountriesQueries } = require('./conutries')
const { departmentsQueries } = require('./departments')
const { MunicipalitiesQueries } = require('./municipalities')


module.exports = {
    ...areasQueries,
    ...coursesQueries,
    ...booksQueries,
    ...authorsQueries,
    ...lectorQueries,
    ...getUser,
    ...Search,
    ...productsQueries,
    ...categoryQueries,
    ...SubCategoryQueries,
    ...RecoverAccount,
    // Mensajes
    ...messagesQuery,
    // Busca a todos los PQR
    ...pqrQueries,
    // Tipos de PQR
    ...pqrTypesQueries,
    // Busca a un  PQR
    ...pqrGetOneQueries,
    // Busca todos los Países
    ...countriesQueries,
    // Busca un País
    ...getCountriesQueries,
    // Busca todos los departments
    ...departmentsQueries,
    // Busca todos los Municipios
    ...MunicipalitiesQueries
    
}