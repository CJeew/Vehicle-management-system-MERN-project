import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link, useParams, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const UpdateItems = () => {

  const items = {
    itemcode:"",
    itemname:"",
    category:"",
    description:"",
    price:"",
    suppliername:"",
    stocklimit:"",
    remark:"",
    isactive:""
  }
  const {id} = useParams();
  const [item, setItem] = useState(items);
  const navigate = useNavigate()

  const inputChangeHandler = (e) => {
    const {name, value} = e.target;
    setItem({...item, [name]:value});
    console.log(item);

  }
  useEffect(() => {
    axios.get(`http://localhost:8090/manageparts/get/${id}`)
    .then((response)=>{
      setItem(response.data)
      
    })
    .catch((error)=> {
      console.log(error);
    })

  },[id])

  const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8090/manageparts/update/${id}`, item)
    .then((response) =>{
      // console.log(response)
      toast.success(response.data.msg, {position: 'top-right'})
      navigate("/")
    


    }).catch(error => console.log(error))


  }






  return (
    <div id='container'>
    <div className='addItem'>
      <Link to={"/managedparts"}>Back</Link>
      <h3>Update Item</h3>
      <form className='addItemForm' onSubmit={submitForm}>

        <div className='inputGroup'>
          <label htmlFor='itemcode'>Item Code</label>
          <input type='text' value = {item.itemcode} onChange={inputChangeHandler} id='itemcode' name="itemcode" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='iname'>Item Name</label>
          <input type='text'value = {item.itemname} onChange={inputChangeHandler} id='itemname' name="itemname" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='category'>Category</label>
          <input type='text' value = {item.category} onChange={inputChangeHandler} id='category' name="category" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='desc'>Description</label>
          <input type='text' value = {item.description}  onChange={inputChangeHandler} id='description' name="description" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='price'>Price</label>
          <input type='text' value = {item.price} onChange={inputChangeHandler}  id='price' name="price" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='sname'>Supplier Name</label>
          <input type='text' value = {item.suppliername} onChange={inputChangeHandler} id='suppliername' name="suppliername" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='slimit'>Stock Limit</label>
          <input type='text' value = {item.stocklimit} onChange={inputChangeHandler} id='stocklimit' name="stocklimit" autoComplete='off' ></input>
        </div>
        <div className='inputGroup'>
          <label htmlFor='remark'>Remark</label>
          <input type='text' value = {item.remark} onChange={inputChangeHandler} id='remark' name="remark" autoComplete='off' ></input>
        </div>
        <div className='inputgroup'>
          <label htmlFor='isactive'>Is Active</label>
          <input type='radio' value = {item.isactive} onChange={inputChangeHandler} id='yes' name="isactive" autoComplete='off' ></input>
          <input type='radio' value = {item.isactive} onChange={inputChangeHandler} id='no' name="isactive" autoComplete='off' ></input>
        </div>
        <div className='inputGrp'>
          <button id='r' type='submit'>Reset</button>
          <button id='a' type='submit'>Update</button>
        </div>
        {/* <div className='inputGroup'>
          <button type='submit'>ADD</button>
        </div> */}

      </form>
      
      
    </div>
    </div>
  )
}

export default UpdateItems
