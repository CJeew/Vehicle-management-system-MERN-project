import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateHoliday(){
    const[busyDate, setBusyDate] = useState("");
    const[event, setEvent] = useState("");

    const{id} = useParams();
    console.log(id);

    function updateHoliday(e){
        e.preventDefault();

        const updatedHoliday = {
            busyDate,
            event
        };

        axios.put(`http://localhost:8090/holidaySetting/updateHoliday/${id}`, updatedHoliday)
        .then(()=>{
            alert("Holiday Updated Successfully");
            window.location.href = "/editHolidaySetting";
        })
        .catch((err)=>{
            alert(err.messgage);
        });
    }

    useEffect(()=>{
        axios.get(`http://localhost:8090/holidaySetting/get/${id}`)
        .then((response)=>{
            console.log(response);
            setBusyDate(response.data.hour.day);
            setTimeFrom(response.data.hour.timeFrom);
            
        }).catch((err)=>{
            alert(err.message);
        });
    }, []);

}