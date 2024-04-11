import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';

import { Link , useNavigate} from 'react-router-dom';
import {useReactToPrint} from "react-to-print"

export default function ManageOrders() {
  const [items, setItems] = useState([]); 

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

  return (
    <div className="h-screen w-screen bg-gray flex justify-center items-center flex-wrap relative">
      <div className="absolute top-8 left-8">
      
        <a href="/Addorder" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        
          +Add Items
        </a>
      </div>
      <div className="absolute top-8 right-8">
        <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Generate Report
        </button>
      </div>
      <div ref={ComponentsRef} className="relative inline-flex group mr-4 fire-container">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-red-900 text-white">
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item Code</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Supplier Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Need Quantity</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Order Code</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
            
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemcode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.suppliername}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.needquantity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.ordercode}</td>
               
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                    <a href={`/manageorderupdate/${item._id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </a>
                    <button onClick={() => onDeleteClick(item._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
};

