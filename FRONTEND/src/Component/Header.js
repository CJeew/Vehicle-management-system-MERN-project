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

<<<<<<< HEAD
        <li>
          <a href="/add">Supplier</a>
        </li>
        <li>
          <a href="">Staff</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/">Finance</a>
        </li>
        <li>
          <a href="servicehome">Services</a>
        </li>
        <li></li>
=======
           <a href="/"><img src= {imgSrc} alt="Logo" className="h-16 w-43 ml-10 mt-3" /></a>
                   </div>
>>>>>>> 8a4833ecac7985ced8f0ce5a68e95a1808ba8359

          {/* ------Navigation links------ */}
           <div>
            <a href="/" className="hover:none  transition duration-500 ease-in-out transform hover:text-orange-500">Home</a>
           </div>

           <div> 
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-orange-500">Customer</a>
           </div>

           <div>
            <a href="/add" className="hover:none transition duration-300 ease-in-out transform hover:text-orange-500">Suppliers</a>
           </div>

           <div>
            <a href="/staffhome" className="hover:none transition duration-300 ease-in-out transform hover:text-orange-500">Staff</a>
           </div>

           <div>
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-orange-500">Inventory</a>
           </div>

           <div>
            <a href="#" className="hover:none transition duration-300 ease-in-out transform hover:text-orange-500">Finance</a>
           </div>

           <div>
            <a href = "/servicehome">
            <button className=" py-2 px-5 border-2 border-slate-50 mr-3 bg-gray-900 bg-opacity-50
                              transition duration-200 ease-in-out transform hover:scale-105 rounded-lg">Services</button>
            </a>                  
          
          </div> 
          </nav>
        
      </div>
    );
}

export default Header;
