const express = require('express');
const app = express();
const port = 8000;

const db = require('./config/mongoose');
app.use(express.urlencoded());

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err)
    {
        console.log(`Error while running the server ${err}`);
    }

    console.log(`Server is up and running on port ${port}`);
})