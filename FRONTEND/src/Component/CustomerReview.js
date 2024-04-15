import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import "./Cmanager.js"

export default function ReviewRead() {
    const [reviewAdd, setlist] = useState([]);
    const componentRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        function getlist() {
            axios.get("http://localhost:8090/reviewAdd/")
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
  const onDeleteClick = async (revid) => {
    await axios.delete(`http://localhost:8090/reviewAdd/delete/${revid}`);
    alert('Review Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }
  //Function to filter bookings
  const filteredreview = reviewAdd.filter((reviewAdd) =>
  
  reviewAdd.rating.toLowerCase().includes(searchTerm.toLowerCase()) 
  //reviewAdd.cmail.toLowerCase().includes(searchTerm.toLowerCase()) 
  
);
   
    

return (
    <div>
    <h2 className="ms-20 my-10 mt-20 text-6xl font-extrabold text-white">Review List</h2>
    <div className="absolute top-2 right-8">
    {/* Search bar */}
        <div className="relative mt-48">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
        <input type="text"placeholder="Search " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent"/>
        </div>
    </div>
        
    <div class="flex justify-center items-center h-screen">
    <table class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky mx-10 absolute bottom-20 left-25" ref={componentRef}>
        <thead>
            <tr class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-15">
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">E-Mail</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Rating </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Message</th>
            </tr>
        </thead>
        <tbody>
            {filteredreview.map((reviewAdd) => (
            <tr key={reviewAdd.id} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reviewAdd.cmail} </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reviewAdd.rating}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reviewAdd.message}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div >
                    {/* Delete review button  */}
                    <button onClick={() => onDeleteClick(reviewAdd._id)} class="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Delete
                    </button>
                </div></td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>

);
}