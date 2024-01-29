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
import React, { useState, useEffect } from "react";
import "./Res.css";
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
        <h1 style={{ color: "red" }}>Display all Suppliers</h1>
        <ul>
            {suppliers.map((supplier) => (
                <li key={supplier.id}>{JSON.stringify(supplier)}</li>
            ))}
        </ul>
    </div>
);
}

