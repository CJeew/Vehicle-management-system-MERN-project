import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

//import imgSrc from "./customer.png";
//import imgSrc1 from "./manager.png";
import imgSrc2 from "./wipe.jpg";

import imgSrc3 from "./vacuum.jpg";

export default function BookingPageCustomerLogin() {
  return (
    <div>
      <div className="relative">
      <h1 className="ms-20 my-10 mt-20 m text-6xl font-extrabold dark:text-white ">Book Now</h1>
      <img src={imgSrc3} alt="Vacuum Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>
      <ul>
        <li className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Upcoming Appointment</li>
        <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Completed Appointment</li>
        <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Cancelled Appointment</li>
      </ul>
      <button type="button" class="ms-20 mt-20 my-10 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><a href="/bookNow">Book Now</a></button>
      </div>
      </div>
  );
}
