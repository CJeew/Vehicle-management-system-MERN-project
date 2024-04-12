import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";
//import imgSrc3 from "./vacuum.jpg";

export default function BookingPageManagerLogin() {
  return (
    <div>
      <div className="relative">
        <h1 className="ms-20 my-10 mt-20 m text-6xl font-extrabold text-white">Book Now</h1>
            <ul class="flex mx-10 mb-10 ">
                <li class="mx-20 mt-10"><a href="/bookRead" class="ms-10 me-5 block max-w-sm p-6 bg-black border 
                border-black-200 rounded-lg shadow-md hover:bg-black-100 dark:bg-black-800 dark:border-black-700 
                dark:hover:bg-black-700 opacity-80 transition duration-300 ease-in-out transform hover:scale-105">

                <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">Booking List</h5><br></br>
                <p class="font-normal text-gray-700 dark:text-gray-400">Review the booking list, complete with detailed information, ensuring comprehensive oversight and management of all reservations.</p></a></li>
                
                <li class="mx-10 mt-10"><a href="#" class="ms-10 me-5 block max-w-sm p-6 bg-black border 
                border-black-200 rounded-lg shadow-md hover:bg-black-100 dark:bg-black-800 dark:border-black-700 
                dark:hover:bg-black-700 opacity-80 transition duration-300 ease-in-out transform hover:scale-105">

                <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">Business Hour Settings</h5><br></br>
                <p class="font-normal text-gray-700 dark:text-gray-400">Review the booking list, complete with detailed information, ensuring comprehensive oversight and management of all reservations.</p></a></li>
            </ul>
        </div>
      </div>
  );
}
