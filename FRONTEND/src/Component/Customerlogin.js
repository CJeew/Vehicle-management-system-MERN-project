import React from "react";
import "./Home.css";
//import "./BookingPage.js"
import "./Chome.css";
import "./Chome.js";

export default function Customerlogin() {
  return (
     <div className="flex justify-center items-center w-full">
      <form className="bg-gray-100 mt-20 py-10 p-14 my-10 m-60 border-gray-300 rounded-lg bg-opacity-50">
      <div>
        <div class="text-black mt-3 text-center text-4xl font-bold">Customer Login</div>
      
        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mt-10">
          <input type="text" placeholder="Email or Username" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>
    
        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mt-10">
          <input type="password" placeholder="Password" class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>
        < div>
        <div class="mt-5 mb-5 flex justify-center">
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105 mt-5"><a href="/Chome">Customer Login</a></button>
        
        
          
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105 mt-5"><a href="/Cmanager">Manager Login</a></button>
          </div>
          </div>
          <div class="mt-5 mb-5 flex justify-center">
        <a><b>If you do not have an account click </b><a href="/Register" class="font-bold text-white" ><u>Register</u></a></a></div>
        
     
 
        </div>
        </form></div>
  );}