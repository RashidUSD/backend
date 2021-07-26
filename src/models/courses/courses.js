const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')

// sequelize.sync()

const coursesModel = sequelize.define('courses', {
    cId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) { return enCode(this.getDataValue(x)) }
    },
    title: {
        type: Sequelize.STRING,
    },
    
    description: {
        type: Sequelize.STRING,
    },
    topic: {
        type: Sequelize.STRING,
    },
    
},
)

module.exports = coursesModel