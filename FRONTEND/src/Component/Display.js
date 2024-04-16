
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Display() {
    const [suppliers, setSuppliers] = useState([]);
   
    useEffect(() => {
        getSuppliers();
    }, []);

    const getSuppliers = () => {
        axios.get("http://localhost:8090/supplier/")
            .then((res) => {
                console.log("Response from server:", res.data);
                setSuppliers(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                alert(err.message);
            });
    };

    const deletesupplier = async (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this supplier?");
        if (confirmDelete) {
            await axios.delete(`http://localhost:8090/supplier/delete/${userId}`);
            alert('Supplier Deleted Successfully');
            window.location.reload(); // Refresh page after successful deletion
        }
    };

    

    return (
        <div>
            <a href="/add">
                <button className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:from-green-900 
                hover:via-green-800 hover:to-green-700 text-white ml-20 mt-10 mx-auto font-bold py-3 px-5 rounded-lg mr-2 
                opacity-90 transition duration-300 ease-in-out transform hover:scale-105 " >
                    + Add Supplier
                </button>
            </a>
            <div className="container bg-gray-900 rounded-lg bg-opacity-70 px-8 py-4 mt-3 mx-5 mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    {suppliers.map((supplier) => (
                        <div key={supplier.id} className="bg-white rounded-lg p-4 bg-opacity-55">
                            <div className="h-14 rounded-lg p-4 bg-slate-800" style={{ borderBottomRightRadius: '0rem', borderBottomLeftRadius: '0rem' }}>
                                <p className="text-3xl mb-8 text-red-700 font-bold ml-8">{supplier.name}</p>
                            </div>
                            <div className="bg-gray-200 opacity-90 rounded-lg p-4" style={{ borderTopRightRadius: '0rem', borderTopLeftRadius: '0rem' }}>
                                <p className="text-base mb-5 text-lg font-bold">{supplier.Main_supplies}</p>
                                <p className="text-base text-lg mb-1">Phone: {supplier.contact} / {supplier.contact_2}</p>
                                <p className="text-base text-lg mb-5">Address: {supplier.address}</p>
                                <button
                                    onClick={() => deletesupplier(supplier._id)}
                                    className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-900 hover:via-red-800 
                                    hover:to-red-700 text-white float-right mx-auto font-bold py-1 px-3 rounded-lg mb-2 mr-2 opacity-90 
                                    transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Delete
                                </button>
                               <Link to ={`/update/${supplier._id}`}> <button className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:from-green-900 
                                    hover:via-green-800 hover:to-green-700 text-white float-right mx-auto font-bold py-1 px-3 rounded-lg mr-2 
                                    opacity-90 transition duration-300 ease-in-out transform hover:scale-105"> Edit</button></Link>
                                <a href="/display">
                                    <button className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:from-blue-900 
                                    hover:via-blue-800 hover:to-blue-700 text-white float-right mx-auto font-bold py-1 px-3 rounded-lg mr-2 
                                    opacity-90 transition duration-300 ease-in-out transform hover:scale-105">Purchase</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
