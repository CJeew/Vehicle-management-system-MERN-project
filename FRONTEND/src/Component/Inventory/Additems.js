import React, { useState } from "react";
import axios from "axios";
import { Link , useNavigate} from 'react-router-dom'


export default function Additems() {
  const [itemcode, setItemcode] = useState("");
  const [itemname, setItemname] = useState("");
  const [category, setCategory] = useState("");
  
  const [price, setPrice] = useState("");
  const [suppliername, setSuppliername] = useState("");
  const [ reorderlevel,setReorderLevel] = useState("");
  const [stocklimit, setStocklimit] = useState("");
  const [remark, setRemark] = useState("");
  const [isactive, setIsactive] = useState("");
  const [errors, setErrors] = useState({});


  const navigate = useNavigate()


  function validateForm() {
    const errors = {};


   // Item Code validation
   if (!itemcode.trim()) {
    errors.itemcode = "Item Code is required";
  } else if (!/^[a-zA-Z0-9]+$/.test(itemcode)) {
    errors.itemcode = "Item Code can only contain letters and numbers";
  }

    // Item Name validation
    if (!itemname.trim()) {
      errors.itemname = "Item Name is required";
    }
 
        // Price validation
        if (!price.trim()) {
          errors.price = "Price is required";
        } else if (!/^\d+(\.\d{1,2})?$/.test(price)) {
          errors.price = "Invalid price format. Use numbers with up to two decimal places";
        }
    
       // Stock Limit validation
       if (!stocklimit.trim()) {
        errors.stocklimit = "Stock Limit is required";
      } else if (!/^\d+$/.test(stocklimit)) {
        errors.stocklimit = "Stock Limit must be a positive integer";
      }
  
      // Add more validation rules for other fields if needed
  
      return errors;
    }
  

  // function sendData(e) {
  //   e.preventDefault();

  function sendData(e) {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }


    const newAdditems = {
      itemcode,
      itemname,
      category,
      
      price,
      suppliername,
      reorderlevel,
      stocklimit,
      remark,
      isactive,
    };

    axios.post("http://localhost:8090/manageparts/add", newAdditems)
      .then(() => {
        alert("Item Added");
        navigate("/ManageItems");
       
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

return (
<form onSubmit={sendData} className="container bg-gray-200 bg-opacity-70 rounded-lg px-8 py-4 mt-3 mx-auto w-1/4">
     
<h1 className="text-center font-bold text-black">Add Item</h1>


      <div className="mt-4">
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
            {errors.itemcode && <span className="text-red-500">{errors.itemcode}</span>}

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
           {errors.itemname && <span className="text-red-500">{errors.itemname}</span>}

        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
 
        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
          />
            {errors.price && <span className="text-red-500">{errors.price}</span>}

        </div>
        <div>
          <label htmlFor="suppliername" className="block text-sm font-medium leading-6 text-gray-900">Supplier Name</label>
          <input
            type="text"
            name="suppliername"
            id="suppliername"
            value={suppliername}
            onChange={(e) => setSuppliername(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="reorderlevel" className="block text-sm font-medium leading-6 text-gray-900">Reorder Level</label>
          <input
            type="number"
            name="reorderlevel"
            id="reorderlevel"
            value={reorderlevel}
            onChange={(e) => setReorderLevel(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            pattern="[0-9]"
          />
        </div>
        <div>
          <label htmlFor="stocklimit" className="block text-sm font-medium leading-6 text-gray-900">Stock Limit</label>
          <input
            type="number"
            name="stocklimit"
            id="stocklimit"
            value={stocklimit}
            onChange={(e) => setStocklimit(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            
          />
           {errors.stocklimit && <span className="text-red-500">{errors.stocklimit}</span>}

        </div>
        <div>
          <label htmlFor="remark" className="block text-sm font-medium leading-6 text-gray-900">Remark</label>
          <input
            type="text"
            name="remark"
            id="remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Status</label>
          <div className="flex items-center">
            <input
              type="radio"
              id="active"
              name="status"
              value="active"
              checked={isactive=== 'active'}
              onChange={() => setIsactive('active')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label htmlFor="active" className="ml-2 text-sm text-gray-700">Yes</label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="radio"
              id="inactive"
              name="status"
              value="inactive"
              checked={isactive === 'inactive'}
              onChange={() => setIsactive('inactive')}
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
          Add
        </button>
      </div>
    </form>
  );
}
