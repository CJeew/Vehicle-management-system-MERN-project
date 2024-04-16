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
        alert(err);
      });
  }

  return (
    <form onSubmit={sendData} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
     
      <center><h1>Add Transcation</h1></center>

      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <div>
          <label htmlFor="transactionCode" className="block text-sm font-medium leading-6 text-gray-900">Transaction Code</label>
          <input
            type="text"
            name="transactionCode"
            id="transactionCode"
            value={transactionCode}
            onChange={(e) => setTCode(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="paymentType" className="block text-sm font-medium leading-6 text-gray-900">PaymentType</label>
          <input
            type="text"
            name="paymentType"
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="accounts" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <input
            type="text"
            name="accounts"
            id="accounts"
            value={accounts}
            onChange={(e) => setAccounts(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">Department</label>
          <input
            type="text"
            name="department"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
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
