const { Int32 } = require('mongodb')
var conexao = require('../config/conexao')
let colecao = 'tabela_premiados'


var usuarioschema = conexao.Schema({
Categoria_de_premiação:{type:String},
Integrantes:{type:String},
Nome_do_projeto:{type:String},
Escola:{type:String},
Cidade:{type:String},
Orientador:{type:String},
Ano : {type:String},
Estado: {type:String},
Componentes: {type:Number}
})


module.exports = conexao.model(colecao,usuarioschema);

