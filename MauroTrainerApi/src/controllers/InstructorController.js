const mongoose = require('mongoose');
const Instructor = mongoose.model('Instructor');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const instructors = await Instructor.paginate({},{page, limit: 10});
        return res.json(instructors);
    },

    async show(req, res){
        const instrutor = await Instructor.findById(req.params.id);
        return res.json(instrutor);
    },

    async update(req, res){
        const instrutor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(instrutor);
    },

    async store(req, res){
        const instrutor = await Instructor.create(req.body);
        return res.json(instrutor);
    },

    async destroy(req, res){
        await Instructor.findByIdAndRemove(req.params.id);
        return res.send();
    }
};

