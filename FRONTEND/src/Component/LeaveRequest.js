import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function LeaveRequest() {
  const [leaverequest, setLeave] = useState([]); // State for storing leave request details

  // Fetch leave details from the server on component mount
  useEffect(() => {
    function getLeave() {
      axios.get("http://localhost:8090/leaverequest/").then((res) => {
        console.log(res);
        setLeave(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getLeave();
  }, [])

  // Function to handle deletion of a leave request
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/leaverequest/delete/${userId}`);
    alert('Leave Request Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  return (
    

    <div>
  {/* Table to display staff details */}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr class="bg-blue-500 text-white"> {/* Added bg-blue-500 for blue background and text-white for white text */}
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Date</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">No of Days</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Reason</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Status</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop through staff details and display in table rows */}
        {leaverequest.map((leaverequest, index) => (
          <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.nic}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.date}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.noofdays}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.reason}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{leaverequest.status}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-left justify-start gap-2">
                {/* Edit staff button */}
                <a href={`/editleaverequest/${leaverequest._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                </a>
                {/* Delete staff button  */}
                <button onClick={() => onDeleteClick(leaverequest._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Button to add a new staff member */}
  <div className="mt-4">
    <a href="/addleaverequest" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Back
    </a>
  </div>
</div>

  );
};
