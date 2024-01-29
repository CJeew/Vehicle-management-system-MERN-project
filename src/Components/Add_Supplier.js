
import React, { useState } from "react";
import "./Add_Supplier.css";
import "./Res.css";
import axios from "axios";

function Add_Supplier() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState(""); // Include the 'address' state
    const [country, setCountry] = useState("");

    function submit(e) {
        e.preventDefault();

        const newSupplier = {
            name,
            contact,
            address, // Include 'address' in the newSupplier object
            country
        };

        axios.post("http://localhost:8090/supplier/add", newSupplier)
            .then(() => {
                alert("Supplier Added");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="container">
            <div className="Add">
                <h1 style={{ backgroundColor: "orange", textAlign: "center" }}>Add Supplier</h1>
                <form>
                    <label>Name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} />

                    <label>Contact</label>
                    <input type="text" onChange={(e) => setContact(e.target.value)} />

                    <label>Address</label>
                    <input type="text" onChange={(e) => setAddress(e.target.value)} />

                    <label>Country</label>
                    <input type="text" onChange={(e) => setCountry(e.target.value)} />

                    <input className="btn" type="submit" value={"Add Supplier"} onClick={submit} />
                </form>
            </div>
        </div>
    );
}



export default Add_Supplier;
