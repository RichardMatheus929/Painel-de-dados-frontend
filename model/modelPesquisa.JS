const { Int32 } = require('mongodb')
var conexao = require('../config/conexao')

let colecao1 = 'escolas_premiadas'

var escolasschema = conexao.Schema ({
    Escola:{type:String},
    Cidade:{type:String},
    Estado: {type:String},
    Premios: {type:String},
    qntdpremiacao:{type:Number},
    Orientadores: {type:String},
    Anos: {type:String}
})

module.exports = conexao.model(colecao1,escolasschema);