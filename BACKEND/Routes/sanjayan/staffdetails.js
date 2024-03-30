const router = require("express").Router();
let Staffdetails = require("../Models/Staffdetails");

//http://localhost:8070/staff/add

router.route("/addstaff").post((req,res)=>{

    const nic = req.body.nic;
    const name = req.body.name;
    const designation = req.body.designation;
    const address = req.body.address;
    const email = req.body.email;
    const mobileno = Number(req.body.mobileno);
    const joindate = req.body.joindate;
    
    const newStaff = new Staffdetails({

        nic,
        name,
        designation,
        address,
        email,
        mobileno,
        joindate
    })

    newStaff.save().then(()=>{
        res.json("Staff Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//http://Localhost:8070/staff/
//Get all staff details

router.route("/").get((req,res)=>{

    Staffdetails.find().then((staffdetails)=>{
        res.json(staffdetails)
    }).catch((err)=>{
        console.log(err)
    })

})

//http//Localhost:8070/staff/update/..id

router.route("/editstaff/:id").put(async(req,res) => {

    let id = req.params.id;
    const {nic,name,designation,address,email,mobileno,joindate} = req.body;

    const updateStaff = {
    nic,
      name,
      designation,
      address,
      email,
      mobileno,
      joindate,
    }

    const update = await Staffdetails.findByIdAndUpdate(id, updateStaff)  //updateStaff means upadate panna vendiya data oda object
    .then(() => {

        res.status(200).send({status: "User updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//http//Localhost:8070/staff/delete/33huihfudf88

router.route("/delete/:_id").delete(async (req, res) => {
    let userId = req.params._id;

    await Staffdetails.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//http://localhost:8070/staff/get/65e4bcc5440bc24613ae7a76
//How to get one staff details
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const staff = await Staffdetails.findById(userId)
    .then((staff) => {
        res.status(200).send({status: "User fetched", staff})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

module.exports = router;