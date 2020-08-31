const mongoose = require('mongoose');

const AcompanhamentoSchema = new mongoose.Schema({
    cliente:{type: String},
    objetivo:{type: String},
    praticaAtividade:{type: Boolean},
    praticaAtividadeQual:{type: String},
    praticaAtividadeTempo:{type: String},
    fumante:{type: Boolean},
    fumanteTempo:{type: String},
    dieta:{type: Boolean},
    maxPeso:{type: String},
    medicamento:{type: Boolean},
    restricao:{type: Boolean},
    restricaoQual:{type: String},
    problema:{type: String},
    createAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Acompanhamento', AcompanhamentoSchema);