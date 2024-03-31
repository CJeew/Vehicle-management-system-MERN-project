import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="flex justify-left mt-20 ml-14 h-screen text-white">
         <div className="w-1/2 text-left">
            <h1 className="text-5xl font-bold opacity-90">Maintenance & Repair <br /><span className="text-orange-500">Services</span></h1>
            <br />
            <p className="text-xl opacity-90">Transform the way you drive with Ryome Autocare, the pinnacle of accuracy in auto repair and maintenance.</p>
            <div className="mt-6">
            <a href="/booking" class="text-whitesmoke">
                <button className="py-2 px-6 border-2 border-white bg-transparent text-white mr-4 hover:bg-red-500 hover:text-white transition duration-300" style={{ borderBottomLeftRadius: '1rem' }}>BOOK NOW</button>
            </a>
            <a href="/createjob">
                <button className="py-2 px-6 border-2 border-white bg-transparent text-white hover:bg-red-500 hover:text-white transition duration-300" style={{ borderTopRightRadius: '1rem' }}>NEW JOB</button>
            </a>
            </div>

            <div className="mt-12">
            <h1 className="text-3xl font-bold">MAIN SERVICES</h1>
            </div>
            <div className="secImg"></div> 
         </div>
        </div>
        
    );
}

export default Home;
