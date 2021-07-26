const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode, validationID } = require('../../utils')
const CountriesModel = require('../locations/CountriesModel')
const DepartmentsModel = require('../locations/DepartmentsModel')
const MunicipalitiesModel = require('../locations/MunicipalitiesModel')

// sequelize.sync()

const Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get(x) { return enCode(this.getDataValue(x)) }
    },

    name: {
        type: Sequelize.STRING,
        require: true
    },
    username: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true,
    },
    lastName: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true,
    },
    email: {
        type: Sequelize.STRING,
        require: true,
        trim: true,
        unique: true,
    },
    avatar: {
        type: Sequelize.STRING,
        trim: true,
    },
    // News
    u_token: {
        type: Sequelize.STRING(100),
        trim: true,
    },
    u_phoNum: {
        type: Sequelize.STRING(50),
    },
    U_location: {
        type: Sequelize.STRING(100)
    },
    up_lat: {
        type: Sequelize.STRING(30)
    },
    up_lon: {
        type: Sequelize.STRING(30)
    },
    up_ideDoc: {
        type: Sequelize.STRING(50)
    },
    // Locations
    c_id: {
        type: Sequelize.INTEGER,
        onUpdate: null,
        onDelete: null,
        references: {
            model: CountriesModel,
            key: 'c_id'
        },
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    d_id: {
        type: Sequelize.INTEGER,
        onUpdate: null,
        onDelete: null,
        references: {
            model: DepartmentsModel,
            key: 'd_id'
        },
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    m_id: {
        type: Sequelize.INTEGER,
        onUpdate: null,
        onDelete: null,
        references: {
            model: MunicipalitiesModel,
            key: 'm_id'
        },
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    // 
    siteWeb: {
        type: Sequelize.STRING,
        trim: true,
    },
    description: {
        type: Sequelize.STRING,
        trim: true,
    },
    password: {
        type: Sequelize.STRING,
        trim: true,
        require: true,
    },
    createAt: {
        type: Sequelize.DATE,
        default: Date.now(),
    },

}, )

module.exports = Users