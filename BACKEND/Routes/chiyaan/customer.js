const router = require("express").Router();
let customer = require("../../Models/customer");


//create - working

router.route("/Register").post((req,res)=>{

    const cname = req.body.cname;
    const cnic = req.body.cnic;
    const cpass = req.body.cpass; 
    const cphone = req.body.cphone;
    const cmail = req.body.cmail;
    const cvnum = req.body.cvnum;
    const cvtype = req.body.cvtype;

    const newCustomer = new customer({
        cname,
        cnic,
        cpass,
        cphone,
        cmail,
        cvnum,
        cvtype
    })

    newCustomer.save().then(()=>{
        res.json("Registeration Done");
    }).catch((err)=>{
        console.log(err);
    });
});

//read - working

router.route("/").get((req,res)=>{
    customer.find().then((customer)=>{
        res.json(customer);
    }).catch((err)=>{
        console.log(err);
    })
})


//update

router.route("/updatecustomer/:id").post(async(req,res)=>{
    let cusid = req.params.id;
    const{cname, cnic, cphone, cmail, cpass, cvnum, cvtype, } = req.body; 

    const updatecustomer = {
        cname,
        cnic,
        cphone,
        cmail,
        cpass,
        cvnum,
        cvtype,
        
    }
    const update = await customer.findByIdUpdate(cusid, updatecustomer)  //await - waiting until the before update finish to execute next update
    .then(()=>{  
        res.status(200).send({status: "Details Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
 })

 //delete

 router.route("/cdelete/:id").delete(async(req, res)=>{
    let cusid = req.params.id;
    await customer.findByIdAndDelete(cusid)
    then(()=> {
        res.status(200).send({status: "Profile deletered"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({stats: "Error with deleting Profile", error:err.message});
    })
 })

 //fetch data of one booking
 router.route("/cget/:id").get(async(req,res)=>{
    let cusid = req.params.id;
    const customer = await customer.findById(cusid)  //primary key - .findOne(email)
    .then(()=>{
        res.status(200).send({status: "customer Fetched", customer: customer})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get profile", error: err.message});
    })
 })

module.exports = router;