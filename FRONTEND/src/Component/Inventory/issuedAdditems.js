import React, { useState } from "react";
import axios from "axios";
import { Link , useNavigate} from 'react-router-dom'


export default function   IssuedItemsAdditems() {
  const [itemcode, setItemcode] = useState("");
  const [itemname, setItemname] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [issuedcode, setIssuedcode] = useState("");


  const navigate = useNavigate()

  function sendData(e) {
    e.preventDefault();

    const newissuedAdditems = {
      itemcode,
      itemname,
      price,
      quantity,
      issuedcode,
     
    };

    axios.post("http://localhost:8090/issueditems/add", newissuedAdditems)
      .then(() => {
        alert("Item Added");
        navigate("/Issueditems");
       
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form onSubmit={sendData} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
     
      <center><h1>Issued Add Item</h1></center>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <label htmlFor="itemcode" className="block text-sm font-medium leading-6 text-gray-900">Item Code</label>
          <input
            type="text"
            name="itemcode"
            id="itemcode"
            value={itemcode}
            onChange={(e) => setItemcode(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="itemname" className="block text-sm font-medium leading-6 text-gray-900">Item Name</label>
          <input
            type="text"
            name="itemname"
            id="itemname"
            value={itemname}
            onChange={(e) => setItemname(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input
            type="text"
            name="category"
            id="category"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
          <input
            type="text"
            name="description"
            id="description"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="issuedcode" className="block text-sm font-medium leading-6 text-gray-900">Issued Code</label>
          <input
            type="text"
            name="issuedcode"
            id="issuedcode"
            value={issuedcode}
            onChange={(e) => setIssuedcode(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      
     
  
        
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
     
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/issueditems')}>
          Cancel
        </button>
        
        <button
      
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add
        </button>
      </div>
    </form>
  );
}
