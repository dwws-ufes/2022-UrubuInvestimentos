import express from "express";

const SessionController = require('./controllers/SessionController');
const AccountsController = require('./controllers/AccountsController');
const ProfileController = require('./controllers/ProfileController');
const InvestmentController = require('./controllers/InvestmentController');
const CardController = require('./controllers/CardController');
const GameController = require('./controllers/GameController');
const RegisterController = require('./controllers/RegisterController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/perfil', ProfileController.index);
routes.put('/perfil', ProfileController.modify);


routes.get('/accounts', AccountsController.index);
routes.post('/accounts', AccountsController.create);
routes.delete('/accounts', AccountsController.delete);

routes.get('/tela-investimentos', InvestmentController.index);
routes.post('/tela-investimentos', InvestmentController.create);
routes.delete('/tela-investimentos/:investmentId', InvestmentController.delete);

routes.get('/cards', CardController.index);
routes.post('/cards', CardController.create);
routes.delete('/cards/:cardId', CardController.delete);

routes.get('/', GameController.index);
routes.post('/', GameController.create);
routes.delete('/:gameId', GameController.delete);

routes.post('/register', RegisterController.create);

module.exports = routes;