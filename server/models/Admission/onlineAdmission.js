const mongoose = require('mongoose');

const onlineAdmission = new mongoose.Schema({
    
    Link:{
        type:String,
        required:true
    },
    Caption:{
        type:String,
        required:true
    }
})


const online_Admission = mongoose.model('ADMIN',onlineAdmission);
module.exports=online_Admission;