
import React, { useState } from "react";
import "./Add_Supplier.css";

import axios from "axios";
function Add_Supplier() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState(""); // Include the 'address' state
    const [country, setCountry] = useState("");

    function submit(e) {
        e.preventDefault();

        const newSupplier = {
            name,
            contact,
            address, // Include 'address' in the newSupplier object
            country
        };

        axios.post("http://localhost:8090/supplier/add", newSupplier)
            .then(() => {
                alert("Supplier Added");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div>
        <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
            <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold">Add Supplier</h1>
            <div className="flex justify-between items-center">
                <form className="form1 text-lg text-gray-950 ">
                <div className="flex flex-wrap justify-between items-center space-x-2 py-2">
                    <label>Supplier Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-wrap justify-between items-center space-x-5 py-2">

                    <label>Contact</label>
                    <input type="text" onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className="flex flex-wrap justify-between items-center space-x-2 py-2">

                    <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="flex flex-wrap justify-between items-center space-x-2 py-2">

                    <label>Country</label>
                    <input type="text" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <input className="bg-red-800 radius-2rm " type="submit" value={"Add Supplier"} onClick={submit} /> 
                </form>

            </div>

        </div>
        
        <a href="/update"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Update</button></a>
        <a href="/delete"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Delete</button></a>
        <a href="/display"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Display</button></a>
        </div>
    
);
}



export default Add_Supplier;
