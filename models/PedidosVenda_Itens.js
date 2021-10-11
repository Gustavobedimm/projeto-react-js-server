const Sequelize = require('sequelize');
const db = require('./db');
//const produtos = require('./Produtos');


const pedidosvenda_itens = db.define('pedidosvenda_itens', {
    Ped_Numero : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Pro_Codigo : {
        type : Sequelize.INTEGER,
        allowNull: false
        
    },
    PedItm_ID : {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    PedItm_Qtde : {
        type : Sequelize.INTEGER,
        allowNull: false

    },
    PedItm_VlrUnitario : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
    PedItm_VlrTotal : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
    PedItm_PercDesc : {
        type : Sequelize.STRING,
        allowNull: false

    },
    PedItm_VlrDesc : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
},
    { 
        timestamps: false,
        tableName: 'pedidosvenda_itens'
         
    }
    );
    //pedidosvenda_itens.hasMany(produtos, {
    //    foreignKey : 'Pro_Codigo'
    //})

module.exports = pedidosvenda_itens;