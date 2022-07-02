const mongoose = require('mongoose');

const Anti_Ragging_Schema = new mongoose.Schema({
    
    Link:{
        type:String,
        required:true
    },
    Caption:{
        type:String,
        required:true
    }
})


const Ragging = mongoose.model('Ragging',Anti_Ragging_Schema);
module.exports=Ragging;