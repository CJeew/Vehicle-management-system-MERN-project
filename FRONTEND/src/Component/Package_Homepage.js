import React from "react";
import "./Home.css";

import axios from "axios";

export default function Package_Homepage() {
  return (
    <div className="flex  justify-center items-center">
      <div className="text-2xl  grid grid-cols-2 mt-56 gap-8">
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
        <a href="deletepkg">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
          Delete Package
        </button>
        </a>
      </div>
    </div>
  );
}
