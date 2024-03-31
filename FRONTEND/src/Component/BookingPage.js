import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";
//import "/BookingPageCustomerLogin";
import imgSrc from "./customer.png";
import imgSrc1 from "./manager.png";
import imgSrc2 from "./wipe.jpg";

export default function BookingPage() {
  return ( 
    <div>
      <div className="relative">
        <h1 className="ms-20 mt-20 m text-6xl font-extrabold dark:text-white">Book Now</h1>
        <img src={imgSrc2} alt="Wipe Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "600px" }}/>
      </div>

      <br />
      <small className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400">Simplifies the process of making reservations by providing</small>
      <br />
      <small className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400">a convenient online platform where users can easily</small>
      <br />
      <small className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400">select their desired date and time, choose the service,</small>
      <br />
      <small className="ms-20 text-2xl font-semibold text-gray-400 dark:text-gray-400">and often make payment arrangements if necessary.</small>

      <div className="flex ms-20 my-20">
        <figure>
          <img className="rounded-full w-40 h-40 ms-20" src={imgSrc} />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="/bookCusLog">Customer Login</a></button>
          </figcaption>
        </figure>
        <figure>
          <img className="rounded-full w-40 h-40 ms-20" src={imgSrc1} />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="/bookManageLog">Manager Login</a></button>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
