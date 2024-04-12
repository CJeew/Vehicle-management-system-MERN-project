const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hourSettingSchema = new Schema({

    day : {
        type : String,
        required : false
    },

    timeFrom : {
        type : String,
        required : false
    },

    timeTo : {
        type : String,
        required : false
    }
})

const hourSetting = mongoose.model("hourSetting", hourSettingSchema);
module.exports = hourSetting;