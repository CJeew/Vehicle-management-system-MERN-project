import React from "react";
import "./Home.css";
//import "./BookingPage.js"
import "./Chome.css";
import "./Chome.js";
import imgSrc from "./789.png";
import imgSrc1 from "./741.jpg";
import imgSrc2 from "./uuu.jpg";


export default function Chome() {
  return (
    <div>
      <div className="relative">
        <h1 className="ms-20 mt-20 m text-6xl font-extrabold text-white">Customer Login</h1>
        <img src={imgSrc2} alt="Wipe Image" className="absolute top-4 right-10 mx-60 rounded-2xl" style={{ width: "400px", height: "500px" }}/>
      </div>
      <br />
      <small className="ms-20 text-xl opacity-90 mt-5 text-white">Profile button provides Manage your personal details,  </small>
      <br />
      <small className="ms-20 text-xl opacity-90 mt-5 text-white"> including editing or deleting your information  </small>
      <br />
      <small className="ms-20 text-xl opacity-90 mt-5 text-white">Review button provides Share your thoughts and experiences about </small>
      <br />
      <small className="ms-20 text-xl opacity-90 mt-5 text-white"> our services or products with others</small>
      <br />
      
      
     

      <div className="flex ms-20 my-20">
        <figure>
          <img className="rounded-full w-40 h-40 ms-20" src={imgSrc} />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-4 px-6 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/Profile">Profile</a></button>
          </figcaption>
        </figure>
        <figure>
          <img className="rounded-full w-40 h-40 ms-20" src={imgSrc1} />
          <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 ms-20">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-4 px-6 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105"><a href="/Review">Review</a></button>
          </figcaption>
        </figure>
      </div>
    </div>
    // <div class="h-screen w-screen bg-gray flex justify-center items-center">
    //   <div class="relative inline-flex  group">
    //     <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        
    //   </div>
    //   <dev>
    //     <a></a>{" "}
    //   </dev>
    //   <div class="mx-10 relative inline-flex  group">
    //     <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
    //     <a
    //       href="/Profile"
    //       title="Profile"
    //       class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    //       role="button"
    //     >
    //       Profile
    //     </a>
    //   </div>  <dev></dev>
    //   <dev>
    //     <a></a>{" "}
    //   </dev>

    //   <div class="relative inline-flex  group">
    //     <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
    //     <a
    //       href="/Review"
    //       title="Review"
    //       class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    //       role="button"
    //     >
    //       Review
    //     </a>
    //   </div>
    // </div>
  );
}
