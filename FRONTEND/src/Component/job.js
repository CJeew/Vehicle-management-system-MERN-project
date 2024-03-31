import React, {useState} from "react";
import axios from "axios";
import './job.css'

function CreateJob() {
    const [jobNumber, setjobNumber] = useState("");
    const [jobDate, setjobDate] = useState("");
    const [address, setvehicleType] = useState(""); // Include the 'address' state
    const [country, setregistrationNo] = useState("");
    const [vehicleMake, setvehiclemake] = useState("");
    const [vehicleModel, setvehicleModel] = useState("");
    const [mileage, setmileage] = useState("");
    const [year, setyear] = useState("");
    const [timeIn, settimeIn] = useState("");
    const [out, setout] = useState("");
    const [name,  setname] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [email, setemail] = useState("");
    const [serviceType, setserviceType] = useState("");
    const [details, setdetails] = useState("");


    // function submit(e) {
    //     e.preventDefault();

    //     const newSupplier = {
    //         name,
    //         contact,
    //         address, // Include 'address' in the newSupplier object
    //         country
    //     };

    //     axios.post("http://localhost:8090/supplier/add", newSupplier)
    //         .then(() => {
    //             alert("Supplier Added");
    //         })
    //         .catch((err) => {
    //             alert(err);
    //         });
    // }

    // Generate an array of years from 1900 to the current year
    const years = [];
    const currentYear = new Date().getFullYear();
    for (let year = 1992; year <= currentYear; year++) {
      years.push(year);
    }


  
  return (
    <div className="mx-auto max-w-screen-xl">
            <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">

              <div className="flex justify-between items-center">
                <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold">New job</h1>
                <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105">View Jobs</button>

              </div> <br />

                <form className="form1 text-lg text-gray-950 ">
                  
              {/*------ Line 01 starts------ */}

                <div className="flex flex-wrap justify-between items-center space-x-2">
                  <div className="flex items-center mb-2">  
                    <label className = "mr-11">Job Number :</label>
                    <input type="text" onChange={(e) => setjobNumber(e.target.value)} className="rounded-md w-50 h-10 opacity-80"/>
                  </div>

                  <div className="flex items-center mb-2">
                    <label className="mr-4">Job Date :</label>
                    <input type="date" onChange={(e) => setjobDate(e.target.value)} className="rounded-md w-60 h-10 opacity-80 text-base"/>
                  </div>

                  <div className="flex items-center mb-2">
                    <label className="mr-4">Vehicle Type :</label>
                    <select id="vehicle" onChange={(e) => setvehicleType(e.target.value)} className="rounded-md w-50 h-10 opacity-80 text-base">
                        <option value="">--Choose an option--</option>
                        <option value="car">Car</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                        <option value="Bus">Bus</option>
                        <option value="Bike">Bike</option>

                    </select>
                  </div>
                </div>
                {/* -------Line 01 ends------ */}

                
                <h2 className="Heading2 font-bold text-xl mb-3">Vehicle Details</h2>

                {/*------ Line 02 starts-------*/}

                 <div className="flex flex-wrap justify-between items-center space-x-2">
                  <div className="flex items-center mb-2"> 
                    <label className="mr-4">Vehicle Reg. No :</label>
                    <input type="text" onChange={(e) => setregistrationNo(e.target.value)} className="rounded-md w-50 h-10 opacity-80" />
                  </div>     

                    <label className="mr-2">Vehicle Make :</label>
                    <select id="vehiclemake" onChange={(e) => setvehiclemake(e.target.value)} className="rounded-md w-50 h-10 opacity-80">
                        <option value="">--Choose an option--</option>
                        <option value="toyota">Toyota</option>
                        <option value="BMW">BMW</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Benz">Benz</option>
                        <option value="MG">MG</option>
                        <option value="Subaru">Subaru</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mitsubishi">Mitsubishi</option>

                    </select>

                    <label className="mr-4">Vehicle Model :</label>
                    <input type="text" onChange={(e) => setvehicleModel(e.target.value)} className="rounded-md w-50 h-10 opacity-80"/>
                 </div> 

                 {/* ---------Line 02 ends----------  */}

                 {/* ----------Line 03 starts---------*/}

                 <div className="flex flex-wrap justify-between items-center space-x-1">
                  <div className="flex items-center mb-2"> 
                    <label className="mr-4">Mileage :</label>
                    <input type="text" onChange={(e) => setmileage(e.target.value)} className="rounded-md w-50 h-10 opacity-80 mt-3"/>
                  </div>

                    <label className="mr-4">Year :</label>
                    <select id="year" onChange={(e) => setyear(e.target.value)} className="rounded-md w-50 h-10 opacity-80 mt-3">
                      <option value="">   </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>

                    <label className="mr-2">Time In :</label><br />
                    <input type="time" onChange={(e) => settimeIn(e.target.value)} className="rounded-md w-50 h-10 opacity-80  mt-3"/> 

                    <label className="mr-4">Date & Time Out :</label>
                    <input type="datetime-local" onChange={(e) => setout(e.target.value)} className="rounded-md w-50 h-10 opacity-80 mt-3"/>    
                  </div>
                  {/* -------Line 03 ends------- */}

                  <h2 className="Heading2 font-bold text-xl mb-3">Customer Details </h2>

                  {/* ------Line 04 starts------- */}

                  <div className="flex flex-wrap justify-between items-center space-x-2">
                   <div className="flex items-center mb-2">
                    <label className="mr-4">Name :</label>
                    <input type="text" onChange={(e) => setname(e.target.value)} className="rounded-md w-50 h-10 opacity-80"/>  
                   </div>

                    <label className="mr-4">Contact No. :</label>
                    <input type="tel" onChange={(e) => setcontactNumber(e.target.value)} className="rounded-md w-50 h-10 opacity-80"/>  

                    <label className="mr-4">E-mail :</label>
                    <input type="email" onChange={(e) => setemail(e.target.value)} className="rounded-md w-50 h-10 opacity-80"/> 
                  </div>
                  {/* --------Line 04 ends------- */}

                  <h3 className="Heading3 font-bold text-lg mb-3">Service Type :</h3> 

                   {/* --------Line 05 starts------- */}

                   <div className="space-y-2 flex justify-between grid grid-cols-6 gap-4">
                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4  w-5 h-5" /> 
                    <label className="lg">Body Wash</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Under Wash</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Engine Wash</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Engine Cleanup</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Interior Cleaning</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Vacuuming</label> 
                    </div>
                   </div>

                  {/* --------Line 05 ends------- */}

                  {/* --------Line 06 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-6 gap-4">
                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5" /> 
                    <label>Under Oiling</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Oil Changing</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Greasing</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Filter Replacement</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Waxing</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Cut & Polish</label> 
                    </div>
                   </div>
                  {/* --------Line 06 ends------- */}

                  {/* --------Line 07 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-6 gap-2">
                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4  w-5 h-5" /> 
                    <label>Engine Repairs </label> 
                    </div>

                    <div> 
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Brake Replacements</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Electrical System Repairs</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Tire Balancing</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Wheel Alignments</label> 
                    </div>

                    <div>
                    <input type="checkbox" onChange={(e) => setserviceType(e.target.value)} className="mr-4 w-5 h-5"/> 
                    <label>Tire Replacement</label> 
                    </div>
                   </div>
                   {/* --------Line 07 ends------- */}

                   <h2 className="Heading2 font-bold text-xl mb-3">Additional Details</h2>

                   {/* --------Line 08 starts------- */}

                  <div className="textbox mb-2">
                   <input type="text" onChange={(e) => setdetails(e.target.value)} className="rounded-md w-full h-auto py-2 px-6 opacity-80 text-base overflow-x-hidden max-w-full overflow-x-auto" style={{ height: '70px' }}/>
                  </div>

                    {/* --------Line 08 ends------- */}
                  
                  <div className="button text-center mt-4">
                  <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Save changes</button>
                  </div>  






                    
                </form>
            </div>
        </div>
  );
}

export default CreateJob;
