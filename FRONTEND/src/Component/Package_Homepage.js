import React from "react";
import "./Home.css";
import axios from "axios";
export default function Package_Homepage() {
  return (

    <div className="text-2xl mt-10 flex justify-center space-x-6 py-48 mb-16">
    <a href="#">
      <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
        packages
      </button>
    </a>
    <a href="#">
      <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
        Recordes
      </button>
    </a>
  </div>
  );
}
