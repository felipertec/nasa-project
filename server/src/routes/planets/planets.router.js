const express = require('express');

//import controller planets here
const {
    getAllPlanets,
} = planetsController = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllPlanets);

module.exports = planetsRouter;