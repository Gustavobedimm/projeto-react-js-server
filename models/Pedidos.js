const Sequelize = require('sequelize');
const db = require('./db');


const pedidosvenda = db.define('pedidosvenda', {
    Ped_Numero : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Ped_Data : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Ped_Hora : {
        type : Sequelize.TIME,
        allowNull: false

    },
    Ped_PercDesc : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
    Ped_VlrDesc : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
    Ped_Valor : {
        type : Sequelize.DOUBLE,
        allowNull: false

    },
    Ped_VlrMercad : {
        type : Sequelize.DOUBLE,
        allowNull: false
    },
    Ped_Situacao : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Cli_Codigo : {
        type : Sequelize.INTEGER,
        allowNull: false
    },
    Ped_Vendedores : {
        type : Sequelize.STRING,
        allowNull: false
    }
},
    { 
        timestamps: false,
        tableName: 'pedidosvenda'
         
    }
    );

module.exports = pedidosvenda;