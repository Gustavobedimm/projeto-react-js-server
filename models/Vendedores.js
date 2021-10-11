const Sequelize = require('sequelize');
const db = require('./db');

const Vendedores = db.define('vendedores', {
    Ven_Codigo : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Ven_Nome : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Ven_DescMax : {
        type : Sequelize.STRING,
        allowNull: true

    },
    Ven_Situacao : {
        type : Sequelize.STRING,
        allowNull: false

    },
    Ven_Email : {
        type : Sequelize.STRING,
        allowNull: true
    }
},{ timestamps: false });
//Cria a tabela no banco caso nao esteja criada
//User.sync();
//Verifica se tem alguma alteração na tabela
//User.sync({ alter : true});


module.exports = Vendedores;