import React, { useState } from "react";
import axios from "axios";

import "./Home.css";
import "./Review.js";
import "./Chome.js";

function Review() {
  
      const[cmail, setCmail] = useState("");
      const[rating, setrating] = useState("");
      const[message, setmessage] = useState("");
      
  
      function sendreview(e){
          e.preventDefault();
          //alert of inserted
  
          const newReview = {
              cmail,
              rating,
              message,
              
              
          };
  
          axios.post("http://localhost:8090/Review", newReview)
          .then(()=>{
              alert("Review Added");
              window.location.reload();
          }).catch((err)=>{
              alert(err);
          });
      }
  return (
    <form onSubmit={sendreview}>
    <div>
      <form class="max-w-md mx-auto mt-16 p-4 bg-gray-800 bg-opacity-50 shadow rounded">
        <h2 class="text-white text-2xl font-bold mb-4">Feedback Form</h2>
        <div class="mb-4" text-black>
          <label for="email" class="text-white block mb-1 ">
            Email
          </label>
          <input required onChange={(e) => setCmail(e.target.value)}
            
            type="email"
            id="email"
            class=" text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        
        <div class="mb-4">
          <label class="text-white block mb-1">Rating</label>
          <div class="flex items-center space-x-2">
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating1"
              value="1"
              class=" text-white focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating1" text-white>1 </label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating2"
              value="2"
              class="focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating2">2</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating3"
              value="3"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating3">3</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating4"
              value="4"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating4">4</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating5"
              value="5"
              class="text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
            <label for="rating5">5</label>
          </div>
        </div>
        <div class="mb-4">
          <label for="message" class="text-white block mb-1">
            Message
          </label>
          <input required onChange={(e) => setmessage(e.target.value)}
            id= "message" type="text"
            class= "text-black text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
         
          </input>
        </div>

        <button type="submit" class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-10 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105" value={"Add Review"} onClick={sendreview}>Submit</button>
      </form>
    </div></form>
  );
}
export default Review;