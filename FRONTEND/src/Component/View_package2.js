import React, { useState, useEffect } from "react";

import axios from "axios";

export default function View_package() {
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
    <div className="flex  justify-center items-center w-full gap-8">
         <a href="viewpkg">
        <button className="bg-gradient-to-r from-red-400 to-red-500 opacity-70 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
        Interior
        </button>
        </a>
        <a href="viewpkg2">
        <button className="bg-gradient-to-r from-red-400 to-red-500 px-2 py-4 text-white font-bold uppercase hover:bg-red-600 hover:text-black rounded-[10px] w-full">
        Exterior
        </button>
        </a>
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-2 gap-8 bg-gray-200 bg-opacity-70 rounded-lg p-14 mt-16 mx-5 max-w-7xl">
          {packages.filter((pkg) => pkg.category === "Exterior").map((pkg) => (
            <div
              className="flex flex-col justify-center items-center bg-black text-white rounded-lg px-8 py-4"
              key={pkg.pid}
            >
              <h2 className="text-xl font-bold mb-2">{pkg.name}</h2>
              <p className="text-base text-gray-200">{pkg.description}</p>
              <h4 className="text-lg text-red-700 font-bold ">RS. {pkg.unitprice.toFixed(2)}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
