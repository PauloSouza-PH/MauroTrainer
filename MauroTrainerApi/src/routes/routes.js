const express = require('express');
const routes = express.Router();
const InstructorController = require('../controllers/InstructorController');
const AlunosController = require('../controllers/AlunosController');

routes.get('/instrutores', InstructorController.index);
routes.post('/instrutor', InstructorController.store);
routes.get('/instrutor/:id', InstructorController.show);
routes.put('/instrutor/:id', InstructorController.update);
routes.delete('/instrutor/:id', InstructorController.destroy);

routes.get('/alunos', AlunosController.index);
routes.post('/aluno', AlunosController.store);
routes.get('/aluno/:id', AlunosController.show);
routes.put('/aluno/:id', AlunosController.update);
routes.delete('/aluno/:id', AlunosController.destroy);

module.exports = routes;