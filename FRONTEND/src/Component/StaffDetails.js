import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { useReactToPrint } from 'react-to-print';

export default function StaffDetails() {
//   const [staffdetails, setStaff] = useState([]); // State for storing staff details

//   // Fetch staff details from the server on component mount
//   useEffect(() => {
//     function getStaff() {
//       axios.get("http://localhost:8090/staffdetails/").then((res) => {
//         console.log(res);
//         setStaff(res.data);
//       }).catch((err) => {
//         alert(err.message);
//       })
//     }
//     getStaff();
//   }, [])

//   // Function to handle deletion of a staff member
//   const onDeleteClick = async (userId) => {
//     await axios.delete(`http://localhost:8090/staffdetails/delete/${userId}`);
//     alert('User Deleted Successfully');
//     window.location.reload(); // Refresh page after successful deletion
//   }

//   return (
    

//     <div>
//   {/* Table to display staff details */}
//   <div class="overflow-x-auto">
//     <table class="min-w-full divide-y divide-gray-200">
//       <thead>
//         <tr class="bg-blue-500 text-white"> {/* Added bg-blue-500 for blue background and text-white for white text */}
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Designation</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Mobile no</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Join date</th>
//           <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* Loop through staff details and display in table rows */}
//         {staffdetails.map((staffdetails, index) => (
//           <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
//             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.nic}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.name}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.designation}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.address}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.email}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.mobileno}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.joindate}</td>
//             <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//               <div class="flex items-center justify-end gap-2">
//                 {/* Edit staff button */}
//                 <a href={`/editstaff/${staffdetails._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
//                       Edit
//                 </a>
//                 {/* Delete staff button  */}
//                 <button onClick={() => onDeleteClick(staffdetails._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
//                       Delete
//                 </button>
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
//   {/* Button to add a new staff member */}
//   <div class="mt-4">
//     <a href="/addstaff" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       Add
//     </a>
//   </div>
// </div>

//   );

  const [staffdetails, setStaff] = useState([]); // State for storing staff details
  const [searchTerm, setSearchTerm] = useState(""); // State for storing search term
  const componentRef = useRef();  //Add a reference for accessing the component to be printed

  // Fetch staff details from the server on component mount
  useEffect(() => {
    function getStaff() {
      axios.get("http://localhost:8090/staffdetails/").then((res) => {
        console.log(res);
        setStaff(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getStaff();
  }, [])

  // Function to handle deletion of a staff member
  const onDeleteClick = async (userId) => {
    await axios.delete(`http://localhost:8090/staffdetails/delete/${userId}`);
    alert('User Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  // Function to filter staff details based on search term
  const filteredStaff = staffdetails.filter((staff) =>
    staff.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.joindate.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  //Generate PDF
  const generatePDF = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Staff Details",
    onAfterPrint: () => alert("Data Saved in PDF"),
    onPrintError: () => alert("Error in Printing"),

  });

  return (
    <div class="mt-3">

      <h2 class="text-white mb-2 text-center text-3xl font-bold text-white">Employee Details</h2>
      
      {/* Search bar */}
      <div class="flex justify-between ml-1">
        <div class="relative">
          <input
            type="text"
            placeholder="Search here.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            class="border border-gray-300 p-2 rounded-md mb-4 pl-10"
          // Added pl-10 class for left padding to accommodate the icon
          />
          <div class="absolute inset-y-5 left-0 flex items-center pl-3 pointer-events-none top-[0.4rem]">
            {/* Search icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-300"
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

        <button onClick={generatePDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mr-[1rem]">
          Generate PDF
        </button>
      </div>



      {/* Table to display staff details */}
      <div class="overflow-x-auto max-h-[25rem] overflow-y-scroll ml-1 mr-1 rounded-md overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200" ref={componentRef}>

          <thead>
            <tr class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-700 text-white sticky top-0"> {/* Added bg-blue-500 for blue background and text-white for white text and Added sticky and top-0 for sticky header*/}
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">NIC</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Designation</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Mobile no</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Join date</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Loop through filtered staff details and display in table rows */}
            {filteredStaff.map((staffdetails, index) => (
              <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">

                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.nic}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.designation}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.address}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.email}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.mobileno}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{staffdetails.joindate}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div class="flex items-center justify-end gap-2">
                    {/* Edit staff button */}
                    <a href={`/editstaff/${staffdetails._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                    </a>
                    {/* Delete staff button  */}
                    <button onClick={() => onDeleteClick(staffdetails._id)} class="bg-transparent hover:bg-red-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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
      <div class="mt-4 flex justify-between">
        <a href="/addstaff" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-3 mb-5">
          Add
        </a>
        <a href="/staffhome" class="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-3 mb-5">
          Prev
        </a>
      </div>
    </div>
  );
};
