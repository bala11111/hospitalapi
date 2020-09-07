const Patient = require('../models/patient');
const Report = require('../models/report');
const Doctor = require('../models/doctor');
const states = ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'];

//Registering a patient
module.exports.register = async function(req,res){
    
    try{
        let user = await Patient.findOne({phoneno: req.body.phoneno});
        if(!user)
        {
            let patient = await Patient.create(req.body);
            console.log(patient);
            return res.status(200).json({
                response : "Patient Created Successfully",
                data : patient
            });
        }else{
            return res.status(409).json({
                response : "Patient already exist",
                data : user
            })
        }
    }catch(err){
        return res.status(500).json({
            response : "Internal Server error"
        })
    }
}

//Creating report of a Patient
module.exports.createReport = async function(req,res){
    try{
        let user = await Patient.findOne( {phoneno: req.params.id });
        if(user){
            var x = states.includes(req.body.status);
            if(x){
                let report = await Report.create({
                    status: req.body.status,
                    doctor: req.user._id,
                    patient : user._id,
                    date : Date.now()
                });
                console.log(report);
                user.reports.push(report);
                user.save();
                report = await report.populate('doctor','username-_id').execPopulate();
                report = await report.populate('patient', 'name phoneNumber -_id').execPopulate();
                return res.status(200).json({
                    response : "Report created succesfully",
                    data : user.reports
                });
            }
        }
        else{
            return res.status(500).json({
                response : "cant create report",
                user : user
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            response : "Internal Server errorrr",
            error : err
        })
    }
}

//Showing report of a particular patient
module.exports.showReport = async function(req,res){
    try{
        let patient = await Patient.findOne({phoneno: req.params.id});
        console.log(patient.reports);
        if(patient)
        {
            let reports = await Report.find({ patient: patient._id },'-_id')
            .sort('-createdAt')
            .populate('patient','name -_id')
            .populate('doctor', 'name -_id')

            return res.status(200).json({
                response : `The reports of the ${patient.name} are`,
                data : reports
            });
        }
        else{
            return res.status(500).json({
                response : "No patient with the records found"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            response : "Internal Server errorr",
            error : err
        })
    }
}