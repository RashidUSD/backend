const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')
const DepartmentsModel = require('./DepartmentsModel')

// sequelize.sync()


const MunicipalitiesModel = sequelize.define('municipalities', {
    m_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) {return enCode(this.getDataValue(x))}
    },
    d_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: DepartmentsModel,
            key: 'd_id'
        }
    },
    m_name: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    m_state: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 1,

    },
    m_datCre: {
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        type: Sequelize.DATE,
        default: Date.now(),
    },
    m_datMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
},{
    timestamps: false,
})

module.exports = MunicipalitiesModel