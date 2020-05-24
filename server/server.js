var express = require("express");
var app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
app.use(bodyParser.json())
const route = require('./routes/registerAndLogin')

mongoose.connect(process.env.DB , function(){
    console.log('we are connected to the db')
})


app.use('/home',route)
app.listen(port, () => {
 console.log("Server running on port : ",port);
});