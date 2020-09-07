const express = require('express');
const app = express();
const port = 5000;//Port Number

//Setting up mongoose
const db = require('./config/mongoose');
app.use(express.urlencoded());
require('dotenv').config();

//Paasport JWT Strategy
const passportJWT = require('./config/passport-jwt-strategy');

//Takes us to the routes
app.use('/', require('./routes'));

//App starts
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while running the server ${err}`);
    }

    console.log(`Server is up and running on port ${port}`);
})