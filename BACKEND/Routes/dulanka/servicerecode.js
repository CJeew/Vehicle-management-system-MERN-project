const router = require("express").Router(); // Import the Express module and access its Router function to create a new router object.
let Recorde = require("../../Models/svc-records.js"); // Import the Package model from the specified path.

//add recodes

router.route("/addr").post((req, res) => {
  
  const service = req.body.service;
  const customer = req.body.customer;
  const date = req.body.date;
  console.log("test");
  const category = req.body.category;
  

  const newRecorde = new Recorde({
    
    service,
    customer,
    date,
    category,
  });

  newRecorde
    .save()
    .then(() => {
      console.log("test res");
      return res.json("Recorde added");
    })
    .catch((err) => {
      console.log("test err");
      return console.log(err); //check the error
    });
});
//read recordes
router.route("/").get((req, res) => {
  Recorde.find()
    .then((recorde) => {
      res.json(recorde);
    })
    .catch((err) => {
      console.log(err);
    });
});
//update recodes

router.route("/update/:id").put(async(req, res) => {
  let recordeId = req.params.id;
  const { service, customer, vehicle, date,category } = req.body;

  const updatePackage = {
    //rid,
    service,
    customer,
    vehicle,
    date,
    category,
  };

  try{
    const resp = await Recode.findByIdAndUpdate(recordeId, updaterecorde);

    if (!resp) {
      res.status(500).send({ status: "Recorde with this id not found" });//handel error
      return;
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data" });//unexpected error
    return;
  }
 res.status(200).send({ status: "Recorde Updated" });
});
module.exports = router; // Export the router object to be used in the server.js file.