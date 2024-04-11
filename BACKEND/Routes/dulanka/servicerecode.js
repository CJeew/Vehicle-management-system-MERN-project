const router = require("express").Router(); // Import the Express module and access its Router function to create a new router object.
let Package = require("../../Models/svc-recodes.js"); // Import the Package model from the specified path.

//add recodes

router.route("/addrecodes").post((req, res) => {
  const rid = req.body.rid;
  const service = req.body.service;
  const customer = req.body.customer;
  const vehicle = req.body.discription;
  const date = req.body.date;

  //validate data
  //validate  data as string
  if (typeof service !== "string") {
    return res.status(400).json({ message: "service must be a string" });
  }
  if (typeof customer !== "string") {
    return res.status(400).json({ message: "customer must be a string" });
  }
  if (typeof vehicle !== "string") {
    return res.status(400).json({ message: "vehicle must be a string" });
  }
  if (typeof date !== "string") {
    return res.status(400).json({ message: "date must be a string" });
  }


  const newRecode = new Recode({
    rid,
    service,
    customer,
    vehicle,
    date,
  });

  newRecode
    .save()
    .then(() => {
      console.log("test res");
      return res.json("Recode added");
    })
    .catch((err) => {
      console.log("test err");
      return console.log(err); //check the error
    });
});
//read recodes
router.route("/").get((req, res) => {
  Recode.find()
    .then((recode) => {
      res.json(recode);
    })
    .catch((err) => {
      console.log(err);
    });
});
//update recodes

router.route("/update/:id").put(async(req, res) => {
  let recordeId = req.params.id;
  const { service, customer, vehicle, date } = req.body;

  const updatePackage = {
    //rid,
    service,
    customer,
    vehicle,
    date,
  };

  try{
    const resp = await Recode.findByIdAndUpdate(recodeId, updaterecode);

    if (!resp) {
      res.status(500).send({ status: "Recode with this id not found" });//handel error
      return;
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data" });//unexpected error
    return;
  }
 res.status(200).send({ status: "Recode Updated" });
});
module.exports = router; // Export the router object to be used in the server.js file.