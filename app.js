const express = require('express');
const cors = require('cors');
const app = express();
const { Op } = require("sequelize");

app.use(cors());
app.use(express.json());

const Vendedores = require('./models/Vendedores'); 
const Pedidos = require('./models/Pedidos');
const PedidosVenda_Itens = require('./models/PedidosVenda_Itens');
const Produtos = require('./models/Produtos');
const Cliente = require('./models/Cliente');

//****************************************************/
function formataData(dataParametro){
    var data = new Date(dataParametro),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), 
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
        const dataFormatada = anoF+"-"+mesF+"-"+diaF;
        return dataFormatada;
}

//****************************************************/
app.get('/', async (req,res) => {
    res.send("Pagina Inicial");
});
//****************************************************/
app.get('/consultarVendedores', async (req,res) => {
    const vendedores = await Vendedores.findAll({
        where : {
            Ven_Situacao : 'A'
    }
    });
    return res.status(200).json(vendedores);
});
//****************************************************/

app.get('/consultarPedidosVenda', async (req,res) => {
    const dataInicio = req.query.dataInicio;
    const dataFim = req.query.dataFim;
    const dataInicioFormatada = formataData(dataInicio);
    const dataFimFormatada = formataData(dataFim);
    const pedidos = await Pedidos.findAll(
        {
            where : {
                Ped_Data : {[Op.between]: [dataInicioFormatada, dataFimFormatada],},
            }
        }
    );
    return res.status(200).json(pedidos);
});
//****************************************************/
app.get('/consultaItens', async (req,res) => {
    const nrPedido = req.query.PedNumero;
    PedidosVenda_Itens.belongsTo(Produtos, {foreignKey: 'Pro_Codigo', sourceKey: 'Pro_Codigo'});
    Produtos.belongsTo(PedidosVenda_Itens, {foreignKey: 'Pro_Codigo', targetKey: 'Pro_Codigo'});
    const itensPedidos = await PedidosVenda_Itens.findAll(
        {   
             include : {
                model : Produtos,
                required : true
            },
            where : {
                Ped_Numero : nrPedido,
            }
            
        });
        
    return res.status(200).json(itensPedidos);
});
//****************************************************/
app.get('/consultaVendedor', async (req,res) => {
    const cod_vendedor = req.query.Ped_Vendedores;
    const vendedor = await Vendedores.findByPk(cod_vendedor);
    return res.status(200).json(vendedor);
});
//****************************************************/
app.get('/consultaCliente', async (req,res) => {
    const cod_cliente = req.query.Cli_Codigo;
    const cliente = await Cliente.findByPk(cod_cliente);
    return res.status(200).json(cliente);
});
//****************************************************/
app.get('/consultaProduto', async (req,res) => {
    const cod_prod = req.query.Pro_Codigo;
    const produto = await Produtos.findByPk(cod_prod);
    return res.status(200).json(produto);
});
//****************************************************/

app.listen(3001,() => {
console.log("O Servidor esta rodando na porta 3001");
}); 
//****************************************************/