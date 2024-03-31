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
        <div class="my-10 text-center text-4xl font-medium">Ryome Auto Cares</div>
    
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
        
        <a
              
            href="/Chome"
            title="Register"
            class="mx-5 my-2 relative inline-flex items-center justify-center px-12 py-3 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-tr from-red-800 to-red-700 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            As Customer
          </a>
        
        
          
          <a
                
              href="/Cmanager"
              title="Register"
              class=" relative inline-flex items-center justify-center px-16 py-3 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-tr from-red-800 to-red-700 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              As  Manager
            </a>
          </dev>
        <a>If you do not have an account click<a href="/Register" class="font-bold text-white" ><u>Register</u></a></a>
        
      </section>
    </main>
  );}