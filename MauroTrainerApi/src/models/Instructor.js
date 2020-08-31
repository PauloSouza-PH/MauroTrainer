const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const InstructorSchema = new mongoose.Schema({
    cgc:{
        type: String,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    nascimento: {
        type: Date,
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

InstructorSchema.plugin(mongoosePaginate);

mongoose.model('Instructor', InstructorSchema);