const Sequelize = require('sequelize');

const sequelize = new Sequelize("sacomercio","casafer","707901",{
    host: '192.168.1.4',
    dialect: 'mysql'
});
sequelize.authenticate()
.then(function(){
    console.log("SUCESSO : CONECTADO COM BANCO.");
}).catch(function(){
    console.log("ERRO : AO CONECTAR AO BANCO DE DADOS.");
});



module.exports = sequelize;