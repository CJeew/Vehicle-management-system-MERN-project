import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";

export default function BookRead() {
    const [bookings, setBooking] = useState([]);
    const componentRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");

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

    // Function to handle deletion of a booking
    const onDeleteClick = async (bookId) => {
        await axios.delete(`http://localhost:8090/booking/delete/${bookId}`);
        alert('Booking Deleted Successfully');
        window.location.reload(); // Refresh page after successful deletion
    };

    //Function to generate reports
    const handlePrint = () => {
        const input = document.getElementById('printable-area');

        html2canvas(input, { scrollX: 0, scrollY: -window.scrollY }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 210;
            const pageHeight = 297;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save('booking_list.pdf');
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
            <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Booking List</h2>
            <div className="absolute top-2 right-8">
                {/* Search bar */}
                <div className="relative mt-48">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* Search icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Search " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 border border-transparent" />
                </div>
            </div>
            <div id="printable-area">
                <table className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 mx-10 mt-20" ref={componentRef}>
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
                            <tr key={booking.id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                <td className="hidden">{booking.id}</td> {/* Hide the first column */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.fname} {booking.lname}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.phoneNum}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.eMail}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vNum}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.vType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(booking.dDate)}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.tTime}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.serviceBox}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-start gap-2">
                                        {/*Edit booking button */}
                                        <Link to={`/updateBooking/${booking._id}`}><button className="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Edit
                                        </button></Link>
                                        {/* Delete booking button  */}
                                        <button onClick={() => onDeleteClick(booking._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="absolute right-8 mt-5">
                <button onClick={handlePrint} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Generate Report</button>
                <div className="mt-1 opacity-0">.</div>
            </div>
        </div>
    );
}
