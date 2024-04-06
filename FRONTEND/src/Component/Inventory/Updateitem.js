import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditItems() {
  const initialItemState = {
    itemcode: "",
    itemname: "",
    category: "",
    description: "",
    price: "",
    suppliername: "",
    stocklimit: "",
    remark: "",
    isactive: "",
  };

  const { id } = useParams();
  const [item, setItem] = useState(initialItemState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/manageparts/get/${id}`);
        console.log('API Response:', response.data); // Log the response data
        const data = response.data.manageparts || initialItemState; // Access manageparts object
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
      await axios.put(`http://localhost:8090/manageparts/update/${id}`, item);
      alert("Item Updated");
      window.location.href = "/manageitems";
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <form onSubmit={updateItems} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-5">
      <center><h1>Edit Item</h1></center>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
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
          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={item.category}
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
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={item.price}
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
          <label htmlFor="stocklimit" className="block text-sm font-medium leading-6 text-gray-900">Stock Limit</label>
          <input
            type="number"
            name="stocklimit"
            id="stocklimit"
            value={item.stocklimit}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">Remark</label>
          <input
            type="text"
            name="remark"
            id="remark"
            value={item.remark}
            onChange={inputChangeHandler}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Status</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="active"
              name="isactive"
              value="active"
              checked={item.isactive === 'active'}
              onChange={inputChangeHandler}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="active" className="ml-2 text-sm text-gray-700">Yes</label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="inactive"
              name="isactive"
              value="inactive"
              checked={item.isactive === 'inactive'}
              onChange={inputChangeHandler}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="inactive" className="ml-2 text-sm text-gray-700">No</label>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/manageitems')}>
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
