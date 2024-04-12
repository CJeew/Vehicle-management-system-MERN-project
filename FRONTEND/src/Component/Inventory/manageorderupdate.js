import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function OrderEditItems() {
  const initialItemState = {
    itemcode: "",
    itemname: "",
    suppliername: "",
    needquantity: "",
    ordercode:"",

  
    
   
  };

  const { id } = useParams();
  const [item, setItem] = useState(initialItemState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/manageorders/get/${id}`);
        console.log('API Response:', response.data); // Log the response data
        const data = response.data.manageorders || initialItemState; // Access manageparts object
        console.log('Fetched Item:', data); // Log the fetched item
        setItem(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false even on error
      }
    };
  
    fetchData(); // Call the function to fetch data
  }, [id]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const updateItems = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8090/manageorders/update/${id}`, item);
      alert("Item Updated");
      window.location.href = "/managedorders";
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={updateItems} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-auto w-1/4">
    <center><h1 className="font-bold">Order Update Item</h1></center>

      <div className="mt-4">
        <div>
          <label htmlFor="itemcode" className="block text-sm font-medium leading-6 text-gray-900">Item Code</label>
          <input
            type="text"
            name="itemcode"
            id="itemcode"
            value={item.itemcode}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="itemname" className="block text-sm font-medium leading-6 text-gray-900">Item Name</label>
          <input
            type="text"
            name="itemname"
            id="itemname"
            value={item.itemname}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="suppliername" className="block text-sm font-medium leading-6 text-gray-900">Supplier Name</label>
          <input
            type="text"
            name="suppliername"
            id="suppliername"
            value={item.suppliername}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="needquantity" className="block text-sm font-medium leading-6 text-gray-900">Need Quantity</label>
          <input
            type="text"
            name="needquantity"
            id="needquantity"
            value={item.needquantity}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="ordercode" className="block text-sm font-medium leading-6 text-gray-900">Order code</label>
          <input
            type="text"
            name="ordercode"
            id="ordercode"
            value={item.ordercode}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
       
     
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/managedorders')}>
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
  );
}