import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useParams } from "react-router-dom";
function Edit_record() {
  const { id } = useParams();
  // recodes form
  const [service, setService] = useState("");
  const [customer, setCustomer] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  function submit(e) {
    e.preventDefault(); //prevent default form submission behavior

    const editRecorde = {
      service,
      customer,
      date,
      category,
    };
    axios
      .put(`http://localhost:8090/svc-records/updaterec/${id}`, editRecorde)
      .then(() => {
        alert("Recode updated"); //alert message
        window.location.href = "/viewrec"; //redirect to viewrec page
      })
      .catch((err) => {
        alert(err.message); //error message
      });
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8090/svc-records/${id}`)
      .then((res) => {
        setService(res.data.service);
        setCustomer(res.data.customer);
        setDate(res.data.date);
        setCategory(res.data.category);
      })
      .catch((err) => {
        alert(err.message); //error message
      });
  }, []);

  return (
    <div className="  w-full flex justify-center items-center  ">
      <div className="w-full max-w-2xl mt-24 bg-white p-8 rounded-lg shadow-md bg-gray-200 bg-opacity-70">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Edit Recordes
        </h1>
        <form onSubmit={submit}>
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Service
          </label>
          <input
            value={service}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setService(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Customer
          </label>
          <input
            value={customer}
            type="text"
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setCustomer(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Date
          </label>
          <input
            value={date}
            type="date"
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Category
          </label>
          <select
            className="px-3 py-1 rounded-lg border border-black-400 w-full text-black"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option selected disabled value="">
              Select Category
            </option>
            <option value="Interior">Interior</option>
            <option value="Exterior">Exterior</option>
          </select>
          <div className="flex items-center justify-center">
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

export default Edit_record;
