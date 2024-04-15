import React from "react";
import "./Home.css";
import imgSrc from "../Images/servicerec.jpeg";


export default function Recordshome() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows-1 p-10 bg-gray-200 bg-opacity-70 rounded-lg m-5 max-w-3xl mt-10 ">
        <p className="text-3xl font-bold text-gray-800 text-center ">
         Service Record.
        </p>
        <img src={imgSrc} alt="recodeimg" className="w-2/4 mx-auto mt-10 rounded-2xl" />
        <div className="text-2xl grid grid-cols-2 mt-10 gap-6">
          <a href="addrec">
            <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              Add Record
            </button>
          </a>
          <a href="recview">
            <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
              View records
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
