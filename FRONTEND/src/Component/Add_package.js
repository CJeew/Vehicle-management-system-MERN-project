import React, { useState } from "react";
// import "./Add_package.css";
//import "./Add_package.css";

import axios from "axios";

function AddPackage() {
  // add package form
  const [pid, setPid] = useState(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault();

    const newPackage = {
      pid,
      name,
      description,
      unitprice: parseFloat(unitPrice), // Ensure unitPrice is correctly formatted as a number
      category,
    };

    axios
      .post("http://localhost:8090/svc-packages/add", newPackage)
      .then(() => {
        alert("Package Added");
      })
      .catch((err) => {
        alert(err.message); //error message
      });

  }

  return (
    <div className="container">
      <div className="Add">
        <h1 className="text-3xl text-center bg-red-300 px-3 rounded-lg">Add Package</h1>
        <form onSubmit={submit}>
 
          {/* Handle the submit event here */}
         
        
          <label>Pid</label>
          <input
            type="number"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setPid(e.target.value)}
            required
          />
          <label>Name</label>
          <input
            type="text"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Description</label>
          <input
            type="text"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label>Unit Price</label>
          <input
            type="number"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />
          <label>Category</label>
          <select name="Category" id="catagory" className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
          
          onChange={(e) => setCategory(e.target.value)}> 
            <option value="volvo">Interior</option>
            <option value="volvo">Exterior</option>
            <option value="saab">Hybrid Services</option>

           
          </select>
          
          
          <input className="w-fit bg-indigo-600 px-6 py-1 text-white rounded-lg mt-3 mx-auto font-sans font-semibold"  type="submit" value="Add Package" />
        </form>
      </div>
    </div>
  );
}

export default AddPackage;
