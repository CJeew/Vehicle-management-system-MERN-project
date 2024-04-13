import React from "react";
import "./Home.css";

import axios from "axios";
export default function servicehome() {
  return (
    <div className="grid grid-rows-2 col-1">
    <div className="text-2xl mt-100 flex justify-center space-x-6 py-48 mb-16">
      <h1 className=" font-bold text-1xl text-white">Welcomr to Ryom auto.<br></br>Welcome to the Service Management Dashboard, your one-stop solution <br></br>for all vehicle service needs. Our intuitive platform <br></br>ensures a seamless experience for managing and tracking vehicle services </h1>
      <a className="font-bold text-1xl" href="PkageHome">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          <i className="pi pi-spin pi-cog" style={{ fontSize: "4rem" }}></i>
          <br></br>
          packages
        </button>
      </a>
      <a href="addrec">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-8 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">
          <i className="pi pi-wrench" style={{ fontSize: "4rem" }}></i>
          {" "}
          <i className="pi pi-server" style={{ fontSize: "4rem" }}></i>
          <br></br> Recodes
        </button>
      </a>
    </div>
    </div>
  );
}
