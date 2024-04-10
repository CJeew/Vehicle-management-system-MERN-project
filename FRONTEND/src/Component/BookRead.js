import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookRead() {
    const [bookings, setBooking] = useState([]);

    useEffect(() => {
        function getBooking() {
            axios.get("http://localhost:8090/booking/")
                .then((res) => {
                    console.log("Response from server:", res.data); 
                    setBooking(res.data);
                    const reverseList = res.data.reverse();
                    setBooking(reverseList);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert(err.message);
                });
        }

        getBooking();
    }, []);

    // Function to handle deletion of a payroll
  const onDeleteClick = async (bookId) => {
    await axios.delete(`http://localhost:8090/booking/delete/${bookId}`);
    alert('Booking Deleted Successfully');
    window.location.reload(); // Refresh page after successful deletion
  }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
    };

return (
    <div>
    <h2 className="ms-20 my-10 mt-20 text-6xl font-extrabold text-white">Booking List</h2>
    
    <table  class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10">
            <thead>
            <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
                    {/*<th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Address</th>*/}
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Telephone</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Email</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Number</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Vehicle Type</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Date</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Time</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Services</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Function</th>
                    
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                    <tr key={booking.id} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.fname} {booking.lname}</td>
                        {/*<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.address}</td>*/}
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.phoneNum}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eMail}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vNum}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vType}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(booking.dDate)}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.tTime}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.serviceBox}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div class="flex items-center justify-start gap-2">
                                {/*Accept booking button */}
                                <button href="" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Accept
                                </button>
                                {/* Reject booking button  */}
                                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Reject
                                </button>
                            </div>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

);
}