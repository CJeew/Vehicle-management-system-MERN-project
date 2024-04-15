import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cmanager.js"

export default function RegisterRead() {
    const [customer, setlist] = useState([]);

    useEffect(() => {
        function getlist() {
            axios.get("http://localhost:8090/customer/")
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

    // Function to handle deletion of a payroll
    const onDeleteClick = async (cusid) => {
        await axios.delete(`http://localhost:8090/CustomerList/delete/${cusid}`);
        alert('Profile Deleted Successfully');
        window.location.reload(); // Refresh page after successful deletion
      }
   
    

return (
    <div>
    <h2 className="ms-20 my-10 mt-20 text-6xl font-extrabold text-white">Registered Customer List</h2>
   <div class="flex justify-center items-center h-screen">
        <table  class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10">
            <thead>
                <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
                    
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Telephone</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">NIC Number</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Vehicle type</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Vehicle Number</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {customer.map((customer) => (
                    <tr key={customer.id} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cname} </td>
                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cphone}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cmail}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cnic}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cvtype}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.cvnum}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div class="flex items-center justify-start gap-2">
                                {/* Edit booking button */}
                                <a href={`/customer/${customer._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Edit
                                </a>
                                {/* Delete booking button  */}
                                <button onClick={() => onDeleteClick(customer._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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