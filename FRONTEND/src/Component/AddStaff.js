import React, { useState } from "react";
import axios from "axios";


export default function AddStaff() {

  const [nic, setNic] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [joindate, setJoindate] = useState("");
  //const [nicError, setNicError] = useState("");
  //const [nameError, setNameError] = useState("");
  //const [designationError, setDesignationError] = useState("");


  // function validateEmail(value) {
  //   const emailVal = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  //   return emailVal.test(value);
  // }


  function sendData(e) {
    e.preventDefault();  //prevent the default behavior of form submission (eg: automatically refresh the page) if allowed, we can't get any message from backend
    //alert("Inserted");

    const newStaff = {

      nic,
      name,
      designation,
      address,
      email,
      mobileno,
      joindate
    }

    axios.post("http://localhost:8090/staffdetails/addstaff", newStaff).then(() => {

      alert("Staff Added")
      window.location.reload();
    }).catch((err) => {
      alert(err.response.data.message)
    })

  }

  function handleDateChange(e) {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    // Set hours, minutes, seconds, and milliseconds to 0 for both dates
    currentDate.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);


    if (selectedDate > currentDate) {
      alert("Please select a date on or before today.");
    } else {
      setJoindate(e.target.value);
    }
  }

  // Name format error message
  function handleNameChange(e) {
    const value = e.target.value;
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(value)) {
      // Prevent further input by freezing the input field
      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
    } else {
      setName(value);
    }
  }

  // Designation format error message
  function handleDesignationChange(e) {
    const value = e.target.value;
    const designationPattern = /^[A-Za-z\s]+$/;

    if (!designationPattern.test(value)) {
      // Prevent further input by freezing the input field
      e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
    } else {
      setDesignation(value);
    }
  }

  // NIC format error message
  function handleNicChange(e) {
    const value = e.target.value;
    const nicPattern = /^[0-9]{0,9}[vV]{0,1}$|^[0-9]{0,12}$/;

    if (!nicPattern.test(value)) {
      // Prevent further input by freezing the input field
      e.target.value = e.target.value.slice(0, -1);
    } else {
      setNic(value.toUpperCase()); // Convert V/v to uppercase for consistency
    }
  }

  // // Mobileno format error message
  // function handleMobilenoChange(e) {
  //   const value = e.target.value;
  //   const MobilePattern = /^[0-9]{10}$/;

  //   if (!MobilePattern.test(value)) {
  //     // Prevent further input by freezing the input field
  //     e.target.value = e.target.value.replace(/[^0-9]{10}/g, '');
  //   } else {
  //     setMobileno(value);
  //   }
  // }


  return (
    <form onSubmit={sendData}>
      <div class="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5 mx-auto w-2/3">
        <center><h1>Add Staff</h1></center>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              NIC
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="nic"
                id="nic"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                pattern="[0-9]{9}[vV]{1}|[0-9]{12}"
                onChange={handleNicChange}
                required />

            </div>
          </div>

          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                //pattern="[A-Za-z]"
                onChange={handleNameChange}
                required />
            </div>
          </div>

          <div class="col-span-full">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div class="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                onChange={(e) => {

                  setEmail(e.target.value);
                  //setEmailError("");
                }}
                required />
              {/* {emailError && <p className="text-red-500">{emailError}</p>} */}
            </div>
          </div>

          <div class="col-span-full">
            <label htmlFor="street-address" class="block text-sm font-medium leading-6 text-gray-900">
              Address
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {

                  setAddress(e.target.value);
                }}
                required />
            </div>
          </div>


          <div class="sm:col-span-2 sm:col-start-1">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Designation
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="designation"
                id="designation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleDesignationChange}
                required />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Mobile Number
            </label>
            <div class="mt-2">
              <input
                type="number"
                name="mobileno"
                id="mobileno"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                pattern="[0-9]{10}"
                maxLength={10} // Limit input to 10 characters
                onChange={(e) => {
                  setMobileno(e.target.value);
                }}
                required />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Join Date
            </label>
            <div class="mt-2">
              <input
                type="date"
                name="joindate"
                id="joindate"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleDateChange}
                required />
            </div>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <a href="/staffdetails" type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </a>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add
          </button>
        </div>
      </div>
    </form>






  )
}