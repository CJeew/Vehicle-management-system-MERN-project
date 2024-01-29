import React from "react";
import "./Header.css";
import imgSrc from "./logo.png";

function Header(){
    return(
       
    <div className="txt">
        <a href="/"><img src={imgSrc}/></a>
      <ul type="none" className="nav_b">
    <div className="dropdown">
        <li className="dropdownbtn"><a href="">My function</a></li>
        <div className="dropdowncontent">
        <li><a href="/">Home</a></li>
        <li><a href="/add">Add</a></li>
        <li><a href="/display">Display</a></li>
        <li><a href="/update">Update</a></li>
        <li><a href="/delete">Delete</a></li>
       
        </div>
        </div>
        <li><a href="">Function 1</a></li>
        <li><a href="">Function 2</a></li>
        <li><a href="">Function 3</a></li>
        <li><a href="">Function 4</a></li>
        <li><a href="/">Function 5</a></li>
        <li><a href="">Function 6</a></li>
        <li><a href="">Function 7</a></li>
     
    </ul>
    <div className="line"></div>
</div>

    )
}

export default Header;
