const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')

// sequelize.sync()

const productsModel = sequelize.define('products', {
    pro_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    // scpro_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     onUpdate: 'CASCADE',
    //     onDelete: 'CASCADE',
    //     references: {
    //         model: SubCategoryProductsModel,
    //         key: 'scpro_id'
    //     },
    //     get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    // },
    pro_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    pro_description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pro_image: {
        type: Sequelize.STRING,
        trim: true,
    },
    pro_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // Ancho
    pro_width: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    // Alto
    pro_height: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    // Largo
    pro_length: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    // Peso
    pro_weight: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    // Cantidad
    pro_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pro_available: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    // Destacado
    pro_outstanding: {
        type: Sequelize.INTEGER
    },
    // Entrega
    pro_delivery: {
        type: Sequelize.SMALLINT
    },
    pro_state: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    pro_datCre: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    pro_datMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    timestamps: false
})


module.exports = productsModel