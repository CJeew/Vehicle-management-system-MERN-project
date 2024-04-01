const router = require("express").Router();
let booking = require("../../Models/booking");

//create

router.route("/addBooking").post((req,res)=>{

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const phoneNum = req.body.phoneNum;
    const eMail = req.body.eMail;
    const vNum = req.body.vNum;
    const vType = req.body.vType;
    const dDate = Date(req.body.dDate);
    const tTime = req.body.tTime;
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

router.route("/updateBook/:id").post(async(req,res)=>{
    let bookId = req.params.id;
    const{fname, lname, address, phoneNum, eMail, vNum, vType, dDate, tTime, serviceBox} = req.body; 

    const updateBooking = {
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
    }
    const update = await booking.findByIdUpdate(bookId, updateBooking)  //await - waiting until the before update finish to execute next update
    .then(()=>{  
        res.status(200).send({status: "Booking Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 })

 //delete

 router.route("/delete/:id").delete(async(req, res)=>{
    let bookId = req.params.id;
    await booking.findByIdAndDelete(bookId)
    then(()=> {
        res.status(200).send({status: "Booking Cancelled"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({stats: "Error with deleting booking", error:err.message});
    })
 })

 router.route("/get/:id").get(async(req,res)=>{
    let bookId = req.params.id;
    const book = await booking.findById(bookId)  //primary key - .findOne(email)
    .then(()=>{
        res.status(200).send({status: "Booking Fetched", book: book})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get booking", error: err.message});
    })
 })

module.exports = router;