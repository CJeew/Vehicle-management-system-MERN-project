import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


export default function AddTransaction() {
  const [transactionCode,setTCode] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amount, setAmount] = useState("");
  const [accounts, setAccounts] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate()

  function sendData(e) {
    e.preventDefault();

    const newAdditems = {
        transactionCode,
        date,
        description,
        paymentType,
        amount,
        accounts,
        department,
       
    };

    axios.post("http://localhost:8090/finance/add", newAdditems)
      .then(() => {
        alert("Transaction Added");
        navigate("/Finance");
       
      })
      .catch((err) => {
        alert(err.response.data.message)
      });
  }

  return (
    <form onSubmit={sendData} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-6 mt-auto mx-auto w-2/5">
     
      <center><h1 className="text-center text-2xl font-bold mb-6">Add Transcation</h1></center>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div className="flex flex-col">
          <label htmlFor="transactionCode" className="text-m font-medium leading-6 text-gray-900 mb-1">Transaction Code</label>
          <input
            type="text"
            name="transactionCode"
            id="transactionCode"
            value={transactionCode}
            onChange={(e) => setTCode(e.target.value)}
            className=" block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="date" className="text-m font-medium leading-6 text-gray-900 mb-1">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="text-m font-medium leading-6 text-gray-900 mb-1">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="paymentType" className="text-m font-medium leading-6 text-gray-900 mb-1">PaymentType</label>
          <select
           // type="text"
            name="paymentType"
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm py-2 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="accounts" className="text-m font-medium leading-6 text-gray-900 mb-1">Category</label>
          <select
            type="text"
            name="accounts"
            id="accounts"
            value={accounts}
            onChange={(e) => setAccounts(e.target.value)}
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
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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
     
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" >
          <Link to="/Finance" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </Link>
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
