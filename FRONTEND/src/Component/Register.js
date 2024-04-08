import React, { useState } from "react";
import axios from "axios";

import "./Home.css";
import "./Register.js";
import "./Chome.js";

function Register() {
    const[cname, setcname] = useState("");
    const[cnic, setcnic] = useState("");
    const[cphone, setcphone] = useState("");
    const[cmail, setcmail] = useState("");
    const[cvnum, setcvnum] = useState("");   
    const[cvtype, setcvtype] = useState("");
    const[cpass, setcpass] = useState("");
    

    function sendRegister(e){
        e.preventDefault();
        //alert of inserted

        const newCustomer = {
            cname,
            cnic,
            cphone,
            cmail,
            cpass,
            cvnum,
            cvtype
            
        };

        axios.post("http://localhost:8090/customer/Register", newCustomer)
        .then(()=>{
            alert("Profile Added");
            window.location.reload();
        }).catch((err)=>{
            alert(err);
        });
    }
  return (
    <form onSubmit={sendRegister}>
    <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
   
      <div class="text-white mt-3 text-center text-4xl font-bold">
        Customer Registration
      </div>
      <div class="p-8">
        <div class="flex gap-4">
          <input required onChange={(e) => setcname(e.target.value)}
            type="Name"
            name="name"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Full Name *"
          />
          <input required onChange={(e) => setcphone(e.target.value)}
            type="Phone"
            name="Phone"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Phone *"
          />
          <input required onChange={(e) => setcnic(e.target.value)}
            type="NIC"
            name="NIC"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="NIC*"
          />
          <input required onChange={(e) => setcmail(e.target.value)}
            type="email"
            name="email"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Email *"
          />
        </div>
        <div class="flex gap-4">
          <input required onChange={(e) => setcvnum(e.target.value)}
            type="NUM"
            name="NUM"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vehicle Number *"
          />
          <select required onChange={(e) => setcvtype(e.target.value)}
            name="select"
            id="select"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
            <option class="font-semibold text-slate-300">Car</option>
            <option class="font-semibold text-slate-300">Motor Bike</option>
            <option class="font-semibold text-slate-300">Three Wheeler</option>
            <option class="font-semibold text-slate-300">Heavy Vehicle</option>
          </select>
        </div>
        <div class="mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-5 text-gray-300">
            Password
          </label>
          <div class="mt-1 rounded-md shadow-sm text-black">
            <input 
              id="password"
              name="password"
              type="password"
              
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"></input>
          </div>
        </div>

        <div class="mt-6">
          <label
            for="password_confirmation"
            class="block text-sm font-medium leading-5 text-gray-300"
          >
            Confirm Password
          </label>
          <div class="mt-1 rounded-md shadow-sm text-black">
            <input required onChange={(e) => setcpass(e.target.value)}
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              
              class="appearance-none block w-full px-3 py-2 border border-black rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-900 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></input>
          </div>
        </div>
        <dev></dev>
      </div>
      <div class="text-center">
        <button type="submit" class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-10 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105" value={"Add profile"} onClick={sendRegister}>Register</button>
      </div>
      <b></b>
    </div></form>
  );
}

export default Register;
