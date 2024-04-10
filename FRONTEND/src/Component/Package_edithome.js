import React, { useState, useEffect } from "react";

import axios from "axios";

<<<<<<< HEAD
=======
import 'primeicons/primeicons.css';
        

>>>>>>> a387a87c877e25e6bc91b446bc80b2bc0e6344d5

export default function Package_edithome() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    function getPackages() {
      axios
        .get("http://localhost:8090/svc-packages/")
        .then((res) => {
          console.log("Response from server:", res.data);
          setPackages(res.data);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
    getPackages();
  }, []);
  return (
    <div>
<<<<<<< HEAD
       <div className="text-2xl flex justify-center items-center">
    <div className="gap-16 grid grid-cols-2 mt-8">
      <a href="viewpkg">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full ">
        Interior
        </button>
        </a>
        <a href="viewpkg2">
        <button className="bg-gradient-to-r from-red-400 to-red-500 opacity-70 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
        Exterior
        </button>
        </a>
        </div>
        </div>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-2 gap-8 bg-gray-200 bg-opacity-70 rounded-lg p-14 mt-16 mx-5 max-w-7xl">

          {packages.filter((pkg) => pkg.category === "Interior").map((pkg) => (
            <div
              className="flex flex-col justify-center items-center bg-black bg-opacity-75 text-white rounded-lg px-8 py-4"
              key={pkg.pid}
            >
              <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-base text-gray-200">{pkg.description}</p>
              <h4 className="text-lg text-red-700 font-bold">RS. {pkg.unitprice.toFixed(2)}</h4>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                </button>
            </div>
          ))}
=======
        <h2 className="text-3xl mb-6 flex justify-center mt-8 font-bold text-white"> Interior</h2>
      <div className="flex justify-center flex-col items-center w-full  ">
        <div className="grid grid-cols-2 gap-8 bg-gray-200 bg-opacity-70 rounded-lg p-14 mt-16 mx-5 w-full max-w-7xl">
          {packages
            .filter((pkg) => pkg.category === "Interior")
            .map((pkg) => (
              <div
                className="flex flex-col justify-center items-center bg-black bg-opacity-75 text-white rounded-lg px-8 py-4"
                key={pkg.pid}
              >
                <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-base text-gray-200">{pkg.description}</p>
                <h4 className="text-lg text-red-700 font-bold">
                  RS. {pkg.unitprice.toFixed(2)}
                </h4>
                <a href={`/editpkg/${pkg._id}`}>
                  <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                    <i
                      className="pi pi-pen-to-square"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </button>
                </a>
              </div>
            ))}
        </div>

        <h2 className="text-3xl mb-6 mt-16 flex justify-left mt-8 font-bold text-white"> Exterior</h2>
        <div className="grid grid-cols-2 gap-8 bg-gray-200 bg-opacity-70 rounded-lg p-14 mt-10 mx-5 w-full max-w-7xl">
          {packages
            .filter((pkg) => pkg.category === "Exterior")
            .map((pkg) => (
              <div
                className="flex flex-col justify-center items-center bg-black bg-opacity-75 text-white rounded-lg px-8 py-4"
                key={pkg.pid}
              >
                <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
                <p className="text-base text-gray-200">{pkg.description}</p>
                <h4 className="text-lg text-red-700 font-bold ">
                  RS. {pkg.unitprice.toFixed(2)}
                </h4>
                <a href={`/editpkg/${pkg._id}`}>
                  <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
                    <i
                      className="pi pi-pen-to-square"
                      style={{ fontSize: "1rem" }}
                    ></i>
                  </button>
                </a>
              </div>
            ))}
>>>>>>> a387a87c877e25e6bc91b446bc80b2bc0e6344d5
        </div>
      </div>
    </div>
  
  );
}
