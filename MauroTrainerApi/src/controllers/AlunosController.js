const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const alunos = await Aluno.paginate({},{page, limit: 10});
        return res.json(alunos);
    },

    async show(req, res){
        const alunos = await Aluno.findById(req.params.id);
        return res.json(alunos);
    },

    async update(req, res){
        const alunos = await Aluno.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(alunos);
    },

    async store(req, res){
        const alunos = await Aluno.create(req.body);
        return res.json(alunos);
    },

    async destroy(req, res){
        await Aluno.findByIdAndRemove(req.params.id);
        return res.send();
    }
};