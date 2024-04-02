import React from "react";
import "./Home.css";
import imgSrc from "./logo.png";
import "./BookingPage.js";
import "./BookingPage.css";
import { Link } from "react-router-dom";
import "./Chome.js";
import "./Chome.css";
import "./Register.js";
import "./Review.js";
import "./Profile.js";

function Header() {
  return (
    <div className="txt">
      <a href="/">
        <img src={imgSrc} />
      </a>
      <ul type="none" className="nav_b">
        {/* <div className="dropdown">
          <li className="dropdownbtn">
            <a href="">My function</a>
          </li>
          <div className="dropdowncontent">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/add">Add</a>
            </li>
            <li>
              <a href="/display">Display</a>
            </li>
            <li>
              <a href="/update">Update</a>
            </li>
            <li>
              <a href="/delete">Delete</a>
            </li>
          </div>
        </div> */}

        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <div className="customer-btn">
            <a href="/Customerlogin">Customer</a>
          </div>
        </li>

        <li>
          <a href="/add">Supplier</a>
        </li>
        <li>
          <a href="">Staff</a>
        </li>
        <li>
          <a href="/inventory">Inventory</a>
        </li>
        <li>
          <a href="/">Finance</a>
        </li>
        <li>
          <a href="servicehome">Services</a>
        </li>
        <li></li>

        <li>
          <div class="bookBtn text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"><a href="/booking" class="text-whitesmoke">Book Now</a></div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
