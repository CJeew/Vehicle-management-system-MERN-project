const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    address : {
        type : String, 
        required : true
    },
    phoneNum : {
        type : Number,
        required : true
    },

    eMail : {
        type : String,
        required : true
    },

    vNum : {
        type : String,
        required : true
    },

    vType : {
        type : String,
        required : true
    },

    dDate : {
        type : Date,
        required : true
    },

    tTime : {
        type : String,
        required : true
    },

    serviceBox : {
        type : String,
        required : true
    }
})


const booking = mongoose.model("Booking",bookSchema);

module.exports = booking;
 
