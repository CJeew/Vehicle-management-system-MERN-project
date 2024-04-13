import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function UpdateJob() {

    const {jobNumber} = useParams();

    const [jobnumber, setJobNumber] = useState("");
    const [jobDate, setjobDate] = useState("");
    const [vehicleType, setvehicleType] = useState("");
    const [RegNo, setregistrationNo] = useState("");
    const [vehicleMake, setvehiclemake] = useState("");
    const [vehicleModel, setvehicleModel] = useState("");
    const [mileage, setmileage] = useState("");
    const [year, setyear] = useState("");
    const [timeIn, settimeIn] = useState("");
    const [dateout, setdateout] = useState("");
    const [timeout, settimeout] = useState("");
    const [name,  setname] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [email, setemail] = useState("");
    const [serviceType, setserviceType] = useState("");
    const [details, setdetails] = useState("");



    useEffect( () => {
      axios.get(`http://localhost:8090/job/getDetails/${jobNumber}`).then((response) => {

       setJobNumber(response.data.details.jobnumber);
       setjobDate(response.data.details.jobDate);
       setvehicleType(response.data.details.vehicleType);
       setregistrationNo(response.data.details.RegNo);
       setvehiclemake(response.data.details.vehicleMake);
       setvehicleModel(response.data.details.vehicleModel);
       setmileage(response.data.details.mileage);
       setyear(response.data.details.year);
       settimeIn(response.data.details.timeIn);
       setdateout(response.data.details.dateout);
       settimeout(response.data.details.timeout);
       setname(response.data.details.name);
       setcontactNumber(response.data.details.contactNumber);
       setemail(response.data.details.email);
       setserviceType(response.data.details.serviceType);
       setdetails(response.data.details.details);
                
      }).catch((err) => {
          alert(err.message);
        
      });
        
    }, [jobNumber]);


    function updateJob(e){
      e.preventDefault();

      const updatedJob = {
        jobnumber,
        jobDate,
        vehicleType,
        RegNo,
        vehicleMake,
        vehicleModel,
        mileage,
        timeIn,
        year,
        timeout,
        dateout,
        name,
        contactNumber,
        email,
        serviceType,
        details,

      };

      axios.put(`http://localhost:8090/job/updatejobs/${jobNumber}`, updatedJob)
      .then(() => {
        alert("Job updated successfully");
        window.location.href = "/viewjobs";
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    }






    // Checkbox function
    function handleCheckboxChange(e) {
      const value = e.target.value;
      const checked = e.target.checked;

      // Update serviceType state based on checkbox value
      if (checked) {
          setserviceType(prevState => [...prevState, value]); // Add to array
      } else {
          setserviceType(prevState => prevState.filter(item => item !== value)); // Remove from array
      }
    }

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
                <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold">Update job</h1>

                <a href="/viewjobs">
                <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-5 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105">Cancel </button>
                </a>

              </div> <br />

                <form className="form1 text-lg text-gray-950 ">
                  
              {/*------ Line 01 starts------ */}

              <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                  <div className="">  
                    <label className = "mr-11">Job Number :</label>
                    <input type="text" value={jobnumber} onChange={(e) => setJobNumber(e.target.value)} className="rounded-md w-60 h-10 opacity-80 text-base mt-2"/>
                  </div>

                  <div className="">
                    <label className="mr-11">Job Date :</label>
                    <input type="date" value={jobDate} onChange={(e) => setjobDate(e.target.value)} className="rounded-md w-60 h-10 opacity-80 text-base"/>
                  </div>

                  <div className="">
                    <label className="mr-7">Vehicle Type :</label>
                    <select id="vehicle" value={vehicleType} onChange={(e) => setvehicleType(e.target.value)} className="rounded-md w-60 h-10 opacity-80 text-base mb-1">
                        <option value="" />
                        <option value="car">Car</option>
                        <option value="Van">Van</option>
                        <option value="SUV">SUV</option>
                        <option value="Bus">Bus</option>
                        <option value="Bike">Motorcycle</option>

                    </select>
                  </div>
                </div>
                {/* -------Line 01 ends------ */}

                
                <h2 className="Heading2 font-bold text-xl mb-3 mt-2">Vehicle Details</h2>

                {/*------ Line 02 starts-------*/}

                <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                  <div className=""> 
                    <label className="mr-4">Vehicle Reg. No :</label>
                    <input type="text" value={RegNo} onChange={(e) => setregistrationNo(e.target.value)} className="rounded-md w-60 h-10 opacity-80 mt-2" />
                  </div> 

                  <div>
                  <label className="mr-2">Vehicle Make :</label>
                    <select id="vehiclemake" value={vehicleMake} onChange={(e) => setvehiclemake(e.target.value)} className="rounded-md w-60 h-10 opacity-80 text-base">
                        <option value="" /> 
                        <option value="Toyota">Toyota</option>
                        <option value="Honda">Honda</option>
                        <option value="Ford">Ford</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="BMW">BMW</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Mazda">Mazda</option>     
                        <option value="Hyundai">Hyundai</option>                   
                        <option value="Kia">Kia</option>
                        <option value="MG">MG</option>
                        <option value="Audi">Audi</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mitsubishi">Mitsubishi</option>

                    </select>
                    </div>

                  <div>
                    <label className="mr-4">Vehicle Model :</label>
                    <input type="text" value={vehicleModel} onChange={(e) => setvehicleModel(e.target.value)} className="rounded-md w-60 h-10 opacity-80"/>
                  </div>  
                 </div> 

                 {/* ---------Line 02 ends----------  */}

                 {/* ----------Line 03 starts---------*/}

                 <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                  <div className=""> 
                    <label className="mr-14">Mileage :</label>
                    <input type="text" value={mileage} onChange={(e) => setmileage(e.target.value)} className="rounded-md w-60 h-10 opacity-80 mt-5 ml-5"/>
                  </div>

                  <div>
                    <label className="mr-11">Year :</label>
                    <select id="year" value={year} onChange={(e) => setyear(e.target.value)} className="rounded-md w-60 h-10 opacity-80 mt-3 ml-9">
                      <option value="">   </option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                    </div>

                  <div>
                    <label className="mr-11">Time In :</label>
                    <input type="time" value={timeIn} onChange={(e) => settimeIn(e.target.value)} className="rounded-md w-60 h-10 opacity-80  mt-3 ml-6"/> 
                  </div>
                  </div>
                  {/* -------Line 03 ends------- */}

                  {/* ------Line 04 starts------- */}

                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4 mb-4">
                    <div>
                    <label className="mr-11">Date Out :</label>
                    <input type="date" value={dateout} onChange={(e) => setdateout(e.target.value)} className="rounded-md w-60 h-10 opacity-80 mt-3 ml-5 text-base"/> 
                    </div>

                    <div>
                    <label className="mr-10">Time Out :</label>
                    <input type="time" value={timeout} onChange={(e) => settimeout(e.target.value)} className="rounded-md w-60 h-10 opacity-80  mt-3"/> 
                    </div>   
                  </div>
                  
                  {/* -------Line 04 ends------- */}

                  <h2 className="Heading2 font-bold text-xl mb-5 mt-3">Customer Details </h2>

                  {/* ------Line 05 starts------- */}

                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                   <div className="">
                    <label className="mr-11">Name :</label>
                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="rounded-md w-60 h-10 opacity-80 ml-10"/>  
                   </div>
             
                   <div>
                    <label className="mr-4">Contact No. :</label>
                    <input type="tel" value={contactNumber} onChange={(e) => setcontactNumber(e.target.value)} className="rounded-md w-60 h-10 opacity-80"/>  
                   </div> 

                   <div>
                    <label className="mr-11">E-mail :</label>
                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="rounded-md w-60 h-10 opacity-80 ml-10"/> 
                   </div>
                  </div>
                  {/* --------Line 05 ends------- */}

                  <h3 className="Heading3 font-bold text-lg mb-3 mt-2">Service Type :</h3> 

                   {/* --------Checkbox-Line 01 starts------- */}

                   <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4 ">
                    <div>
                    <input type="checkbox" value="Body wash" onChange={handleCheckboxChange} className="mr-4  w-5 h-5" /> 
                    <label className="lg">Body Wash</label> 
                    </div>

                    <div>
                    <input type="checkbox"  value="Under wash" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Under Wash</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Engine wash" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Engine Wash</label> 
                    </div>
                   </div> 

                   {/* --------Line 02 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4 ">
                    <div>
                    <input type="checkbox" value="Engine cleanup" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Engine Cleanup</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Interior cleaning" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Interior Cleaning</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Vaccuming" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Vacuuming</label> 
                    </div>
                   </div>

                  {/* --------Line 02 ends------- */}

                  {/* --------Line 03 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                    <div>
                    <input type="checkbox" value="Under oiling" onChange={handleCheckboxChange} className="mr-4 w-5 h-5" /> 
                    <label>Under Oiling</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Oil changing" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Oil Changing</label> 
                    </div>

                    <div>
                    <input type="checkbox"  value="Greasing" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Greasing</label> 
                    </div>
                   </div> 

                   {/* --------Line 04 starts------- */}
                   <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4 ">
                    <div>
                    <input type="checkbox" value="Filter replacement" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Filter Replacement</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Waxing" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Waxing</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Cut & polish" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Cut & Polish</label> 
                    </div>
                   </div>
                  {/* --------Line 04 ends------- */}

                  {/* --------Line 05 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
                    <div>
                    <input type="checkbox" value="Engine repair" onChange={handleCheckboxChange} className="mr-4  w-5 h-5" /> 
                    <label>Engine Repairs </label> 
                    </div>

                    <div> 
                    <input type="checkbox" value="Brake replacement" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Brake Replacements</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Electrical system repair" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Electrical System Repairs</label> 
                  </div>
                  </div>

                   {/* --------Line 06 starts------- */}
                  <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4 ">
                    <div>
                    <input type="checkbox" value="Tire balancing" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Tire Balancing</label> 
                    </div>

                    <div>
                    <input type="checkbox" value={"Wheel alignment"} onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Wheel Alignments</label> 
                    </div>

                    <div>
                    <input type="checkbox" value="Tire replacement" onChange={handleCheckboxChange} className="mr-4 w-5 h-5"/> 
                    <label>Tire Replacement</label> 
                    </div>
                   </div>
                   
                   {/* --------Line 06 ends------- */}

                   <h2 className="Heading2 font-bold text-xl mb-3">Additional Details</h2>

                   {/* --------Line 07 starts------- */}

                  <div className="textarea mb-2">
                   <textarea  value={details} onChange={(e) => setdetails(e.target.value)} className="rounded-md w-full rows-10 py-2 px-6 opacity-80 text-base overflow-x-hidden max-w-full overflow-x-auto" />
                  </div>

                    {/* --------Line 07 ends------- */}
                  
                  <div className="button text-center mt-4" type="submit" value={"Add jobs"} >
                  <button  onClick ={updateJob} className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Save Changes</button>
                  </div>  






            
                </form>
            </div>
        </div>
  );
}

export default UpdateJob;
