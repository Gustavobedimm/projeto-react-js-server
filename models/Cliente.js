const Sequelize = require('sequelize');
const db = require('./db');


const cliente = db.define('clientes', {
    Cli_Codigo : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Cli_Nome : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Cli_Email : {
        type : Sequelize.STRING,
        allowNull: false

    }    
},
    { 
        timestamps: false,
        tableName: 'clientes'
         
    }
    );

module.exports = cliente;