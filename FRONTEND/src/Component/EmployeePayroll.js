import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function EmployeePayroll() {
  const [employeepayroll, setPayroll] = useState([]); // State for storing payroll details
  const [searchTerm, setSearchTerm] = useState(""); // State for storing search term

  // Fetch payroll details from the server on component mount
  useEffect(() => {
    function getPayroll() {
      axios.get("http://localhost:8090/employeepayroll/").then((res) => {
        console.log(res);
        setPayroll(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getPayroll();
  }, [])

  // Function to handle deletion of a payroll
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/employeepayroll/delete/${userId}`);
    alert('Payroll Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

   // Function to filter payroll details based on search term
   const filteredPayroll = employeepayroll.filter((payroll) =>
   payroll.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
   payroll.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
   payroll.otstatus.toLowerCase().includes(searchTerm.toLowerCase())
   
 );

  return (

    <div class="mt-5">
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

  {/* Table to display payroll details */}
  <div class="overflow-x-auto max-h-[25rem] overflow-y-scroll">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr class="bg-blue-500 text-white sticky top-0"> {/* Added bg-blue-500 for blue background and text-white for white text and Added sticky and top-0 for sticky header*/}
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">OT Status</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">OT Payment</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Bonus</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Penalty Amt</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Salary</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Loop through payroll details and display in table rows */}
        {filteredPayroll.map((employeepayroll, index) => (
          <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.nic}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.name}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.otstatus}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.otpayment}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.bonus}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.penaltyamt}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{employeepayroll.salary}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center justify-start gap-2">
                {/* Edit payroll button */}
                <a href={`/editpayroll/${employeepayroll._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                </a>
                {/* Delete payroll button  */}
                <button onClick={() => onDeleteClick(employeepayroll._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Button to add a new payroll member */}
  <div className="mt-4">
    <a href="/addpayroll" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add
    </a>
  </div>
</div>

  );
};
