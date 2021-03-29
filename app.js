const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    console.log(req.body)
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    // res.header("Access-Control-Allow-Headers", "*");
    res.header('Content-Type', 'application/x-www-form-urlencoded');
    next();
});

module.exports = app; 
