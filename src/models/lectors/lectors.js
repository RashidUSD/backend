const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode, validationID } = require('../../utils')
const booksModel = require('../books/books')

// sequelize.sync()

const lectorModel = sequelize.define('lectors', {
    lId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) { return enCode(this.getDataValue(x)) }
    },
    bId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: booksModel,
            key: 'bId'
        },
    },
    name: {
        type: Sequelize.STRING,
    },
    
    lastName: {
        type: Sequelize.STRING,
    },
    typeBooks: {
        type: Sequelize.STRING,
    },
    
},
)

module.exports = lectorModel