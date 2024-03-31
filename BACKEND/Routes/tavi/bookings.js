const router = require("express").Router();
let booking = require("../Models/booking");

//create

router.route("/addBooking").post((req,res)=>{

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const phoneNum = Number(req.body.phoneNum);
    const eMail = req.body.eMail;
    const vNum = req.body.vNum;
    const vType = req.body.vType;
    const dDate = Date(req.body.dDate);
    const tTime = TimeRanges(req.body.tTime);
    const serviceBox = req.body.serviceBox;

    const newBooking = new booking({
        fname,
        lname,
        address,
        phoneNum,
        eMail,
        vNum,
        vType,
        dDate,
        tTime,
        serviceBox
    })

    newBooking.save().then(()=>{
        res.json("Reservation Done")
    }).catch((err)=>{
        console.log(err);
    })
})

//read

router.route("/").get((req,res)=>{
    booking.find().then((bookings)=>{
        res.json(bookings)
    }).catch((err)=>{
        console.log(err)
    })
})


//update

router.route("/")

module.exports = router;