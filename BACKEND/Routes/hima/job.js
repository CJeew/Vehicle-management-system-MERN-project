const router = require("express").Router();

let jobModel = require("../../Models/jobs");

//Fetch data from the frontend

router.route("/addJob").post((req, res) => {
  const jobNumber = req.body.jobNumber;
  const jobDate = req.body.jobDate;
  const vehicleType = req.body.vehicleType;
  const RegNo= req.body.RegNo;
  const vehicleMake= req.body.vehicleMake;
  const vehicleModel= req.body.vehicleModel;
  const mileage= req.body.mileage;
  const year= req.body.year;
  const timeIn= req.body.timeIn;
  const timeout= req.body.timeout;
  const dateout= req.body.dateout;
  const name= req.body.name;
  const contactNumber= req.body.contactNumber;
  const email= req.body.email; 
  const serviceType= req.body.serviceType;
  const details= req.body.details;
  
  

  const newJob = new jobModel({
    jobNumber,
    jobDate,
    vehicleType,
    RegNo,
    vehicleMake,
    vehicleModel,
    mileage,
    year,
    timeIn,
    timeout,
    dateout,
    name,
    contactNumber,
    email,    
    serviceType,
    details,
    
  });

  //Pass data to the database

  newJob
    .save()
    .then(() => {
      res.json("New job added");
    })
    .catch((err) => {
      console.log(err);
    });
});


//Fetching data from the database
router.route("/viewjobs").get((req, res) => {
  jobModel
    .find()
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => {
      console.log(err);
    });
});




//Fetch data related to the job number
router.get('/details/:jobNumber', async (req, res) => {
  const jobNumber = req.params.jobNumber;

  try {
    // Query the database to find the document with the jobNumber
    const details = await jobModel.findOne({ jobNumber });

    if (!details) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.json(details);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



//Delete Job function
router.route("/delete/:_id").delete(async (req, res) => {
  let jobId = req.params._id;

  await jobModel.findByIdAndDelete(jobId)
  .then(() => {
      res.status(200).send({status: "Job deleted"});
  }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Cannot delete the job", error: err.message});
  })
})


//Update job function
router.route("/updatejobs/:id").put(async (req,res) => {

  let jobNumber = req.params.id;
  const {
    jobnumber,
    jobDate,
    vehicleType,
    RegNo,
    vehicleMake,
    vehicleModel,
    mileage,
    year,
    timeIn,
    timeout,
    dateout,
    name,
    contactNumber,
    email,    
    serviceType,
    details} = req.body;

  const updateJob = {
    jobnumber,
    jobDate,
    vehicleType,
    RegNo,
    vehicleMake,
    vehicleModel,
    mileage,
    timeIn,
    year,
    timeout,
    dateout,
    name,
    contactNumber,
    email,
    serviceType,
    details,
  }

 const update = await jobModel
 .findByIdAndUpdate(jobNumber, updateJob)
 .then(() => {
      res.status(200).send({ status : "Job Updated successfully"});
  })
 .catch((err) => {
    console.log(err);
    res.status(500).send({ status : "Job cannot be updated" });
  });
});


//Fetch data related to the id
router.route("/get/:id").get(async (req, res) => {
  let jobNumber = req.params.id;
  console.log(jobNumber);
  const job = await jobModel
    .findById(jobNumber)
    .then((job) => {
      res.status(200).send({ status: "Job fetched", job });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Can't find the requested job", error: err.message });
    });
});





module.exports = router;