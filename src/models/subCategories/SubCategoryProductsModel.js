const Sequelize = require('sequelize')
const connect = require('../database')
const sequelize = connect()
const { enCode } = require('../../utils')
const CategoryProductsModel = require('../categories/CategoryProductsModel')

// sequelize.sync()

const SubCategoryProductsModel = sequelize.define('subcategoryproducts', {
    subcatpId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    catpro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: CategoryProductsModel,
            key: 'catpro_id'
        },
        get (x) { return this.getDataValue(x) ? enCode(this.getDataValue(x)) : null }
    },
    catpro_id: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    subcatPhoto: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    subcatState: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    subcatdatCre: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    subcatdatMod: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    timestamps: false,
})

module.exports = SubCategoryProductsModel