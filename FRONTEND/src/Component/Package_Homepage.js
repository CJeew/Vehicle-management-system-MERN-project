import React from "react";
import "./Home.css";

import axios from "axios";

export default function Package_Homepage() {
  return (
    <div className="text-2xl mt-48 flex justify-center mx-16 space-x-4 mx-8">
      <a href="#">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-4 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          Add Package
        </button>
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-4 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          Edit Package
        </button>
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-4 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          Update Package
        </button>
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-4 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          Delete Package
        </button>
      </a>
    </div>
  );
}
