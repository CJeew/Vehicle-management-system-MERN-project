// import React from "react";
// import "./Home.css";

// function Home() {
//     return (
//         <div className="flex justify-left mt-20 ml-14 h-screen text-white">
//             <div className="text-left">
//                 <h1 className="text-5xl font-bold opacity-90">Maintenance & Repair <br /><span className="text-orange-500">Services</span></h1>
//                 <br />
//                 <p className="text-xl mt-2 italic">"Experience the pinnacle of automotive care with Ryome Autocare today."</p><br />
//                 <p className="text-xl opacity-90 mt-5">Transform the way you drive with Ryome Autocare, the pinnacle of accuracy in<br /> auto repair and maintenance.  Our expert technicians ensure your vehicle runs at its<br /> peak, delivering unparalleled accuracy and reliability. </p>
//                 <div className="mt-16 ">
//                     <a href="/booking" class="text-whitesmoke">
//                         <button className="py-2 px-6 border-2 border-white bg-transparent text-white mr-4 hover:bg-red-500 hover:text-white transition duration-300 mb-20" style={{ borderBottomLeftRadius: '1rem' }}>BOOK NOW</button>
//                     </a>
//                     <a href="/createjob">
//                         <button className="py-2 px-6 border-2 border-white bg-transparent text-white hover:bg-red-500 hover:text-white transition duration-300 mb-20" style={{ borderTopRightRadius: '1rem' }}>NEW JOB</button>
//                     </a>
//                 </div>

//                 <div className="mt-20">
//                     <h1 className="text-3xl font-bold"><span className="text-orange-500">MAIN </span>SERVICES</h1>
//                 </div>

//                 {/* Main service boxes */}
//                 <div className="flex">
//                     <div className="w-1/3 bg-gray-200 p-4">
//                         <img src="your_image_url_here" alt="Service 1" className="mb-4" />
//                         <p className="text-lg">Service 1 Description</p>
//                     </div>
//                     <div className="w-1/3 bg-gray-300 p-4">
//                         <img src="your_image_url_here" alt="Service 2" className="mb-4" />
//                         <p className="text-lg">Service 2 Description</p>
//                     </div>
//                     <div className="w-1/3 bg-gray-400 p-4">
//                         <img src="your_image_url_here" alt="Service 3" className="mb-4" />
//                         <p className="text-lg">Service 3 Description</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;
import React from "react";
import "./Home.css";
import image1 from "../Images/image 4.png";
import image2 from "../Images/image 2.png";
import image3 from "../Images/image 3.png";

function Home() {
    return (
        <div className="mt-20 ml-14 h-screen text-white">
            <div className="text-left">
                <h1 className="text-5xl font-bold opacity-90">Maintenance & Repair <br /><span className="text-orange-500">Services</span></h1>
                <br />
                <p className="text-xl mt-2 italic">"Experience the pinnacle of automotive care with Ryome Autocare today."</p><br />
                <p className="text-xl opacity-90 mt-5">Transform the way you drive with Ryome Autocare, the pinnacle of accuracy in<br /> auto repair and maintenance.  Our expert technicians ensure your vehicle runs at its<br /> peak, delivering unparalleled accuracy and reliability. </p>
                <div className="mt-16 ">
                    <a href="/booking" className="text-whitesmoke">
                        <button className="py-2 px-6 border-2 border-white bg-transparent text-white mr-4 hover:bg-red-500 hover:text-white transition duration-300 mb-20" style={{ borderBottomLeftRadius: '1rem' }}>BOOK NOW</button>
                    </a>
                    <a href="/createjob">
                        <button className="py-2 px-6 border-2 border-white bg-transparent text-white hover:bg-red-500 hover:text-white transition duration-300 mb-20" style={{ borderTopRightRadius: '1rem' }}>NEW JOB</button>
                    </a>
                </div>

                <div className="mt-20">
                    <h1 className="text-4xl font-bold"><span className="text-orange-500">MAIN </span>SERVICES</h1>
                </div>

                {/* Main service boxes */}
                <div className="flex mr-5 mt-20 ">
                    <div className="w-90 p-4 mr-5 rounded-lg bg-gray-700 opacity-60">
                        <img src={image1} className="mx-auto block mt-1" />
                        <h1 className="text-3xl font-bold text-center mt-3 opacity-80">Routing <br/>Maintenance</h1>
                        <p className="text-justify text-xl mt-10 opacity-80 ml-20 leading-8 ">With our routine maintenance <br/> package, you can keep your car in<br/> excellent condition. We provide<br/> complete air, oil, and fuel filter<br/> replacements, expert oil changes,<br/> careful tire rotations, and pressure<br/> checks.</p>
                    </div>
                    <div className="w-90 p-4 mr-5 rounded-lg bg-gray-700 opacity-60 ">
                        <img src={image2} className="mx-auto block" />
                        <h1 className="text-3xl font-bold text-center mt-3 opacity-60">Diagnostic & Repair <br/>Services</h1>
                        <p className="text-justify text-xl mt-10 opacity-80 ml-20 leading-8 ">Our skilled technicians are experts<br/> in thorough brake inspections and <br/>repairs, accurate engine<br/> diagnostics, and effective<br/> troubleshooting of common<br/> electrical problems.</p>
                    </div>
                    <div className="w-90 p-4 mr-5 rounded-lg bg-gray-700 opacity-60">
                        <img src={image3} alt="Service 3" className="mx-auto block " />
                        <h1 className="text-3xl font-bold text-center mt-3 opacity-80">Tire <br />Services</h1>
                        <p className="text-justify text-xl mt-10 opacity-80 ml-20 leading-8 ">Ensure a smooth ride and optimal<br/> tire performance with our tire <br/>services. From top-quality tire sales<br/> to expert wheel balancing and<br/> alignment, we've got your wheels<br/> covered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
