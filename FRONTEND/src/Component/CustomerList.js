import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Cmanager.js";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import imgSrc from "./logo.png";

export default function RegisterRead() {
  const [customer, setlist] = useState([]);
  const componentRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  useEffect(() => {
    function getlist() {
      axios
        .get("http://localhost:8090/customer/")
        .then((res) => {
          console.log("Response from server:", res.data);
          setlist(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          alert(err.message);
        });
    }

    getlist();
  }, []);

  // Function to handle deletion of a customer
  const onDeleteClick = async (cusid) => {
    await axios.delete(`http://localhost:8090/customer/delete/${cusid}`);
    alert("Profile Deleted Successfully");
    window.location.reload(); // Refresh page after successful deletion
  };

  // Function to generate reports
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    DocumentTitle: "Customer List",
    onafterprint: () => alert("Customer List generation successful !!"),
  });

  // Function to filter customers
  const filteredlist = customer.filter(
    (customer) =>
      customer.cmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.cname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.cvtype.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="ms-20 my-15 mt-20 text-6xl font-extrabold text-white">
        Registered Customer List
      </h2>

      <div className="absolute top-2 right-8">
        {/* Search bar */}
        <div className="relative mt-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="absolute right-8 mt-12">
            <button
              onClick={handlePrint}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Generate Report
            </button>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent"
          />
        </div>
      </div>
      <div class="flex justify-center items-center h-screen">
        <table
          class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-0 mx-10 mt-48"
          ref={componentRef}
        >
          <thead>
            <tr>
              {/* Header with company name, current date, and time */}
              <th
                colSpan="8"
                className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 py-4 text-white text-center"
              >
                <div className="flex justify-between items-center px-8">
                <a><img src= {imgSrc} alt="Logo" className="h-16 w-43 ml-0 mt-0 mr-0" />
                <h4>Kottawa,Colombo,Sri Lanka</h4></a>
                  <div className="text-white">
                    <p>Date: {currentDate}</p>
                    <p>Time: {currentTime}</p>
                  </div>
                </div>
              </th>
            </tr>
            <tr className="bg-gradient-to-r  mt-5">
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider"
              >
                Name
              </th>

              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider"
              >
                Telephone
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider"
              >
                NIC Number
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider"
              >
                Vehicle type
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider"
              >
                Vehicle Number
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredlist.map((customer) => (
              <tr
                key={customer.id}
                class="bg-white border-b border-gray-200 hover:bg-gray-50"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cname}{" "}
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cphone}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cmail}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cnic}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cvtype}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {customer.cvnum}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex items-center justify-start gap-2">
                    {/* Edit customer button */}
                    <Link
                      to={`/Updatecustomer/${customer._id}`}
                      type="button"
                      class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Edit
                    </Link>
                    {/* Delete customer button  */}
                    <button
                      onClick={() => onDeleteClick(customer._id)}
                      class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
