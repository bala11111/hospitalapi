const mongoose = require('mongoose');

//Creating Database connection
mongoose.connect('mongodb://localhost/Hospital');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

//Connection oppened successfuly
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;