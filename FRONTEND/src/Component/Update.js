// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// // import "./Res.css";
// export default function Update(){

//     const [name, setName] = useState(""); // State for NIC
//     const [contact, setContact] = useState(""); // State for Name
//     const [contact_2, setContact_2] = useState(""); // State for Designation
//     const [Email, setEmail] = useState(""); // State for Address
//     const [address, setAddress] = useState(""); // State for Email
//     const [Website, setWeb] = useState(""); // State for Mobile Number
//     const [Additional_note, setAdditional_notes] = useState(""); // State for Joined Date
//     const [Main_supplies, setMainSupplies] = useState(""); // State for Joined Date
  
//     const { id } = useParams(); // Get the ID from URL params

//     // useEffect(() => {
//     //     axios.get(`http://localhost:8090/suppliers/update/${id}`).then((res) => {
//     //         setName(res.data.supplier.name);
//     //         setContact(res.data.supplier.contact);
//     //         setContact_2(res.data.supplier.contact_2);
//     //         setEmail(res.data.supplier.email);
//     //         setAddress(res.data.supplier.address);
//     //         setWeb(res.data.supplier.web);
//     //         setAdditional_notes(res.data.supplier.Additional_notes);
//     //         setMainSupplies(res.data.supplier.MainSupplies);
//     //     }).catch((err) => {
//     //       alert(err.message);
//     //     });
//     //   }, [id]);

//     //   function updateSUpplier(e) {
//     //     e.preventDefault();
    
//     //     const updateSUpplier = {
//     //         name,
//     //         contact,
//     //         contact_2,
//     //         Email,
//     //         Website,
//     //         Main_supplies,
//     //         Additional_note,
//     //         address, // Include 'address' in the newSupplier object
           
//     //     };

//     //     axios
//     //     .put(`http://localhost:8090/suppliers/update/${id}`, updateSUpplier)
//     //     .then(() => {
//     //       alert("Staff Updated");
//     //     //   window.location.href = "/StaffDetails";
//     //     })
//     //     .catch((err) => {
//     //       alert(err.response.data.message);
//     //     });
//     // }
//     useEffect(() => {
//         axios.get(`http://localhost:8090/suppliers/update/${id}`)
//             .then((res) => {
//                 const { data } = res;
//                 if (data && data.supplier) {
//                     const { name, contact, contact_2, email, address, web, Additional_notes, MainSupplies } = data.supplier;
//                     setName(name);
//                     setContact(contact);
//                     setContact_2(contact_2);
//                     setEmail(email);
//                     setAddress(address);
//                     setWeb(web);
//                     setAdditional_notes(Additional_notes);
//                     setMainSupplies(MainSupplies);
//                 } else {
//                     throw new Error("Supplier data not found");
//                 }
//             })
//             .catch((err) => {
//                 alert(`Error fetching supplier data: ${err.message}`);
//             });
//     }, [id]);
    
//     function updateSupplier(e) {
//         e.preventDefault();
    
//         const updatedSupplier = {
//             name,
//             contact,
//             contact_2,
//             Email,
//             Website,
//             Main_supplies: Main_supplies,
//             Additional_note: Additional_note,
//             address,
//         };
    
//         axios.put(`http://localhost:8090/suppliers/update/${id}`, updatedSupplier)
//             .then(() => {
//                 alert("Supplier Updated");
//             })
//             .catch((err) => {
//                 alert(`Error updating supplier: ${err.message}`);
//             });
//     }
    
//     return(
//         <div>
//         <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 max-w-6xl mx-auto mt-3 mx-5">
//            <div className="flex justify-between items-center">
//             <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold mb-10">Update Supplier</h1>
            
//             <a href="/display"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white float-right mx-auto font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105">Display</button></a>
//             </div>                         

//                 <form onSubmit={updateSupplier} className="form1 text-xl text-gray-950 ">

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

//                     <div>
//                     <label className="mr-14">E mail   :</label>
//                     <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setEmail(e.target.value)} />
//                     </div>
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
//                     {/* <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
//                                      hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
//                                      ease-in-out transform hover:scale-105" type="submit" onClick={submit} >Add Supplier</button> */}
//                                      </div>

//                 </form>

                

//         </div>
//         </div>
    
//     )
// };
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Update() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [contact_2, setContact_2] = useState("");
    const [Email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [Website, setWeb] = useState("");
    const [Additional_note, setAdditional_notes] = useState("");
    const [Main_supplies, setMainSupplies] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8090/supplier/update/${id}`)
            .then((res) => {
                const { data } = res;
                if (data && data.supplier) {
                    const { name, contact, contact_2, Email, address, Website, Additional_note, Main_supplies } = data.supplier;
                    setName(name);
                    setContact(contact);
                    setContact_2(contact_2);
                    setEmail(Email);
                    setAddress(address);
                    setWeb(Website);
                    setAdditional_notes(Additional_note);
                    setMainSupplies(Main_supplies);
                } else {
                    throw new Error("Supplier data not found");
                }
            })
            .catch((err) => {
                alert(`Error fetching supplier data: ${err.message}`);
            });
    }, [id]);

    const updateSupplier = async (e) => {
        e.preventDefault();

        const updatedSupplier = {
            name,
            contact,
            contact_2,
            Email,
            address,
            Website,
            Additional_note,
            Main_supplies,
        };

        try {
            await axios.put(`http://localhost:8090/supplier/update/${id}`, updatedSupplier);
            alert("Supplier updated successfully");
        } catch (error) {
            alert(`Error updating supplier: ${error.message}`);
        }
    };
    return(
        <div>
        <div className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 max-w-6xl mx-auto mt-3 mx-5">
           <div className="flex justify-between items-center">
            <h1 className="Heading1 text-center text-3xl flex-grow font-BakBak one font-bold mb-10">Update Supplier</h1>
            
            <a href="/display"><button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white float-right mx-auto font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105">Display</button></a>
            </div>                         

                <form onSubmit={updateSupplier} className="form1 text-xl text-gray-950 ">

                <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
                <div className="mt-5">
                    <label className="mr-9">Supplier Name    :</label>
                    <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label className="mr-10">Contact  :</label>
                    <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setContact(e.target.value)} />
                </div>
                </div>   
                 
                <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">   
                    <div className="mt-5">
                    <label className="mr-20">Contact 2    :</label>
                    <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setContact_2(e.target.value)} />
                    </div>

                    <div>
                    <label className="mr-14">E mail   :</label>
                    <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>


                
                <div className="space-y-2 flex justify-between grid grid-cols-2 gap-4 ">
                    <div className="mt-5">
                    <label className="mr-20">Address  :</label>
                    <input className="rounded-md ml-4 w-72 h-10 opacity-80" type="text" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div>
                    <label className="mr-8">Web Site :</label>
                    <input className="rounded-md w-72 h-10 opacity-80" type="text" onChange={(e) => setWeb(e.target.value)} />
                    </div>
                        
                    
                    </div>
                    <div className="flex flex-wrap justify-between items-center space-x-2 py-2">
                        <div className="flex flex-col mt-5">
                    <label className="mr-11">Additional Notes :</label>
                    <textarea 
                     className="mt-1 rounded-md border opacity-80 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="4"
                    cols="50"
                     onChange={(e) => setAdditional_notes(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                            <label className="mr-11">Main Supplies    :</label>
                            <textarea 
                                className="mt-1 rounded-md rounded-md opacity-80 border border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                rows="4"
                                cols="50"
                                onChange={(e) => setMainSupplies(e.target.value)}
                            />
                        </div>
                    </div>
                 
                    
                    {/* <div className="flex flex-wrap justify-between items-center space-x-2 py-2">

                    <label>Country</label>
                    <input type="text" onChange={(e) => setCountry(e.target.value)} />
                    </div> */}
                    {/* <input className="bg-red-800 radius-2rm " type="submit" value={"Add Supplier"} onClick={submit} />  */}
                   <div className="flex justify-center mt-16">
                     <button className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                     hover:to-amber-700 text-white font-bold py-4 px-5 rounded-lg mr-2 opacity-90 transition duration-300 
                                     ease-in-out transform hover:scale-105" type="submit" onClick={updateSupplier} >Add Supplier</button> 
                                     </div>

                </form>

                

        </div>
        </div>
    
    )
};
