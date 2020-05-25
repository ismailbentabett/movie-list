var express = require("express");
var app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')


const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(cors());
// Add headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080/register"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080/register");
    res.header("Access-Control-Allow-Origin", "http://localhost:8080/login"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080/login");
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
 

    next();
  })

app.use(bodyParser.json())

const route = require('./routes/registerAndLogin')

mongoose.connect(process.env.DB ,{ useNewUrlParser: true } , function(){
    console.log('we are connected to the db')
})


app.use('/home',route)
app.listen(port, () => {
 console.log("Server running on port : ",port);
});