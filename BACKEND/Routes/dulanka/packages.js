const router = require("express").Router(); // Import the Express module and access its Router function to create a new router object.
let Package = require("../../Models/svc-package.js"); // Import the Package model from the specified path.

//add package
router.route("/add").post((req, res) => {
  const pid = req.body.pid;
  const name = req.body.name;
  const description = req.body.description;
  const unitprice = parseInt(req.body.unitprice);
  console.log("test");
  const category = req.body.category;

  //validate data
  //validate pid as number
  if (isNaN(pid)) {
    return res.status(400).json({ message: "pid must be a number" });
  }
  console.log("test2");
  // validate unitprice as number
  if (isNaN(unitprice)) {
    return res.status(400).json({ message: "unitprice must be a number" });
  }
  console.log("test3");
  const newPackage = new Package({
    pid,
    name,
    description,
    unitprice,
    category,
  });

  newPackage
    .save()
    .then(() => {
      console.log("test res");
      return res.json("Package Added");
    })
    .catch((err) => {
      console.log("test er");
      return console.log(err);
    });
});

//read package
router.route("/").get((req, res) => {
  Package.find()
    .then((packages) => {
      res.json(packages);
    })
    .catch((err) => {
      console.log(err);
    });
});
//update package

router.route("/update/:id").put(async (req, res) => {
  let packageId = req.params.id;
  const {name, description, unitprice, catagory } = req.body;

  const updatePackage = {
    //pid,
    name,
    description,
    unitprice,
    catagory,
  };

  try {
    const resp = await Package.findByIdAndUpdate(packageId, updatePackage);

    if (!resp) {
      res.status(500).send({ status: "Recode with this id not found" });//handel error
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error with updating data" });//unexpected error
    return;
  }

  res.status(200).send({ status: "Package Updated" });

 
});

//delete package

router.route("/delete/:id").delete(async (req, res) => {
  let packageId = req.params.id;

  await Package.findByIdAndDelete(packageId)
    .then(() => {
      res.status(200).send({ status: "Package Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete package", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let packageId = req.params.id;
  await Package.findById(packageId)
    .then(() => {
      res.status(200).send({ status: "Package fetched", package: package });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get package", error: err.message });
    });
});

module.exports = router;
