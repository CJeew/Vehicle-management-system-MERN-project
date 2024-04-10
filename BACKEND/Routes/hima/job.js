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
router.route('/job/:jobNumber').get((req,res) => {
  const jobNumber = req.params.jobNumber;
  jobModel
    .find({ jobNumber: jobNumber })
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    });
});


//Filter option
// router.route("/viewjobs").get((req, res) => {
//   const { jobNumber, jobDate, timeIn, name} = req.query;
//   const query = {};

//   if(jobNumber){
//     query.jobNumber = jobNumber;
//   }

//   if(name){
//     query.name = name;
//   }

//   if(jobDate && timeIn){
//     const dateTimeIn = new Date('${jobDate}T${timeIn}'); 
//     query.dateTimeIn = dateTimeIn;

//   }else if(jobDate){
//     query.jobDate = new Date(jobDate);

//   }else if(timeIn){
//     query.timeIn = new Date(timeIn);

//   }

//   jobModel
//     .find(query)
//     .then((jobs) => {
//       res.json(jobs);
//     })

//     .catch((err) => {
//       console.log(err);
//     })
// });

//Delete function
router.route("/delete/:jobNumber").delete(async (req, res) => {
  const {jobNumber} = req.body;

    try {
      // Find the job by ID and delete it
      await jobModel.findOneAndDelete({jobNumber});
      res.json({ message: "Job deleted successfully" });

    } catch (error) {

      console.error("Error deleting job:", error);
      res.status(500).json({ error: "Could not delete job" });
    }
});



//CRUD (update page) code segment
// router.route("/update/:id").put(async (req, res) => {
//   let userId = req.params.id; //code for get the individual id from the url
//   const { name, contact, address, country } = req.body;

  //object for supplier update
//   const updateSupplier = {
//     name,
//     contact,
//     address,
//     country,
//   };
//   const update = await supplier
//     .findByIdAndUpdate(userId, updateSupplier)
//     .then(() => {
//       res.status(200).send({ status: "user updated" });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({ staus: "supplier added can't be done" });
//     });
// });
//CRUD (delete page) code segment

// router.route("/delete/:id").delete(async (req, res) => {
//   let userId = req.params.id;
//   await supplier
//     .findByIdAndDelete(userId)
//     .then(() => {
//       res.status(200).send({ status: "user deleted" });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res
//         .status(500)
//         .send({ status: "supplier can't be deletes", error: err.message });
//     });
// });

// router.route("/get/:id").get(async (req, res) => {
//   let userId = req.params.id;
//   const user = await supplier
//     .findById(userId)
//     .then((supplier) => {
//       res.status(200).send({ status: "user fetched", supplier });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({ status: "Can't find user", error: err.message });
//     });
// });




module.exports = router;