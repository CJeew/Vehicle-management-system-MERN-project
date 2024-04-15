import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



export default function ViewJobs() {
  const [allJobs, setallJobs] = useState([]);

  useEffect(() => {
      function getJobs() {
          axios.get("http://localhost:8090/job/viewjobs")
              .then((res) => {
                  console.log("Response from server:", res.data); 
                  const reversedJobs = res.data.reverse();
                  setallJobs(reversedJobs);
              })
              .catch((err) => {
                  console.error("Error fetching data:", err);
                  alert(err.message);
              });
      }

      getJobs();
  }, []);

//Function to update jobs
  

  

// Function to handle job deletion
  const deleteJob = async (jobId) => {

    const confirm = window.confirm('Are you sure you want to delete this job?');

    if(confirm){
      try{
        await axios.delete(`http://localhost:8090/job/delete/${jobId}`);
        alert('Job Deleted Successfully');
        window.location.reload(); 

      } catch(error){
        console.error('Error deleting job',error);
        alert('Failed to delete the job');
        
      }
    
    }
  }




    return (
      <div className="mx-auto max-w-screen-xl">
        <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">

        <div className="flex justify-between items-center">
            <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold">All Jobs</h1>
        </div>

        {/* Heading container */}
        <div className="container bg-gray-500 bg-opacity-70 rounded-lg ">
         <div className="space-y-2 flex justify-between grid grid-cols-5 gap-4 mt-4 mb-4">
          <div>
            <h2 className="text-center text-xl flex-grow font-bold mt-4 mb-4">Job Number</h2>
          </div>
           
          <div>
            <h2 className="text-center text-xl flex-grow font-bold mt-2 mb-3">Date</h2>
          </div>

          <div>
            <h2 className="text-center text-xl flex-grow font-bold mt-2 mb-3">Time</h2>
          </div>

          <div>
            <h2 className="text-center text-xl flex-grow font-bold mt-2 mb-3">Customer name</h2>
          </div>

          <div>
            <p> </p>
          </div>
         </div>
        </div>

        {allJobs.map((job) => (
          <div className="container bg-gray-200 bg-opacity-70 rounded-lg py-1 mt-2">
            
          <Link key={job._jobNumber} to={`/details/${job.jobNumber}`} >
            <div className="space-y-2 flex justify-between grid grid-cols-5 gap-4 mt-3 mb-3 text-center ">

              <div className="mt-2 text-lg">
               {job.jobNumber}
              </div>

              <div className="text-lg">
                {job.jobDate}
              </div>

              <div className="text-lg">
                {job.timeIn}
              </div>

              <div className="text-lg">
                {job.name}
              </div>

              <div>

              {/* update button */}
              <Link to={`/updatejobs/${job._id}`}>
                <button className="bg-gradient-to-r from-green-600 via-green-800 to-green-950 hover:from-green-950 hover:via-green-700 hover:to-green-600 text-white font-bold py-2 px-5 rounded-lg 
                                  mr-2 opacity-80 transition duration-300 ease-in-out transform hover:scale-105">Update</button>
              </Link>

              {/* Delete button */}
              <button onClick={(e) => {deleteJob(job._id, job.jobNumber); e.preventDefault();}} className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-900 hover:via-red-700 
                                  hover:to-red-600 text-white font-bold py-2 px-5 rounded-lg mr-2 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">Delete</button>
                
                
              </div>
               
            </div>
          </Link> 
          </div>

        ))}
      </div>
    </div>
      );
};
    


