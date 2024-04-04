import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function EmployeeAttendance() {
  const [employeeattendance, setAttendance] = useState([]); // State for storing attendance details
  const [searchTerm, setSearchTerm] = useState(""); // State for storing search term

  // Fetch attendance details from the server on component mount
  useEffect(() => {
    function getAttendance() {
      axios.get("http://localhost:8090/employeeattendance/").then((res) => {
        console.log(res);
        setAttendance(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getAttendance();
  }, [])

  // Function to handle deletion of an attendance detail
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/employeeattendance/delete/${userId}`);
    alert('Attendance Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  // Function to filter attendance details based on search term
  const filteredAttendance = employeeattendance.filter((attendance) =>
    attendance.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    attendance.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div>
      {/* Search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search here.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mb-4 pl-10"
        // Added pl-10 class for left padding to accommodate the icon
        />
        <div className="absolute inset-y-5 left-0 flex items-center pl-3 pointer-events-none top-[0.4rem]">
          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-300"
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
      </div>

      {/* Table to display attendance details */}
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr class="bg-blue-500 text-white"> {/* Added bg-blue-500 for blue background and text-white for white text */}
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Attendance</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through attendance details and display in table rows */}
            {filteredAttendance.map((employeeattendance, index) => (
              <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeeattendance.nic}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeeattendance.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeeattendance.date}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeeattendance.attendance}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex items-left justify-start gap-2">
                    {/* Edit attendance button */}
                    <a href={`/editattendance/${employeeattendance._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </a>
                    {/* Delete attendance button  */}
                    <button onClick={() => onDeleteClick(employeeattendance._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Button to add a new attendance */}
      <div className="mt-4">
        <a href="/addattendance" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </a>
      </div>
    </div>

  );
};
