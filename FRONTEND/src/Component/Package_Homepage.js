import React from "react";
import "./Home.css";
import imgsrc from "../Images/service.webp";

import axios from "axios";

export default function Package_Homepage() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows-1 p-10 bg-gray-200 bg-opacity-70 rounded-lg  max-w-4xl m-5 ">
        <div className=" bg-black bg-opacity-75 rounded-lg p-5 text-white font-bold">
      
      <h1 className="text-3xl text-center p-3 ext-black font-bold ">  Service Packages.</h1>
      <img src={imgsrc} alt="recodeimg" className="w-2/4 mx-auto mt-5 rounded-2xl" />
        <p className="text-1xl text-center m-3 p-4 text-white font-bold text-justify">
         At the heart of our Vehicle Management System lies a suite
          of carefully curated Service Packages designed to cater to every
          aspect of your vehicle’s maintenance and repair needs. Each package is
          a testament to our commitment to excellence, ensuring your vehicle
          remains in peak condition.
        </p>
        </div>
        <div className="text-1xl grid grid-cols-3 mt-6 gap-8">
          <a href="addpkg">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900   px-2 py-3 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              Add Package
            </button>
          </a>
          <a href="viewpkg">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900  px-2 py-3 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              View Package
            </button>
          </a>
          <a href="Pkgedithome">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900  px-2 py-3 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              Update Package
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
