import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function BookingList() {
  const [bookinglist, setBooking] = useState([]); // State for storing booking details

  // Fetch booking details from the server on component mount
  useEffect(() => {
    function getBooking() {
      axios.get("http://localhost:8090/bookinglist").then((res) => {
        console.log(res);
        setBooking(res.data);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getBooking();
  }, [])

  // Function to handle deletion of a booking
  const onDeleteClick = async (bookId) => {
    await axios.delete(`http://localhost:8090/bookingList/delete/${bookId}`);
    alert('Booking Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

  return (
    <div>

  {/* Table to display booking details */}
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
        <tr class="bg-blue-500 text-white"> {/* Added bg-blue-500 for blue background and text-white for white text */}
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">First Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Last Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Phone Number</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Number</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Type</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Date</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Time</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Services</th>
        </tr>
      <tbody>
        {/* Loop through staff details and display in table rows */}
        {bookinglist.map((bookinglist, index) => (
          <tr key={index} class="bg-white border-b border-gray-200 hover:bg-gray-50">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{bookinglist.fname}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.lname}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.address}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.phoneNum}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.eMail}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.vNum}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.vType}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.dDate}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.tTime}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{bookinglist.serviceBox}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center justify-end gap-2">
                {/* Edit booking button */}
                <a href={`/editbooking/${bookinglist._id}`} type="button" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit
                </a>
                {/* Delete booking button  */}
                <button onClick={() => onDeleteClick(bookinglist._id)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Button to add a new booking member */}
  <div className="mt-4">
    <a href="/addBooking" class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add
    </a>
  </div>
</div>

  );
};
