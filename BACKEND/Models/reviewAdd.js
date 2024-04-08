const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({

    Cmail : {
        type : String,
        required : true
    },
    rating : {
        type : String,
        required : true
    },
    message : {
        type : String, 
        required : true
    }
  
})


const reviewAdd = mongoose.model("Review",ReviewSchema);

module.exports = reviewAdd;
 
