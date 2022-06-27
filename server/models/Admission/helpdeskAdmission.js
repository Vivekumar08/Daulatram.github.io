const mongoose = require('mongoose');

const helpdeskAdmission = new mongoose.Schema({
    
    Link:{
        type:String,
        required:true
    },
    Caption:{
        type:String,
        required:true
    }
})


const helpdesk = mongoose.model('HELPDESK',helpdeskAdmission);
module.exports=helpdesk;