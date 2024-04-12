//import mongoose from 'mongoose';
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

//shema
const serviceRecordSchema = new Schema({
   

    name : {
        type : String,
        required : true
    },
    service :{
        type : String,
        required : true
    },
    date : {
        type : Date, 
        required : true
    },
    catagory : {
        type : String, 
        required : true
    },
   
    
})


const ServiceRecord = mongoose.model('ServiceRecord',serviceRecordSchema);

module.exports = ServiceRecord;