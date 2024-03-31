import React from "react";
import "./Home.css";
import "./BookingPage.js";
import "./BookingPage.css";

export default function BookNowPage() {
  return (
    <div>
      <div className="relative">
            <h1 className="ms-20 my-10 mt-20 text-6xl font-extrabold dark:text-white">Book Now</h1>

            <form className="w-half bg-gray-100 p-6 ms-60 my-10 mt230 p-4 m-60 border-gray-300 rounded-lg min-h-min">
                <div class="grid grid-cols-1 gap-4">
                    <div class="form-group flex mx-10" >
                        <table class="w-full">
                            <tr>
                                <td><label for="firstname" class="block text-sm font-medium text-black my-4">First Name</label></td>
                                <td><input type="text" id="firstname" name="firstname" class="mt-1 p-2 block border-gray-300 rounded-md text-black" required></input></td>
                                <td> <label for="lastname" class="block text-sm font-medium text-black my-4">Last Name</label></td>
                                <td> <input type="text" id="lastname" name="lastname" class="mt-1 p-2 block border-gray-300 rounded-md text-black"  required></input></td>
                            </tr> 
                            <tr>   
                                <td><label for="address" class="block text-sm font-medium text-black my-4">Address</label></td>
                                <td><input type="textarea" id="address" name="address" class="mt-1 p-2 block border-gray-300 rounded-md text-black"  required></input></td>
                                <td><label for="phone" class="block text-sm font-medium text-black my-4">Phone Number</label></td>
                                <td><input type="tel" id="phone" name="phone" class="mt-1 p-2 block border-gray-300 rounded-md text-black"  required></input></td>
                            </tr>
                            <tr>
                                <td><label for="email" class="block text-sm font-medium text-black my-4">Email</label></td>
                                <td><input type="email" id="email" name="email" class="mt-1 p-2 block border-gray-300 rounded-md text-black me-10"  required></input></td>
                            </tr>

                            <br></br>
                            <br></br>

                            <tr>
                                <td><label for="vehicle-number" class="block text-sm font-medium text-black me-5 my-4">Vehicle Number</label></td>
                                <td><input type="text" id="vehicle-number" name="vehicle-number" class="mt-1 p-2 block border-gray-300 rounded-md text-black"  required></input></td>
                                <td><label for="vehicle-type" class="block text-sm font-medium text-black me-5 my-4">Vehicle Type</label></td> 
                                <td><select id="vehicle-type" name="vehicle-type" class="mt-1 p-2 block border-gray-300 rounded-md text-black">
                                    <option value="car">Car</option>
                                    <option value="truck">Truck</option>
                                    <option value="motorcycle">Motorcycle</option>
                                    </select>
                                </td>
                            </tr>

                            <br></br>
                            <br></br>

                            <tr>
                                <td><label for="date" class="block text-sm font-medium text-black me-5 my-4">Date</label></td>
                                <td><input type="date" id="date" name="date" class="mt-1 p-2 block  border-gray-300 rounded-md text-black"  required></input></td>

                                <td><label for="time" class="block text-sm font-medium text-black  me-5 my-4">Time</label></td>
                                <td><input type="time" id="time" name="time" class="mt-1 p-2 block  border-gray-300 rounded-md text-black"  required></input></td>
                            </tr>


                        </table>
                    </div>

                    <div class="form-group">
                        <label class="block text-sm font-medium text-black mx-10">Services</label>
                        <div class="mt-5 space-y-2 flex mx-10">
                            <table>
                                <tr>
                                    <td><div class="mt-1 flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Body Wash</label>
                                        </div></td> 
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Interior Clean</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Under Wash</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Under Oil</label>
                                        </div></td>  
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Engine Wash</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Wheels Remove</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Oil Change</label>
                                        </div></td>
                                </tr> 

                                <tr>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Waxing</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Cut and Polish</label>
                                        </div></td>  
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Engine Cleanup</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Full Service</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Filter Change</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Greasing</label>
                                        </div></td>
                                    <td><div class="flex items-center me-10">
                                        <input id="service" name="services" type="checkbox"></input>
                                        <label for="service">Full Interior Clean</label>
                                        </div></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="mt-5 mb-5 flex justify-center">
                    <button type="submit" class="bookBtn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2">Book Now</button>
                </div>
            </form>
        </div>
    </div>
  );
}
                                                                                                         