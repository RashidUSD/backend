const { areasTypes } = require('./area')    
const { coursesTypes } = require('./courses')    
const { booksTypes } = require('./books')    
const { authorsTypes } = require('./autors')    
const { lectorTypes } = require('./lectors')    

module.exports = {
    ...areasTypes,
    ...coursesTypes,
    ...booksTypes,
    ...authorsTypes,
    ...lectorTypes
}