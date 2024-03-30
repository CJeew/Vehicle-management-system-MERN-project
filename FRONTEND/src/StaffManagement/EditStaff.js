import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./StaffStyles.css";

export default function EditStaff() {

    const [nic, setNic] = useState(""); // State for NIC
    const [name, setName] = useState(""); // State for Name
    const [designation, setDesignation] = useState(""); // State for Designation
    const [address, setAddress] = useState(""); // State for Address
    const [email, setEmail] = useState(""); // State for Email
    const [mobileno, setMobileno] = useState(""); // State for Mobile Number
    const [joindate, setJoindate] = useState(""); // State for Joined Date
  
    const { id } = useParams(); // Get the ID from URL params

 // Fetch staff details from the server on component mount
  useEffect(() => {
    axios.get(`http://localhost:8070/staffdetails/get/${id}`).then((res) => {
      setNic(res.data.staff.nic);
      setName(res.data.staff.name);
      setDesignation(res.data.staff.designation);
      setAddress(res.data.staff.address);
      setEmail(res.data.staff.email);
      setMobileno(res.data.staff.mobileno);
      setJoindate(res.data.staff.joindate);
    }).catch((err) => {
      alert(err.message);
    });
  }, [id]);

  // Function to update staff details
  function updateStaff(e) {
    e.preventDefault();

    const updatedStaff = {
      nic,
      name,
      designation,
      address,
      email,
      mobileno,
      joindate,
    };

    // Send updated staff details to the server
    axios
      .put(`http://localhost:8070/staffdetails/editstaff/${id}`, updatedStaff)
      .then(() => {
        alert("Staff Updated");
        window.location.href = "/StaffDetails";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

    

return (
  <form onSubmit={updateStaff}>
    <center><h1>Edit Staff</h1></center>
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          NIC
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="nic"
            id="nic"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={nic} //showing value
            onChange={(e)=>{    //if value is changed, onChange will be called

              setNic(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={name}
            onChange={(e)=>{

              setName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e)=>{

                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
      
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={address}
                  onChange={(e)=>{

                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
     

      <div className="sm:col-span-2 sm:col-start-1">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Designation
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="designation"
            id="designation"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={designation}
            onChange={(e)=>{

              setDesignation(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Mobile Number
        </label>
        <div className="mt-2">
          <input
            type="tel"
            name="mobileno"
            id="mobileno"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={mobileno}
            onChange={(e)=>{

              setMobileno(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Join Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="joindate"
            id="joindate"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={joindate}
            onChange={(e)=>{

              setJoindate(e.target.value);
            }}
          />
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Add
      </button>
    </div>
  </form>
  




       
    )
}