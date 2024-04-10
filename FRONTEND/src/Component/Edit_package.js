import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Edit_package() {
  const { id } = useParams();
  // add package form
  const [pid, setPid] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault();

    const editPackage = {
      pid,
      name,
      description,
      unitprice: parseFloat(unitPrice), // Ensure unitPrice is correctly formatted as a number
      category,
    };

    axios
      .put(`http://localhost:8090/svc-packages/update/${id}`, editPackage)
      .then(() => {
        alert("Package updated");
        window.location.href = "/viewpkg";
      })
      .catch((err) => {
        alert(err.message); //error message
      });
   }
   useEffect(() => {
    axios
      .get(`http://localhost:8090/svc-packages/get/${id}`)
      .then((res) => {
        setPid(res.data.pid);
        setName(res.data.name);
        setDescription(res.data.description);
        setUnitPrice(res.data.unitprice);
        setCategory(res.data.category);
      })
      .catch((err) => {
        alert(err.message); //error message
      }); 
  }, []);

  return (
    <div className="  w-full flex justify-center items-center ">
      <div className="w-full max-w-96 mt-24 bg-white p-8 rounded-lg shadow-md bg-gray-200 bg-opacity-70">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Add Package
        </h1>
        <form onSubmit={submit}>
          <div className="mb-4">
            
          </div>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Name
          </label>
          <input
            value={name}
            type="text"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Description
          </label>
          <input
            value={description}
            type="text"
            className="px-3 py-3 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Unit Price
          </label>
          <input
            value={unitPrice}
            type="number"
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            onChange={(e) => setUnitPrice(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Category
          </label>
          <select className="px-3 py-1 rounded-lg border border-black-400 w-full text-black" required value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option selected disabled value="">Select Category</option>
            <option value="Interior">Interior</option>
            <option value="Exterior">Exterior</option>
          
          </select>

          <div className="flex justify-center">
            <button
              className="btn-indigo bg-gradient-to-r from-red-400 to-red-500 px-2 py-2 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] mt-4"
              type="submit"
            >
               update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit_package;
