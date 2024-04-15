import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {useReactToPrint} from "react-to-print"

export default function ManageItems() {
  const [items, setItems] = useState([]); 
  const [alerts, setAlerts] = useState([]); // State to store reorder level alerts
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Function to fetch items and reorder level alerts
    const getItemsAndAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:8090/manageparts/");
        setItems(response.data);

        // Filter items to find reorder level alerts
        const alertItems = response.data.filter(item => parseInt(item.stocklimit) < parseInt(item.reorderlevel));
        setAlerts(alertItems);
      } catch (error) {
        alert(error.message);
      }
    };

    // Fetch items and reorder level alerts on component mount
    getItemsAndAlerts();
  }, []);

  const onDeleteClick = async (itemId) => {
    await axios.delete(`http://localhost:8090/manageparts/delete/${itemId}`);
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
     const filteredmanageitems = items.filter((manageitems) =>
     manageitems.itemcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
     manageitems.itemname.toLowerCase().includes(searchTerm.toLowerCase())||
     manageitems.category.toLowerCase().includes(searchTerm.toLowerCase())||
     manageitems.description.toLowerCase().includes(searchTerm.toLowerCase())
   );
 

  return (
    <div className="h-screen w-screen bg-gray flex justify-center items-center flex-wrap relative">
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
      
        <a href="/additems" className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
        
          +Add Items
        </a>
      </div>
      <div className="absolute top-16 right-8">
        <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Generate Report
        </button>
      </div>

      
      <div ref={ComponentsRef}  class="overflow-x-auto max-h-[25 rem] overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-red-900 text-white">
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">No</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item Code</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Item Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Category</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Description</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Price</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Supplier Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Reorder Level</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Stock Limit</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Remark</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredmanageitems.map((item, index) => (
              <tr key={index} className={`bg-white border-b border-gray-200 hover:bg-gray-50 ${alerts.some(alert => alert._id === item._id) ? 'bg-red-200' : ''}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.itemcode}</td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${alerts.some(alert => alert._id === item._id) ? 'bg-red-200' : ''}`}>{item.itemname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.suppliername}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.reorderlevel}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.stocklimit}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.remark}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.isactive}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end gap-2">
                  <Link to={`/updateitems/${item._id}`} className="text-blue-500 mr-2"><FaEdit className="inline-block text-xl align-middle" /></Link>
<button onClick={() => onDeleteClick(item._id)}><FaTrash className="text-red-500 inline-block text-xl align-middle" /></button>
                    {/* <a href={`/updateitems/${item._id}`} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
      {alerts.length > 0 && (
        <div className="absolute bottom-8 right-8 bg-red-500 text-white font-bold py-2 px-4 rounded">
          {alerts.length === 1 ? (
            `1 item (${alerts[0].itemname}) needs reorder`
          ) : (
            `${alerts.length} items (${alerts.map(alert => alert.itemname).join(', ')}) need reorder`
          )}
        </div>
      )}
    </div>
  );
};
