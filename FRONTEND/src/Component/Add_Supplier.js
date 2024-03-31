
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
        <div className="container">
            <div className="Add">
                <h1 className="text-3xl text-center">Add Supplier</h1>
                <form>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />

                    <label>Contact</label>
                    <input type="text" onChange={(e) => setContact(e.target.value)} />

                    <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} />

                    <label>Country</label>
                    <input type="text" onChange={(e) => setCountry(e.target.value)} />

                    <input className="btn" type="submit" value={"Add Supplier"} onClick={submit} />
                </form>
                <a href="/display"><button className="bg-green-600 radious-30px ">Display</button></a>
                <a href="/update"><button className="bg-green-600 radious-30px ">Update</button></a>
                <a href="/delete"><button className="bg-green-600 radious-30px ">Delete</button></a>
            </div>
        </div>
    //     <div className="flex justify-center items-center h-screen bg-gray-100">
    // <div class="bg-white p-8 rounded-lg shadow-md">
    //     <h1 class="text-2xl font-bold text-center mb-4">Register Supplier</h1>
    //     <form class="space-y-4">
    //         <div>
    //             <label for="Name" class="block text-sm font-medium text-gray-700">Name</label>
    //             <input type="text" id="username" name="username" class="mt-1 p-1 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>
                         
    //         </div>
    //         <div>
    //             <label for="Contact" class="block text-sm font-medium text-gray-700">Contact</label>
    //             <input type="text" id="Contact" name="Contact" class="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>
    //         </div>
    //         <div>
    //         <label for="Address" class="block text-sm font-medium text-gray-700">Address</label>
    //             <input type="text" id="Address" name="Address" class="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"/>
    //         </div>
    //         <div>
    //         <label for="Country" class="block text-sm font-medium text-gray-700">Country</label>
    //             <input type="text" id="Country" name="Country" class="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-20"/>
    //         </div>
    //         <div>
    //             <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
    //         </div>
//         </form>
//     </div>
// </div>
    
);
}



export default Add_Supplier;
