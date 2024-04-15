


// import React, { useState } from "react";
// import "./Add_Supplier.css";

// import axios from "axios";
// function Add_Supplier() {
//     const [name, setName] = useState("");
//     const [contact, setContact] = useState("");
//     const [contact_2, setContact_2] = useState("");
//     const [Email,setEmail] =useState("");
//     const [Website,setWeb] =useState("");
//     const [Main_supplies,setMainSupplies] = useState("");
//     const [Additional_note,setAdditional_notes] =useState("");
//     const [address, setAddress] = useState(""); // Include the 'address' state
//     // const [country, setCountry] = useState("");
//     const [isValidEmail, setIsValidEmail] = useState(false);

//     function submit(e) {
//         e.preventDefault();

//         const newSupplier = {
//             name,
//             contact,
//             contact_2,
//             Email,
//             Website,
//             Main_supplies,
//             Additional_note,
//             address, // Include 'address' in the newSupplier object
           
//         };

//         axios.post("http://localhost:8090/supplier/add", newSupplier)
//             .then(() => {
//                 alert("Supplier Added");
//             })
//             .catch((err) => {
//                 alert(err);
//             });
//     }

//     // Email validation function
//   function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   }

//   function handleEmailChange(e) {
//     const inputEmail = e.target.value;
//     setEmail(inputEmail);
//     setIsValidEmail(validateEmail(inputEmail));
//   }

//     return (
//         <div>
//         <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 max-w-6xl mx-auto mt-3 mx-5">
//            <div className="flex justify-between items-center">
//             <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold mb-10">Add Supplier</h1>
            
//             <a href="/display"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white float-right mx-auto font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105">Display</button></a>
//             </div>                         

//                 <form className="form1 text-xl text-gray-950 " onSubmit={Add_Supplier}>

//                 <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
//                 <div className="mt-5">
//                     <label className="mr-9">Supplier Name    :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setName(e.target.value)} />
//                 </div>

//                 <div>
//                     <label className="mr-10">Contact  :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setContact(e.target.value)} />
//                 </div>
//                 </div>   
                 
//                 <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">   
//                     <div className="mt-5">
//                     <label className="mr-20">Contact 2    :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setContact_2(e.target.value)} />
//                     </div>

//                     {/* <div>
//                     <label className="mr-14">E mail   :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setEmail(e.target.value)} />
//                     </div> */}
//                     <div>
//               <label className="mr-14">E-mail :</label>
//               <input id="email"
//                 className={`rounded-md w-72 h-10 opacity-80 ${
//                   isValidEmail ? "border-green-500" : "border-red-500"
//                 }`}
//                 type="text"
//                 value={Email}
//                 onChange={handleEmailChange}
//               />
//               {isValidEmail ? (
//                 document.getElementById('email').innerHTML(color:'green');
//                 // <p className="text-green-700 align-center">Email is valid </p>
//               ) : (
//                 <p className="text-red-500">Email is not valid ❌</p>
//               )}
//             </div>
//                 </div>


                
//                 <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
//                     <div className="mt-5">
//                     <label className="mr-20">Address  :</label>
//                     <input className="rounded-md ml-4 w-72 h-10 opacity-80" type="text" onChange={(e) => setAddress(e.target.value)} />
//                     </div>
//                     <div>
//                     <label className="mr-8">Web Site :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setWeb(e.target.value)} />
//                     </div>
                        
                    
//                     </div>
//                     <div className="flex flex-wrap justify-between items-center space-x-2 py-2">
//                         <div className="flex flex-col mt-5">
//                     <label className="mr-11">Additional Notes :</label>
//                     <textarea 
//                      className="mt-1 rounded-md border opacity-80 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                     rows="4"
//                     cols="50"
//                      onChange={(e) => setAdditional_notes(e.target.value)} />
//                     </div>
//                     <div className="flex flex-col">
//                             <label className="mr-11">Main Supplies    :</label>
//                             <textarea 
//                                 className="mt-1 rounded-md rounded-md opacity-80 border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                                 rows="4"
//                                 cols="50"
//                                 onChange={(e) => setMainSupplies(e.target.value)}
//                             />
//                         </div>
//                     </div>
                 
                    
//                     {/* <div className="flex flex-wrap justify-between items-center space-x-2 py-2">

//                     <label>Country</label>
//                     <input type="text" onChange={(e) => setCountry(e.target.value)} />
//                     </div> */}
//                     {/* <input className="bg-red-800 radius-2rm " type="submit" value={"Add Supplier"} onClick={submit} />  */}
//                    <div className="flex justify-center mt-16">
//                     <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105" type="submit" onClick={submit} >Add Supplier</button>
//                                      </div>

//                 </form>

                

//         </div>
       
//         <a href="/update"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105">Update</button></a>
//         <a href="/delete"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105">Delete</button></a>
       
//         </div>
    
// );
// }



// export default Add_Supplier;


import React, { useState } from "react";
import "./Add_Supplier.css";

import axios from "axios";

function Add_Supplier() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [contact_2, setContact_2] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWeb] = useState("");
  const [Main_supplies, setMainSupplies] = useState("");
  const [Additional_note, setAdditional_notes] = useState("");
  const [address, setAddress] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  function submit(e) {
    e.preventDefault();

    const newSupplier = {
      name,
      contact,
      contact_2,
      Email,
      Website,
      Main_supplies,
      Additional_note,
      address,
    };

    axios
      .post("http://localhost:8090/supplier/add", newSupplier)
      .then(() => {
        alert("Supplier Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function handleEmailChange(e) {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  }

  return (
    <div>
      <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 max-w-6xl mx-auto mt-3 mx-5">
        <div className="flex justify-between items-center">
          <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold mb-10">
            Add Supplier
          </h1>

          <a href="/display">
            <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white float-right mx-auto font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">
              Display
            </button>
          </a>
        </div>

        <form className="form1 text-xl text-gray-950 " onSubmit={submit}>
          <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
            <div className="mt-5">
              <label className="mr-9">Supplier Name :</label>
              <input
                className="rounded-md w-72 h-10 opacity-80"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="mr-10">Contact :</label>
              <input
                className="rounded-md w-72 h-10 opacity-80"
                type="text"
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
            <div className="mt-5">
              <label className="mr-20">Contact 2 :</label>
              <input
                className="rounded-md w-72 h-10 opacity-80"
                type="text"
                onChange={(e) => setContact_2(e.target.value)}
              />
            </div>

            <div>
              <label className="mr-14">E-mail :</label>
              <input
                id="email"
                className={`rounded-md w-72 h-10 opacity-80 ${
                  isValidEmail ? "border-green-500" : "border-red-500"
                }`}
                type="text"
                value={Email}
                onChange={handleEmailChange}
              />
              {isValidEmail ? (
                <p className="text-green-700 float-right mr-32 text-bold">__________</p>
              ) : (
                <p className="text-red-500">Email is not valid ❌</p>
              )}
            </div>
          </div>

          <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
            <div className="mt-5">
              <label className="mr-20">Address :</label>
              <input
                className="rounded-md ml-4 w-72 h-10 opacity-80"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="mr-8">Web Site :</label>
              <input
                className="rounded-md w-72 h-10 opacity-80"
                type="text"
                onChange={(e) => setWeb(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center space-x-2 py-2">
            <div className="flex flex-col mt-5">
              <label className="mr-11">Additional Notes :</label>
              <textarea
                className="mt-1 rounded-md border opacity-80 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="4"
                cols="50"
                onChange={(e) => setAdditional_notes(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-11">Main Supplies :</label>
              <textarea
                className="mt-1 rounded-md rounded-md opacity-80 border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="4"
                cols="50"
                onChange={(e) => setMainSupplies(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105"
              type="submit"
            >
              Add Supplier
            </button>
          </div>
        </form>
      </div>

      <a href="/update">
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">
          Update
        </button>
      </a>
      <a href="/delete">
        <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">
          Delete
        </button>
      </a>
    </div>
  );
}

export default Add_Supplier;
