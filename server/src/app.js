const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

//module router here
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));



app.use(express.json());
app.use(express.static(path.join(__dirname, '..','public')));
app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname, '..','public','index.html'));
})

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);

module.exports = app;