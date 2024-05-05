import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {useReactToPrint} from 'react-to-print';

export default function BookRead() {
    const [bookings, setBooking] = useState([]);
    const componentRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");

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

    //Function to filter bookings
    const filteredBookings = bookings.filter((bookings) =>
    bookings.fname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookings.lname.toLowerCase().includes(searchTerm.toLowerCase())||
    bookings.vNum.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bookings.vType.toLowerCase().includes(searchTerm.toLowerCase())
);

    //Function to generate reports
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        DocumentTittle:"Booking List",
        onafterprint:()=>alert ("Booking List generation successfull !!")
      })
   

return (
    <div>
    <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Service History</h2>
    <div className="absolute top-2 right-8">
    {/* Search bar */}
        <div className="relative mt-48">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* Search icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
        <input type="text"placeholder="Search " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent"/>
        </div>
    </div>
        <table  class=".w-auto bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10 ml-20" ref={componentRef}>
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
                {filteredBookings.map((booking) => (
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
        <div className="absolute right-8 mt-5">
            <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Generate Report</button>
            <div className="mt-1 opacity-0">.</div>
      </div>
    </div>
);
}