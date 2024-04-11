import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const JobDetails = () => {
  const [jobDetails, setJobDetails] = useState({}); 
  const { jobNumber } = useParams();
  const decodedJobNumber = decodeURIComponent(jobNumber);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/job/details/${decodedJobNumber}`); 
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobNumber]);


const deleteJob = () => {
  alert("Are you sure you want to delete this job?");
};

  
  return (

    <div className="mx-auto max-w-screen-xl">
    <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">

    <div className="flex justify-between items-center">
          <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold">Job Details</h1>
    </div>

        <div className="mt-4 text-lg">
        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p className="mt-7 mr-"><strong>Job Number:</strong> {jobDetails.jobNumber}</p>
          </div>

          <div>
            <p><strong>Job Date:</strong> {jobDetails.jobDate}</p>
          </div>

          <div>
            <p><strong>Vehicle Type:</strong> {jobDetails.vehicleType}</p>
          </div>
        </div>

        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p  className="mt-7"><strong>Registration Number:</strong> {jobDetails.RegNo}</p>
          </div>

          <div>
            <p><strong>Vehicle Make:</strong> {jobDetails.vehicleMake}</p>
          </div>

          <div>
          <p><strong>Vehicle Model:</strong> {jobDetails.vehicleModel}</p>
          </div>
        </div>

        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p  className="mt-7"><strong>Mileage:</strong> {jobDetails.mileage}</p>
          </div>

          <div>
            <p><strong>Year:</strong> {jobDetails.year}</p>
          </div>

          <div>
          <p><strong>Time In:</strong> {jobDetails.timeIn}</p>
          </div>
        </div>

        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p  className="mt-7"><strong>Date Out:</strong> {jobDetails.dateout}</p>
          </div>

          <div>
            <p><strong>Time Out:</strong> {jobDetails.timeout}</p>
          </div>

          <div>
          <p><strong>Customer Name:</strong> {jobDetails.name}</p>
          </div>
        </div>

        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p  className="mt-7"><strong>Contact Number:</strong> {jobDetails.contactNumber}</p>
          </div>

          <div>
            <p><strong>Email:</strong> {jobDetails.email}</p>
          </div>

          <div>
          <p><strong>Service Type:</strong> {jobDetails.serviceType}</p>
          </div>
        </div>

        <div className="space-y-8 flex justify-between grid grid-cols-3 gap-4">
          <div>
            <p  className="mt-7"><strong>Additional Details:</strong> {jobDetails.details}</p>
          </div>

          <div>
            <p></p>
          </div>

          <div>
          <p></p>
          </div>
        </div>
 
        </div>
        <div className="flex justify-end items-end space-x-4">
        <a href="/createjob">
                <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-2 px-5 rounded-lg mr-2 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">New Jobs</button>
                </a>
          {/* update button */}
          <button className="bg-gradient-to-r from-green-600 via-green-800 to-green-950 hover:from-green-950 hover:via-green-700 
                                  hover:to-green-600 text-white font-bold py-2 px-5 rounded-lg mr-2 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">Update</button>

           {/* Delete button */}
           <button onClick={(e) => {deleteJob(); e.preventDefault();}} className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:from-red-900 hover:via-red-700 
                                  hover:to-red-600 text-white font-bold py-2 px-5 rounded-lg mr-2 opacity-80 transition duration-300
                                  ease-in-out transform hover:scale-105">Delete</button>
        </div>
      </div>
    </div>
    
  );
};

export default JobDetails;