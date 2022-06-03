const express = require('express');

//import controller planets here
const {
    httpGetAllPlanets,
} = planetsController = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', httpGetAllPlanets);

module.exports = planetsRouter;