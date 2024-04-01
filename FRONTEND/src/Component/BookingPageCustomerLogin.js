import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

//import imgSrc from "./customer.png";
//import imgSrc1 from "./manager.png";
//import imgSrc2 from "./wipe.jpg";

import imgSrc3 from "./vacuum.jpg";

export default function BookingPageCustomerLogin() {
  return (
    <div>
      <div className="relative">
      <h1 className="ms-20 my-10 mt-20 m text-6xl font-extrabold text-white ">Book Now</h1>
      <img src={imgSrc3} alt="Vacuum Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>
      <ul>
        <li className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Upcoming Appointment</li>
        <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Completed Appointment</li>
        <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Cancelled Appointment</li>
      </ul>
      <button type="button" class="ms-20 mt-20 my-10 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-yellow-900 hover:via-yellow-800 
                                  hover:to-yellow-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/bookNow">Book Now</a></button>
      </div>
      </div>
  );
}
