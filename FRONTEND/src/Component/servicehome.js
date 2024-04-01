import React from "react";
import "./Home.css";

export default function servicehome() {
    return (
        
           
            <div className="text-2xl">
                <ul>
                    <li><a href="/Addpkg"><button>Add Service</button></a></li>
                    <li><a href="/display"><button>Display Service</button></a></li>
                    <li><a href="/update"><button>Update Service</button></a></li>
                    <li><a href="/delete"><button>Delete Service</button></a></li>
                </ul>
                <a href="#"><button>Home</button></a>
                
                  <div className="flex justify-center space-x-4 text-2xl mt-100">
                  <a href="#"> <button className="bg-gradient-to-r from-red-400 to-red-500 px-10 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">packages</button></a>
                  <a href="#"><button className="bg-gradient-to-r from-red-400 to-red-500 px-10 py-5 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px]">Recodes</button></a>
                </div>

                
            </div>
        
    );
}
