import React from "react";
import "./Home.css";

export default function servicehome(){
<div>
    <a href=""><button>packages</button></a>
    <a href=""><button>services</button></a>
</div>
    return(
        <div className="text-2xl ">
            <ul>
                <li><a href="/Addpkg"><button>Add Service</button></a></li>
                <li><a href="/display"><button>Display Service</button></a></li>
                <li><a href="/update"><button>Update Service</button></a></li>
                <li><a href="/delete"><button>Delete Service</button></a></li>
            </ul>
            
        </div>
    )
}