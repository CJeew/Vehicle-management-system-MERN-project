import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTransaction() {
  const initialItemState = {
    transactionCode:"",
    date: "",
    description: "",
    paymentType: "",
    amount: "",
    accounts:"",
    department:"" 
   
  };

  const { id } = useParams();
  const [item, setItem] = useState(initialItemState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/finance/get/${id}`);
        console.log('API Response:', response.data); // Log the response data
        const data = response.data.Finance|| initialItemState; // Access Transaction object from backend model
        console.log('Fetched Transaction:', data); // Log the fetched Transaction
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
      await axios.put(`http://localhost:8090/finance/update/${id}`, item);
      alert("Transaction Updated");
      window.location.href = "/Finance";
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={updateItems} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-6 mt-auto mx-auto w-2/5">
      <center><h1 className="text-center text-2xl font-bold mb-6"> Update Transaction</h1></center>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="flex flex-col">
          <label htmlFor="transactionCode" className="text-m font-medium leading-6 text-gray-900 mb-1">transactionCode</label>
          <input
            type="text"
            name="transactionCode"
            id="transactionCode"
            value={item.transactionCode}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-m font-medium leading-6 text-gray-900 mb-1">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={item.date}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-m font-medium leading-6 text-gray-900 mb-1">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={item.description}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paymentType" className="text-m font-medium leading-6 text-gray-900 mb-1">PaymentType</label>
          <select
            type="text"
            name="paymentType"
            id="paymentType"
            value={item.paymentType}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          >
            <option value="cash">Cash</option>
            <option value="cradit">Cradit Card</option>
            <option value="debit">Debit Card</option>
          </select> 
        </div>
        <div className="flex flex-col"> 
          <label htmlFor="amount" className="text-m font-medium leading-6 text-gray-900 mb-1">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={item.amount}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="accounts" className="text-m font-medium leading-6 text-gray-900 mb-1">Accounts</label>
          <select
            type="text"
            name="accounts"
            id="accounts"
            value={item.accounts}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          >
            <option value="income">Income</option>
            <option value="expanses">Expanses</option>
            <option value="tax">Tax</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="department" className="text-m font-medium leading-6 text-gray-900 mb-1">Department</label>
          <select
            //type="text"
            name="department"
            id="department"
            value={item.department}
            onChange={inputChangeHandler}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          >
            <option value="finance">Finance</option>
            <option value="inventory">Inventory</option>
            <option value="service">Service</option>
            <option value="service">Booking</option>
          </select>  
        </div>
       
     
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/Finance')}>
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
