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
          // Check if email is entered
          if (!cmail) {
          alert("Please enter your email.");
          return;
           }

          // Check if a rating is selected
           if (!rating) {
           alert("Please select a rating.");
          return;
           }
           // Check if a message is fill
           if (!message) {
           alert("Please give your peedback.");
          return;
           }

          const newReview = {
              cmail,
              rating,
              message
   
          };
  
          axios.post("http://localhost:8090/reviewAdd/Review", newReview)
          .then(()=>{
              alert("Review Added");
              window.location.reload();
          }).catch((err)=>{
              alert(err);
          });
      }
  return (
  <div>
    <form onSubmit={sendreview}>
    <div>
    <h2 className="ms-20 my-10 mt-20 text-5xl font-extrabold text-white">Feedback Form</h2>
      <form className=".w-auto bg-gray-100 p-6 ms-60 my-10 p-4 m-60 border-gray-300 rounded-lg min-h-min bg-opacity-50">
        {/* <h2 className="text-white text-2xl font-bold mb-4">Feedback Form</h2> */}
        <div className="mb-4 text-black" >
          <label for="email" className="block text-sm font-medium text-black my-4">
            Email
          </label>
          <input required onChange={(e) => setCmail(e.target.value)}
            
            type="email"
            id="email"
            className=" text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        
        <div classNames="mb-4">
          <label className="block text-sm font-medium text-black my-4">Rating</label>
          <div className="text-white flex items-center space-x-2">
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating1"
              value="1"
              className=" focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating1" className="block text-sm font-medium text-black my-4">1 </label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating2"
              value="2"
              className="focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating2" className="block text-sm font-medium text-black my-4">2</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating3"
              value="3"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating3" className="block text-sm font-medium text-black my-4">3</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating4"
              value="4"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating4" className="block text-sm font-medium text-black my-4">4</label>
            <input required onChange={(e) => setrating(e.target.value)}
              type="radio"
              name="rating"
              id="rating5"
              value="5"
              class="text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
            <label for="rating5" className="block text-sm font-medium text-black my-4">5</label>
          </div>
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-black my-4">
            Message
          </label>
          <input required onChange={(e) => setmessage(e.target.value)}
            id= "message" type="text"
            class= "text-black text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
         
          </input>
        </div>
        <div class="mt-5 mb-5 flex justify-center">
        <button type="submit" class="bg-gradient-to-r from-yellow-700 via-yellow-800 to-yellow-900 hover:from-amber-900 hover:via-amber-800 
                                  hover:to-amber-700 text-white font-bold py-3 px-10 rounded-lg mr-2 opacity-90 transition duration-300
                                  ease-in-out transform hover:scale-105" value={"Add Review"} onClick={sendreview}>Submit</button></div>
      </form>
    </div></form></div>
  );
}
export default Review;