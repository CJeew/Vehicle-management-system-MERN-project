import React from "react";
import "./Test.css";

function Test() {
  return (
    <div className="txt">
      <h2>VMS Solutions</h2>
      <ul className="nav_b">
        <li>
          <div className="dropdown">
            <li className="dropbtn">My function</li>
            <div className="dropdown-content">
              <a href="/">Home</a>
                 <li><a href="/add">Add</a></li>
                 <li><a href="/display">Display</a></li>
                 <li><a href="/update">Update</a></li>
                 <li><a href="/delete">Delete</a></li>
 
            </div>
          </div>
          <a href="">Function 6</a>
            <a href="">Function 7</a>
        </li>
      </ul>
           
    </div>
  );
}

export default Test;
