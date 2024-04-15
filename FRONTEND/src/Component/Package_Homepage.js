import React from "react";
import "./Home.css";

import axios from "axios";

export default function Package_Homepage() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows-1 p-10 bg-gray-200 bg-opacity-70 rounded-lg m-5 max-w-4xl mt-28 ">
        <p className="text-2xl text-center m-10 bg-black bg-opacity-75 rounded-lg p-10 text-white font-bold">
          Welcome to the Service Package<br></br>
          <br></br> At the heart of our Vehicle Management System lies a suite
          of carefully curated Service Packages designed to cater to every
          aspect of your vehicle’s maintenance and repair needs. Each package is
          a testament to our commitment to excellence, ensuring your vehicle
          remains in peak condition.
        </p>

        <div className="text-2xl grid grid-cols-3 mt-10 gap-8">
          <a href="addpkg">
            <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              Add Package
            </button>
          </a>
          <a href="viewpkg">
            <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              View Package
            </button>
          </a>
          <a href="Pkgedithome">
            <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              Update Package
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
