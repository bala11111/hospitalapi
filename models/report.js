const mongoose = require('mongoose');

//Creating Report Schema
const reportSchema = mongoose.Schema({
        status: {
            type: String,
            required : true
        },
        date: {
            type: Date,
            required : true
        },

        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Doctor',
            required : true
        },

        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Patient',
            required : true
        }
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;