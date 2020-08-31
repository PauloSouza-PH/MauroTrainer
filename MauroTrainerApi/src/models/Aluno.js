const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AlunoSchema = new mongoose.Schema({
    cgc:{
        type: String,
        required: false
    },
    nome: {
        type: String,
        require: false
    },
    nascimento: {
        type: Date,
        required: false
    },
    UF:{
        type: String,
        required: false,        
    },
    municipio: {
        type: String,
        required: false
    },
    bairro:{
        type: String,
        required:false
    },
    endereco: {
        type: String,
        required: false
    },
    numero: {
        type: String,
        required: false
    },
    celular:{
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    matricula:{
        type: String,
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

AlunoSchema.plugin(mongoosePaginate);

mongoose.model('Aluno', AlunoSchema);