import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookRead() {
    const [bookings, setBooking] = useState([]);

    const getBooking = () => {
        axios.get("http://localhost:8090/booking/")
            .then((res) => {
                const filteredBookings = filterPastBookings(res.data);
                setBooking(filteredBookings);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                alert(err.message);
            });
    };
   
    useEffect(() => {
        function getBooking() {
            axios.get("http://localhost:8090/booking/")
                .then((res) => {
                    console.log("Response from server:", res.data); 
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

    

    const filterPastBookings = (bookings) => {
        const currentDate = new Date();
        return bookings.filter((booking) => {
            const bookingDate = new Date(booking.dDate);
            return bookingDate < currentDate;
        });
    };

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
    <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Service History</h2>
    
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
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-red-500">{formatDate(booking.dDate)}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.tTime}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.serviceBox}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}