import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";
import imgSrc3 from "./vacuum.jpg";

export default function BookingPageManagerLogin() {
  return (
    <div>
      <div className="relative">
        <h1 className="ms-20 my-10 mt-20 m text-6xl font-extrabold dark:text-white">Book Now</h1>
        <img src={imgSrc3} alt="Vacuum Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>
            <ul>
                <li className="ms-20  text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Booking List</li>
                <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Appointment Calendar</li>
                <li className="ms-20 my-10 text-2xl font-semibold text-gray-400 dark:text-gray-400 hover:text-red-600">Staff Shifts</li>
            </ul>
        </div>
      </div>
  );
}
