const mongoose = require('mongoose');

const FinanceiroSchema = new mongoose.Schema({
   tipoParcela:{
        type: String,
        required: true
   },
   cliente:{
       type: String,
       required: true
   },
   sequencia: {
       type: String,
       required: true
   },
   vencimento: {
       type: Date,
       required: true
   },
   valor: {
       type: Number,
       required: true
   },
   createAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Financeiro', FinanceiroSchema);