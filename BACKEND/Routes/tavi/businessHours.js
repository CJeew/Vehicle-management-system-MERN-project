const router = require("express").Router();
let hourSetting = require("../../Models/businessHour");


//create

router.route("/addHourSetting").post((req,res)=>{

    const day = req.body.day;
    const timeFrom = req.body.timeFrom;
    const timeTo = req.body.timeTo;
    const busyDate = req.body.busyDate;
    const event = req.body.event;
   
    const newHourSetting = new hourSetting({
        day,
        timeFrom,
        timeTo,
        busyDate,
        event
    })

    newHourSetting.save().then(()=>{
        res.json("Business Hours Setting Up Successfull");
    }).catch((err)=>{
        console.log(err);
    });
});

// read

router.route("/readHours/:id").get(async(req,res)=>{
    businessHour.find().then((businessHours)=>{
        res.json()
    }).catch((err)=>{
        console.log(err);
    })
})

//update

router.route("/updateSetting/:id").post(async(req,res)=>{
    let settingId = req.params.id;
    const{day, timeFrom, timeTo, busyDate, event} = req.body; 

    const updateSetting = {
        day, 
        timeFrom,
        timeTo, 
        busyDate, 
        event
    }
    const updateHours = await businessHour.findByIdUpdate(settingId, updateSetting)  //await - waiting until the before update finish to execute next update
    .then(()=>{  
        res.status(200).send({status: "Business Hours Setting Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 })

//delete

router.route("/deleteSetting/:id").delete(async(req, res)=>{
    let settingId = req.params.id;
    await businessHour.findByIdAndDelete(settingId)
    then(()=> {
        res.status(200).send({status: "Business Hours Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({stats: "Error with deleting business hours", error:err.message});
    })
 })