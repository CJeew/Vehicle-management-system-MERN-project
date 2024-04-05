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
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert(err.message);
                });
        }

        getBooking();
    }, []);

return (
    <div>
                <h1 style={{ color: "red" }}>Display all Bookings</h1>
<div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
        
        <div className="">
        <ul>
            {bookings.map((booking) => (
                <div className="flex">
                <li style={{fontSize:20}} type="none" key={booking.id}><label>Name :</label>{" "+booking.name}<br/><label>Address :</label>{" "+booking.address}<pre>{JSON.stringify()}</pre>            
                 <div className="line" style={{color:"white"}}>.</div>
                </li>  
                {/* {JSON.stringify(supplier)} */}
                </div>
            ))}
        </ul>
       </div>
        </div>
    </div>
);
}

