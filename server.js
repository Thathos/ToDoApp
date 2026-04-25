const express = require('express'); //bring in express

const app = express(); //creating an express app

app.use(express.json()); //parse json bodies

app.use(express.static('pubic')); //serve static files from "public" folder
