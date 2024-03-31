import React from "react";
import "./Home.css";
import "./Review.js";
import "./Chome.js";

export default function Review() {
  return (
    <div>
      <form class="max-w-md mx-auto mt-16 p-4 bg-gray-800 bg-opacity-50 shadow rounded">
        <h2 class="text-2xl font-bold mb-4">Feedback Form</h2>
        <div class="mb-4" text-black>
          <label for="email" class="block mb-1 ">
            Email
          </label>
          <input
            
            type="email"
            id="email"
            class=" text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input>
        </div>
        
        <div class="mb-4">
          <label class="block mb-1">Rating</label>
          <div class="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              id="rating1"
              value="1"
              class="focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating1">1</label>
            <input
              type="radio"
              name="rating"
              id="rating2"
              value="2"
              class="focus:outline-none focus:ring-2 focus:ring-red"
            ></input>
            <label for="rating2">2</label>
            <input
              type="radio"
              name="rating"
              id="rating3"
              value="3"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating3">3</label>
            <input
              type="radio"
              name="rating"
              id="rating4"
              value="4"
              class="focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <label for="rating4">4</label>
            <input
              type="radio"
              name="rating"
              id="rating5"
              value="5"
              class="focus:outline-none focus:ring-2 focus:ring-red-500"
            ></input>
            <label for="rating5">5</label>
          </div>
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            class="text-black w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-2 px-4 bg-red-500 text-white rounded hover:bg-blue-1100 focus:outline-none focus:ring-2 focus:ring-blue-1000"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
