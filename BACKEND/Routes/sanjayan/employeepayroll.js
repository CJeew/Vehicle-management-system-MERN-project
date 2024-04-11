const router = require("express").Router();
let Employeepayroll = require("../../Models/Employeepayroll");

//http://localhost:8090/staff/add

router.route("/addpayroll").post((req,res)=>{

    const nic = req.body.nic;
    const name = req.body.name;
    const date = req.body.date;
    const otstatus = req.body.otstatus;
    const otpayment = Number(req.body.otpayment);
    const bonus = Number(req.body.bonus);
    const penaltyamt = Number(req.body.penaltyamt);
    const salary = Number(req.body.salary);
    
    const newPayroll = new Employeepayroll({

        nic,
        name,
        date,
        otstatus,
        otpayment,
        bonus,
        penaltyamt,
        salary
    })

    newPayroll.save().then(()=>{
        res.json("Payroll Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//http://Localhost:8090/staff/
//Get all staff details

router.route("/").get((req,res)=>{

    Employeepayroll.find().then((employeepayroll)=>{
        res.json(employeepayroll)
    }).catch((err)=>{
        console.log(err)
    })

})

//http//Localhost:8090/staff/update/..id

router.route("/editpayroll/:id").put(async(req,res) => {

    let id = req.params.id;
    const {nic,name,date,otstatus,otpayment,bonus,penaltyamt,salary} = req.body;

    const updatePayroll = {
      nic,
      name,
      date,
      otstatus,
      otpayment,
      bonus,
      penaltyamt,
      salary,
    }

    // Check if any required field is empty
    const requiredFields = ["nic", "name", "date", "otstatus"];
    const emptyFields = requiredFields.filter(field => !req.body[field]);
    
    if (emptyFields.length > 0) {
        return res.status(400).send({ message: `Fields cannot be empty: ${emptyFields.join(", ")}` });
    }

    //------------------
    const update = await Employeepayroll.findByIdAndUpdate(id, updatePayroll)  //updateStaff means upadate panna vendiya data oda object
    .then(() => {

        res.status(200).send({status: "Payroll updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//http//Localhost:8090/staff/delete/33huihfudf88

router.route("/delete/:_id").delete(async (req, res) => {
    let userId = req.params._id;

    await Employeepayroll.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Payroll deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete payroll", error: err.message});
    })
})

//http://localhost:8090/staff/get/65e4bcc5440bc24613ae7a76
//How to get one staff details
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const payroll = await Employeepayroll.findById(userId)
    .then((payroll) => {
        res.status(200).send({status: "Payroll fetched", payroll})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get payroll", error: err.message});
    })
})

module.exports = router;