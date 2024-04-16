import React, { useState, useEffect, useRef } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';


import axios from 'axios';

import { Link , useNavigate} from 'react-router-dom';
import {useReactToPrint} from "react-to-print"

export default function ManageOrders() {
  const [items, setItems] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function getItems() {
      axios.get("http://localhost:8090/manageorders/").then((res) => {
        console.log(res);
        setItems(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getItems();
  }, [])

  
  const onDeleteClick = async (itemId) => {
    await axios.delete(`http://localhost:8090/manageorders/delete/${itemId}`);
    alert('Item Deleted Successfully');
    window.location.reload();
  }

  const ComponentsRef= useRef();
  const handlePrint = useReactToPrint({
    content:()=>ComponentsRef.current,
    DocumentTittle:"order report",
    onafterprint:()=>alert ("user report successfully ")
  })


    // Function to filter announcements based on search term
    const filteredmanageorder = items.filter((manageorders) =>
    manageorders.itemcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manageorders.itemname.toLowerCase().includes(searchTerm.toLowerCase())||
    manageorders.suppliername.toLowerCase().includes(searchTerm.toLowerCase())||
    manageorders.ordercode.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
   
    <div className="h-screen w-screen bg-gray flex justify-center items-center flex-wrap relative">
      
        <div className="absolute top-2 left-8">
        <h2 className="ms-20 my-10 mt-20 text-6xl font-extrabold text-white">Managed Orders</h2>
        </div>
     
       <div className="absolute top-2 right-8">
   {/* Search bar */}
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    {/* Search icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>
  <input
    type="text"
    placeholder="Search "
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent"
  />
</div>
</div>

<div className="absolute top-2 left-8">
        <a href="/Addorder" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        
          +Add Orders
        </a>
      </div>
      <div className="absolute top-16 right-8">
        <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Generate Report Order
        </button>
      </div>
      
      <div  class="flex justify-center items-center h-screen">
        
      <table  ref={ComponentsRef}  class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10">
          <thead>
          <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">No</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Item Code</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Item Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Supplier</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Need Quantity</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Order Code</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-white  tracking-wider">Action</th>
            
            </tr>
          </thead>
          <tbody>
            {filteredmanageorder.map((item, index) => (
              <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemcode}</td>
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemname}</td>
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.suppliername}</td>
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.needquantity}</td>
                <td  class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ordercode}</td>
               
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center justify-end gap-2">
                  <Link to={`/manageorderupdate/${item._id}`} className="text-blue-500 mr-2"><FaEdit className="inline-block text-xl align-middle" /></Link>
<button onClick={() => onDeleteClick(item._id)}><FaTrash className="text-red-500 inline-block text-xl align-middle" /></button>
                    {/* <a href={`/manageorderupdate/${item._id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </a>
                    <button onClick={() => onDeleteClick(item._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </button> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

