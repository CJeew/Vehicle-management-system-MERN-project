import React from "react";
// import "./Home.css";
import imgSrc from "./logo.png";
import "./BookingPage.js";
import "./BookingPage.css";
import { Link } from "react-router-dom";
import "./Chome.js";
import "./Chome.css";
import "./Register.js";
import "./Review.js";
import "./Profile.js";

function Header() {
  return (
      <div className="text-white py-4 ml-5">
        
          {/* ------Logo-------- */}

          <nav className="flex flex-wrap justify-between items-center space-x-10 text-xl text-slate-50 " >

          <div>
            <img src= {imgSrc} alt="Logo" className="h-20 w-45 ml-10 mt-3" />
          </div>

          {/* ------Navigation links------ */}
           <div>
            <a href="/" className="hover:none  transition duration-500 ease-in-out transform hover:text-2xl">Home</a>
           </div>

           <div> 
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-2xl">Customer</a>
           </div>

           <div>
            <a href="/add" className="hover:none transition duration-300 ease-in-out transform hover:text-2xl">Suppliers</a>
           </div>

           <div>
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-2xl">Staff</a>
           </div>

           <div>
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-2xl">Inventory</a>
           </div>

           <div>
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-2xl">Finance</a>
           </div>

           <div>
            <a href = "/servicehome">
            <button className=" py-2 px-5 border-2 border-slate-50 mr-3 bg-gray-900 bg-opacity-50
                              transition duration-200 ease-in-out transform hover:scale-105">Services</button>
            </a>                  
          
          </div> 
          </nav>
        
      </div>
    );
}

export default Header;
