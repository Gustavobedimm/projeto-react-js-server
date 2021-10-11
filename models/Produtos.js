const Sequelize = require('sequelize');
const db = require('./db');



const produtos = db.define('produtos', {
    Pro_Codigo : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Pro_Descricao : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Gru_Codigo : {
        type : Sequelize.INTEGER,
        allowNull: false

    },
    SbGr_Codigo : {
        type : Sequelize.INTEGER,
        allowNull: false

    },
},
    { 
        timestamps: false,
        tableName: 'produtos'
         
    }
    );

   

module.exports = produtos;