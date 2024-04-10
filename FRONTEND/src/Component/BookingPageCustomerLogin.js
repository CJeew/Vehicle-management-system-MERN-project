import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

//import imgSrc from "./customer.png";
//import imgSrc1 from "./manager.png";
//import imgSrc2 from "./wipe.jpg";
//import imgSrc3 from "./vacuum.jpg";

export default function BookingPageCustomerLogin() {
  return (
    <div>
      <div className="relative">
      <h1 className="ms-20 my-10 mt-20 m text-6xl font-extrabold text-white ">Book Now</h1>
      {/*<img src={imgSrc3} alt="Vacuum Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>*/}

      <ul class="flex mx-10 mb-10">
        <li><a href="/serviceHistory" class="ms-10 me-5 block max-w-sm p-6 bg-black border border-black-200 rounded-lg shadow-md hover:bg-black-100 dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Upcoming Appointments</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Detailed rundown of your forthcoming appointments, encompassing all relevant specifics and scheduling particulars.</p></a></li>
        
        <li><a href="#" class="ms-20 me-5 block max-w-sm p-6 bg-black border border-black-200 rounded-lg shadow-md hover:bg-black-100 dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Completed Appointments</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Access to an exhaustive record of your completed appointments, complete with comprehensive details and relevant insights.</p></a></li>

        <li><a href="#" class="ms-20 block max-w-sm p-6 bg-black border border-black-200 rounded-lg shadow-md hover:bg-black-100 dark:bg-black-800 dark:border-black-700 dark:hover:bg-black-700 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Cancelled Appointments</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Summary of your cancelled appointments, containing detailed information and any relevant insights.</p></a></li>
      </ul>

      <div class="mt-10 mb-5 flex justify-center">
                    <button type="submit" class="mt-10 w-56 h-12 bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-900 hover:via-red-800 
                                  hover:to-red-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/addBooking">Book Now</a></button>
                </div>
            </div>
      </div>
  );
}
