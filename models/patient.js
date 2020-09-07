const mongoose = require("mongoose");

//Creating Patient Schema
const patientSchema = new mongoose.Schema({
    phoneno: {
        type: String,
        require:true,
        unique: true
    },

    name: {
        type: String,
        required: true,
    },

    reports: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Report' 
        }

    ]
},{
    timestamps:true
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;