// import React, { useState, useEffect } from "react";
// import "./Res.css";
// import axios from "axios";

// export default function Display(){

//     const [ suppliers, setSuppliers] =useState([]);
  
    // useEffect(()=>{
    //     function getSuppliers() {
    //         //
    //         axios.get("http://localhost:8090/supplier/").then((res) => {
    //             setSuppliers(res.data);
    //         }).catch((err) => {
    //             alert(err.message);
    //         })
    //     }
    //     getSuppliers();
    // },[]);
//--------------------------------------------------------------------------------
//     useEffect(() => {
//         function getSuppliers() {
//             axios.get("http://localhost:8090/supplier/")
//                 .then((res) => {
//                     console.log("Response from server:", res.data);
//                     setSuppliers(res.data);
//                 })
//                 .catch((err) => {
//                     console.error("Error fetching data:", err);
//                     alert(err.message);
//                 });
//         }
    
//         getSuppliers();
//     }, []);
    
//     return(
//         <div>
//             <h1 style={{color:"red"}}>Display all Suppliers</h1>
            
            
//         </div>
//     )
// }
// import React, { useState, useEffect } from "react";

// import axios from "axios";

// export default function Display() {
//     const [suppliers, setSuppliers] = useState([]);

//     useEffect(() => {
//         function getSuppliers() {
//             axios.get("http://localhost:8090/supplier/")
//                 .then((res) => {
//                     console.log("Response from server:", res.data); 
//                     setSuppliers(res.data);
//                 })
//                 .catch((err) => {
//                     console.error("Error fetching data:", err);
//                     alert(err.message);
//                 });
//         }

//         getSuppliers();
//     }, []);

// return (
//     <div>
//                 <h1 className="text-white text-lg ">Display all Suppliers</h1>
// <div className="container bg-gray-200 rounded-lg px-8 py-4 mt-3 mx-5">
        
//         <div className="">
        
//             {suppliers.map((supplier) => (
//                 <div className="space-y-2 flex justify-between grid grid-cols-3 gap-4">
//                 <div className="text-base" type="none" key={supplier.id}><label>Name :</label>{" "+supplier.name}<br/><label>Contact :</label>{" "+supplier.contact}<br/><label>Address :</label>{" "+supplier.address}<br/><label>Country :</label>{" "+supplier.country}<pre>{JSON.stringify()}</pre>            
//                  {/* <div className="line" style={{color:"white"}}></div> */}
                
//                </div>
//                 {/* {JSON.stringify(supplier)} */}
//                 </div>
//             ))}
        
//        </div>
//         </div>
//     </div>
// );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Display() {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        function getSuppliers() {
            axios.get("http://localhost:8090/supplier/")
                .then((res) => {
                    console.log("Response from server:", res.data); 
                    setSuppliers(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert(err.message);
                });
        }

        getSuppliers();
    }, []);

    return (
        <div>
            <h1 className="text-white text-lg">Display all Suppliers</h1>
            <div className="container bg-gray-200 rounded-lg px-8 py-4 mt-3 mx-5">
                <div className="grid grid-cols-3 gap-4">
                    {suppliers.map((supplier) => (
                        <div key={supplier.id} className="bg-white rounded-lg p-4">
                            <p className="text-base"><strong>Name:</strong> {supplier.name}</p>
                            <p className="text-base"><strong>Contact:</strong> {supplier.contact}</p>
                            <p className="text-base"><strong>Address:</strong> {supplier.address}</p>
                            <p className="text-base"><strong>Country:</strong> {supplier.country}</p>
                            <img src="image.png" className=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
