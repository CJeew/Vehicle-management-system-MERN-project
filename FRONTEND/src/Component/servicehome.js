import React from "react";
import "./Home.css";

import axios from "axios";

export default function ServiceHome() {
  return (
    <div className="flex justify-center items-center w-full mt-10">
      <div className="grid grid-rows-1 p-10 bg-gray-200 bg-opacity-70 rounded-lg mx-5 max-w-4xl ">
        <div className="mt-10 space-x-6 p-10 bg-black bg-opacity-75 rounded-lg">
          <p className="font-bold text-2xl text-white mb-10 text-center">
            Welcome to Ryom Autocare Service<br></br>
            <br></br>Welcome to the Service Management Dashboard, your one-stop
            solution for all vehicle service needs. Our intuitive platform
            ensures a seamless experience for managing and tracking vehicle
            services
          </p>
       <div className="flex justify-center items-center gap-10">
        <a className="font-bold text-1xl" href="PkageHome">
          <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
            <i className="pi pi-spin pi-cog" style={{ fontSize: "2rem" }}></i>
            <br></br>
            Packages
          </button>
        </a>
        <a href="addrec">
          <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
            <i className="pi pi-wrench" style={{ fontSize: "2rem" }}></i>{" "}
            <i className="pi pi-server" style={{ fontSize: "2rem" }}></i>
            <br></br> Records
          </button>
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}
