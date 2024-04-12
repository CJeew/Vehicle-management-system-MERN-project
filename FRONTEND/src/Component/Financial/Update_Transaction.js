import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTransaction() {
  const initialItemState = {
    date: "",
    description: "",
    paymentType: "",
    amount: "",
    accounts:"",
    department:"", 
   
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
        const data = response.data.issueditems || initialItemState; // Access Transaction object
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
    <form onSubmit={updateItems} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
      <center><h1> Update Transaction</h1></center>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={item.date}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={item.description}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="paymentType" className="block text-sm font-medium leading-6 text-gray-900">PaymentType</label>
          <input
            type="text"
            name="paymentType"
            id="paymentType"
            value={item.paymentType}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={item.amount}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="accounts" className="block text-sm font-medium leading-6 text-gray-900">Accounts</label>
          <input
            type="text"
            name="accounts"
            id="accounts"
            value={item.accounts}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            value={item.department}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
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
