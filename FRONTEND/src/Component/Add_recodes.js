import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

function Add_recodes(){
    //add recodes 
    const [service, setService] = useState("");
    const [customer, setCustomer] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");

    function submit(e){
        e.preventDefault(); //prevent default form submission behavior      

        const newRecorde = {
            service,
            customer,
            date,
            category
        };
        axios
        .post("http://localhost:8090/svc-records/addr", newRecorde)
        .then(()=>{        
            alert("Recode Added");
        }        
        ).catch((err)=>{
            alert(err);
        });     
 }

 return (
    <div className="  w-full flex justify-center items-center  ">
        <div className="w-full max-w-108 mt-24 bg-white p-8 rounded-lg shadow-md bg-gray-200 bg-opacity-70">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Add Recordes
        </h1>
        <form onSubmit={submit}>
        
            <label className="block mb-2 text-sm font-bold text-gray-700">
            Service</label>
            <input type="text" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setService(e.target.value)}
            required
            />
            <label className="block mb-2 text-sm font-bold text-gray-700">
            Customer</label>
            <input type="text" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setCustomer(e.target.value)}
            required
            />
            <label className="block mb-2 text-sm font-bold text-gray-700">
            Date</label>
            <input type="date" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setDate(e.target.value)}
            required
            />
            <label className="block mb-2 text-sm font-bold text-gray-700">
            Category</label>
            <input type="text" className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            onChange={(e) => setCategory(e.target.value)}
            required
            />
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit">
            Add Recorde
            </button>
    </form>
        </div>


    </div>
     
 );

}

export default Add_recodes;