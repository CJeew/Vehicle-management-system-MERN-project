import React from "react";
import "./Home.css";
//import "./BookingPage.js"
import "./Chome.css";
import "./Chome.js";
import "./Customerlogin.js"
import "./Profile.js"
export default function Cmanager() {
  return (
    <div class="flex h-screen w-full items-center justify-center  bg-cover bg-no-repeat">
      <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-14 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
          <div class="mb-8 flex flex-col items-center">
            
            <span class="text-gray-300">Customer details</span>
          </div>
          <form action="#">
            <div class="mb-4 text-lg">
              <input class="rounded-3xl border-none bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="CustomerID" />
            </div>
    
            
            <div class="mt-8 flex justify-center text-lg text-black">
                
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/Profile">Get Details</a></button>
            
            </div>
          </form>
        </div>
      </div>

      <div class="mx-5 rounded-xl bg-gray-800 bg-opacity-50 px-20 py-16 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
          <div class="mb-8 flex flex-col items-center">
            
            <span class="text-gray-300">Customer List</span>
          </div>
          <form action="#">
            
            <div class="rounded-3xl border-none bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop--md">
            <select class ="bg-red-500 bg-opacity-5 " > 
            <option class="font-semibold text-slate-300">Car</option>
            <option class="font-semibold text-slate-300">Motor Bike</option>
            <option class="font-semibold text-slate-300">Three Wheeler</option>
            <option class="font-semibold text-slate-300">Heavy Vehicle</option>
            </select>
            </div>
            
    
            
            <div class="mt-8 flex justify-center text-lg text-black">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/">Get List</a></button>
            </div>
          </form>
        </div>
      </div>
    </div>);}