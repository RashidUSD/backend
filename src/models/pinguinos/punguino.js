const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode, validationID } = require('../../utils')

// sequelize.sync()

const pinguino = sequelize.define('Pinguinos', {
    idP: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreP: {
        type: Sequelize.STRING(120),
        allowNull: false
    },
    puntosP: {
        type: Sequelize.INTEGER,
    },
    cumpleaños: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 1
    },
    pinguinoDatCre: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    pinguinoDatMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = pinguino