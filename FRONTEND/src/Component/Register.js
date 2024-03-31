import React from "react";
import "./Home.css";
import "./Register.js";
import "./Chome.js";

export default function Register() {
  return (
    <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div class="mt-10 text-center font-bold">AUTO FIX</div>
      <div class="mt-3 text-center text-4xl font-bold">
        Customer Registration
      </div>
      <div class="p-8">
        <div class="flex gap-4">
          <input
            type="Name"
            name="name"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Full Name *"
          />
          <input
            type="Phone"
            name="Phone"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Phone *"
          />
          <input
            type="NIC"
            name="NIC"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="NIC*"
          />
          <input
            type="email"
            name="email"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Email *"
          />
        </div>
        <div class="flex gap-4">
          <input
            type="NUM"
            name="NUM"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vehicle Number *"
          />
          <select
            name="select"
            id="select"
            class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          >
            <option class="font-semibold text-slate-300">Car</option>
            <option class="font-semibold text-slate-300">Motor Bike</option>
            <option class="font-semibold text-slate-300">Three Wheeler</option>
            <option class="font-semibold text-slate-300">Heavy Vehicle</option>
          </select>
        </div>
        <div class="mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-5 text-gray-300"
          >
            Password
          </label>
          <div class="mt-1 rounded-md shadow-sm text-black">
            <input
              id="password"
              name="password"
              type="password"
              required=""
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></input>
          </div>
        </div>

        <div class="mt-6">
          <label
            for="password_confirmation"
            class="block text-sm font-medium leading-5 text-gray-300"
          >
            Confirm Password
          </label>
          <div class="mt-1 rounded-md shadow-sm text-black">
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              required=""
              class="appearance-none block w-full px-3 py-2 border border-black rounded-md placeholder-gray-800 focus:outline-none focus:shadow-outline-blue focus:border-blue-900 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            ></input>
          </div>
        </div>
        <dev></dev>
      </div>
      <div class="text-center">
        <a class="text-3xl cursor-pointer rounded-lg bg-blue-900 px-8 py-5 text-sm font-bold text-white mt-10 text-center flex justify-center items-center">
          Register
        </a>
      </div>
      <b></b>
    </div>
  );
}
