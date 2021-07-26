const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')
const authorsModel = require('../autors/autors')

// sequelize.sync()

const booksModel = sequelize.define('books', {
    bId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) { return enCode(this.getDataValue(x)) }
    },
    autId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: authorsModel,
            key: 'autId'
        },
    },
    title: {
        type: Sequelize.STRING,
    },
    
    description: {
        type: Sequelize.STRING,
    },
    topicBook: {
        type: Sequelize.STRING,
    },
    
},
)

module.exports = booksModel