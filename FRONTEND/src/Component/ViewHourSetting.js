import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewHourSetting() {
    const [businessHours, setSetting] = useState([]);

    useEffect(() => {
        function getSetting() {
            axios.get("http://localhost:8090/hourSetting")
                .then((res) => {
                    console.log("Response from server:", res.data); 
                    setSetting(res.data);
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert(err.message);
                });
        }

        getSetting();
    }, []);

    return(
        <div>
            <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Business Hours</h2>
            <div class="flex">
            
            <table  class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 text-white sticky top-10 ms-20">
                <thead>
                    <tr className="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 mt-5">
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Day</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Opening Time</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Closing Time</th>                   
                    </tr>
                </thead>
            <tbody>
                {businessHours.map((hourSetting) => (
                    <tr key={hourSetting.id} class="bg-white border-b border-gray-200 hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hourSetting.day}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hourSetting.timeFrom}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{hourSetting.timeTo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
    );
}