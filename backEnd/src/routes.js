const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

routes.post('/login', SessionsController.login);

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;