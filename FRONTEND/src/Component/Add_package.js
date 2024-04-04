import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

function AddPackage() {
  // add package form
  const [pid, setPid] = useState("");
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
    <div className="  w-full flex justify-center items-center  ">
      <div className="w-full max-w-96 mt-24 bg-white p-8 rounded-lg shadow-md bg-gray-200 bg-opacity-70">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Add Package
        </h1>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              PID
            </label>
            <input
              type="text"
              className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
              onChange={(e) => setPid(e.target.value)}
              required
            />
          </div>
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
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Interior">Interior</option>
            <option value="Exterior">Exterior</option>
          
          </select>

          <div className="flex justify-center   ">
            <button
              className="btn-indigo bg-gradient-to-r from-red-400 to-red-500 px-2 py-2 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] mt-4"
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
