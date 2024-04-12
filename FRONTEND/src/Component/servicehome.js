import React from "react";
import "./Home.css";

import axios from "axios";
export default function servicehome() {
  return (
    <div className="text-2xl mt-100 flex justify-center space-x-6 py-48 mb-16">
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
  );
}
