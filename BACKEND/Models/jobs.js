const mongoose =require('mongoose');

const Schema = mongoose.Schema;


const jobSchema = new Schema({
    jobNumber : {
        type : String,
        required : true
    },
    jobDate : {
        type : Date,
        required : true
    },
    vehicleType : {
        type : String, 
        required : true
    },
    RegNo : {
        type : String,
        required : true
    },
    vehicleMake: {
        type : String,
        required : true
    },
    vehicleModel : {
        type : String,
        required : true
    },
    mileage : {
        type : Number, 
        required : true
    },
    year: {
        type : Number,
        required : true
    },
    timeIn : {
        type : Date, 
        required : true
    },
    out : {
        type : Date, 
        required : true
    },
    name : {
        type : String, 
        required : true
    },
    contactNumber : {
        type : String, 
        required : true
    },
    email : {
        type :String, 
        required : true
    },
    serviceType: {
        type : String, 
        required : true
    },
    details : {
        type : String, 
        required : true
    },
})


const job = mongoose.model("jobs",supplierSchema);

module.exports = jobs;
 
