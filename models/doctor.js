const mongoose = require('mongoose');

//Creating Doctor Schema
const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    }
},{
    timestamps:true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;