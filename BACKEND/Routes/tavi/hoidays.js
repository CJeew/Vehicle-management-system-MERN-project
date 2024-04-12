const router = require("express").Router();
const holidaySetting = require("../../Models/holiday");
let hourSetting = require("../../Models/holiday");


//create

router.route("/addHolidaySetting").post(async(req,res)=>{

    const busyDate = req.body.busyDate;
    const event = req.body.event;
   
    const newHolidaySetting = new holidaySetting({
        busyDate,
        event
    })

    newHolidaySetting.save().then(()=>{
        res.json("Holidays Setting Up Successfull");
    }).catch((err)=>{
        console.log(err);
    })
})

// read

router.route("/").get((req,res)=>{
    holidaySetting.find().then((holidays)=>{
        res.json(holidays);
    }).catch((err)=>{
        console.log(err);
    })
})

//update

router.route("/updateHoliday/:id").post(async(req,res)=>{
    let holidayId = req.params.id;
    const{busyDate, event} = req.body; 

    const updateHolidaySetting = {
        busyDate, 
        event
    }
    const updateHolidays = await holidaySetting.findByIdUpdate(holidayId, updateHolidaySetting)  //await - waiting until the before update finish to execute next update
    .then(()=>{  
        res.status(200).send({status: "Holidays Setting Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating holidays", error: err.message});
    })
 })

//delete

router.route("/deleteHoliday/:id").delete(async(req, res)=>{
    let holidayId = req.params.id;
    await holidaySetting.findByIdAndDelete(holidayId)
    then(()=> {
        res.status(200).send({status: "Holidays Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({stats: "Error with deleting holidays", error:err.message});
    })
 })

 module.exports = router;