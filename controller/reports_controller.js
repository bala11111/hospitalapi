let Report = require('../models/report');
const states =  ['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'];

//Showing report of a particular status
module.exports.statusReports = async function (req, res) {
    try{
        let status = req.params.status;     
        if(states.includes(req.params.status)){
            let reports = await Report.find({status: status},'-_id')
            .sort('-createdAt')
            .populate('patient', 'name phoneNumber -_id')
            .populate('doctor', 'name -_id')

            return res.status(200).json({
                response : `The Reports of ${status} status are`,
                reports : reports
            });
        }
        else{
            return res.status(500).json({
                response : "There is no such status",
        })}
    }
    catch(err){
        return res.status(500).json({
            response : "Internal server error"
    })
 }
}  
