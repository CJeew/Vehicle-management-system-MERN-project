import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

function AddPackage() {
  // add package form
 
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault();
     // Redirect based on category
     if (category === "Interior") {
      window.location.href = "/viewpkg";
    } else if (category === "Exterior") {
      window.location.href = "/viewpkg2";
    }


    const newPackage = {
      name,
      description,
      unitprice: parseFloat(unitPrice), // Ensure unitPrice is correctly formatted as a number
      category,
    };

    axios
      .post("http://localhost:8090/svc-packages/add", newPackage)
      .then(() => {
        alert("Package Added");
        // Redirect based on category

    
     })
      .catch((err) => {
        alert(err.message); //error message
      });
  }

  return (
    <div className="  w-full flex justify-center items-center  ">
      <div className="w-full max-w-96 mt-24 bg-white p-8 rounded-lg shadow-md bg-gray-200 bg-opacity-70">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Add Package
        </h1>
        <form onSubmit={submit}>
          
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Description
          </label>
          <input
            type="text"
            className="px-3 py-3 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Unit Price
          </label>
          <input
            type="number"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Category
          </label>
          <select
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black" required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option selected disabled value="">Select Category</option>
            <option value="Interior">Interior</option>
            <option value="Exterior">Exterior</option>
          
          </select>

          <div className="flex justify-center   ">
            <button
              className=" bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
              hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
              ease-in-out transform hover:scale-105 px-2 px-2 py-2 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] mt-4"
              type="submit"
            >
              Add Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPackage;
