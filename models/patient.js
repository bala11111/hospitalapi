const mongoose = require("mongoose");
const reports = mongoose.Schema({});
const patientSchema = new mongoose.Mongoose.Schema({
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
        status: {
            type: String,
            required: true
        },
        date: {
            type:String,
            required: true
        },

        doc: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "Doctor"
        }
       }

    ]
},{
    timestamps:true
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;