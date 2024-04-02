import React, {useState} from "react";
import axios from "axios";


export default function AddStaff() {

    const [nic, setNic] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [joindate, setJoindate] = useState("");

    function sendData(e){
        e.preventDefault();
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

        axios.post("http://localhost:8090/staffdetails/addstaff",newStaff).then(()=>{

            alert("Staff Added")
            window.location.reload();
        }).catch((err)=>{
            alert(err)
        })

    }

return (
  <form onSubmit={sendData}>
    <center><h1>Add Staff</h1></center>
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
            onChange={(e)=>{

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