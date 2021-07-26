const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')

// sequelize.sync()

const CountriesModel = sequelize.define('countries', {
    c_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    c_name: {
        type: Sequelize.STRING(100),
    },
    c_calCod: {
        type: Sequelize.STRING(10),
        defaultValue: 1,
    },
    c_state: {
        type: Sequelize.SMALLINT,
    },
    c_datCre: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
        default: Date.now(),
    },
    c_datMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
},
{
    timestamps: false
})

module.exports = CountriesModel