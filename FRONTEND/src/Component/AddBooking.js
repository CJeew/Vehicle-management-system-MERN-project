import React, { bookState } from "react";
import "./BookingPage.css";

import axios from "axios";
function AddBooking(){
    const[fname, setFname] = bookState("");
    const[lname, setLname] = bookState("");
    const[address, setAddress] = bookState(""); 
    const[phoneNum, setPhoneNum] = bookState("");  
    const[eMail, setEmail] = bookState("");     
    const[vNum, setVNum] = bookState("");  
    const[vType, setVType] = bookState("");  
    const[dDate, setDate] = bookState("");  
    const[tTime, setTime] = bookState("");
    const[serviceBox, setService] = bookState("");

    function submit(e){
        e.preventDefault();

        const newBooking = {
            fname,
            lname,
            address,
            phoneNum,
            eMail,
            vNum,
            vType,
            dDate,
            tTime,
            serviceBox
        };

        axios.post("http://localhost:8090/booking/addBooking", newBooking)
        .then(()=>{
            alert("Booking Added");
        }).catch((err)=>{
            alert(err);
        });

    }

        
        
        
        
        
        
}

export default AddBooking;