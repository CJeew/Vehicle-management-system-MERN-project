import React from "react";
import "./Home.css";
//import "./BookingPage.js"
import "./Chome.css";
import "./Chome.js";

export default function Customerlogin() {
  return (
    <main
      class="mx-auto flex min-h-screen w-full items- justify-center  text-white"
    >
      
      <section class="bg-gray-800 bg-opacity-50 flex w-[30rem] flex-col space-y-10">
        <div class="my-10 text-center text-4xl font-medium">Login</div>
    
        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="text"
            placeholder="Email or Username"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
    
        <div
          class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
        >
          <input
            type="password"
            placeholder="Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>
        < dev>
        
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/Chome">Customer Login</a></button>
        
        
          
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/Cmanager">Manager Login</a></button>
          </dev>
        <a>If you do not have an account click<a href="/Register" class="font-bold text-white" ><u>Register</u></a></a>
        
      </section>
    </main>
  );}