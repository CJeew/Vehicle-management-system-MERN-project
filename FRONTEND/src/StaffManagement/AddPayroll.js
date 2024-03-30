import React, {useState} from "react";
import axios from "axios";
import "./StaffStyles.css";

export default function AddPayroll(){

    const [nic, setNic] = useState("");
    const [name, setName] = useState("");
    const [otstatus, setOtstatus] = useState("");
    const [otpayment, setOtpayment] = useState("");
    const [penaltyamount, setPenaltyamount] = useState("");
    const [Bonus, setBonus] = useState("");
    const [Salary, setSalary] = useState("");

    function sendData(e){
        e.preventDefault();
        //alert("Inserted");

        const newPayroll = {

            nic,
            name,
            otstatus,
            otpayment,
            penaltyamount,
            Bonus,
            Salary
        }

        axios.post("http://localhost:8070/payroll/addpayroll",newPayroll).then(()=>{

            alert("Payroll Added")
        }).catch((err)=>{
            alert(err)
        })

    }

    return(

        // <div >
        //     <form  onSubmit={sendData}>
        //         <div class= "form-row">
        //         <div >
        //             <label for="nic" >NIC</label>
        //             <input type="text"  id="nic"
        //             onChange={(e)=>{

        //                 setNic(e.target.value);
        //             }}
        //              required/>
        //         </div>
        //         <div>
        //             <label for="otstatus" >OT Status</label>
        //             <select type="text"  id="otstatus"  
        //             onChange={(e)=>{

        //                 setOtstatus(e.target.value);
        //             }}
        //              required>
        //                 <option selected>Choose...</option>
        //                 <option value="yes">Yes</option>
        //                 <option value="no">No</option>
        //             </select>
        //         </div>
        //         </div>
        //         <div >
        //             <label for="bonus" >Bonus</label>
        //             <input type="number"  id="bonus" 
        //             onChange={(e)=>{

        //                 setBonus(e.target.value);
        //             }}
        //              required/>
        //         </div>
        //         <div className="col-md-4">
        //             <label for="name" >Name</label>
        //             <input type="text"  id="name" 
        //             onChange={(e)=>{

        //                 setName(e.target.value);
        //             }}
        //              required/>
        //         </div>
        //         <div className="col-md-4">
        //             <label for="otpayment" >OT Payment</label>
        //             <input type="number"  id="otpayment" 
        //             onChange={(e)=>{

        //                 setOtpayment(e.target.value);
        //             }}
        //              required/>
        //         </div>
        //         <div className="col-md-4">
        //             <label for="penaltyamount" >Penalty Amount</label>
        //             <input type="number"  id="penaltyamount" 
        //             onChange={(e)=>{

        //                 setPenaltyamount(e.target.value);
        //             }}
        //              required/>
        //         </div>
        //         <div className="col-md-4">
        //             <label for="salary" >Salary</label>
        //             <input type="number"  id="salary" 
        //             onChange={(e)=>{

        //                 setSalary(e.target.value);
        //             }}
        //              required/>
        //         </div>


        //         <div className="col-md-2">
        //             <button type="submit" >Submit</button>
        //         </div>
        //         <div className="col-md-2">
        //             <button type="submit" >Back</button>
        //         </div>
        //     </form>
        // </div>

        // <div className="container">
        //     <form className="grid grid-cols-2 gap-4" onSubmit={sendData}>
        //         <div className="col-span-1">
        //             <label htmlFor="nic" className="block text-sm font-medium text-gray-700">NIC</label>
        //             <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="nic"
        //                 onChange={(e) => {
        //                     setNic(e.target.value);
        //                 }}
        //                 required />
        //         </div>

        //         <div className="col-span-1">
        //             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        //             <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="name"
        //                 onChange={(e) => {
        //                     setName(e.target.value);
        //                 }}
        //                 required />
        //         </div>

        //         <div className="col-span-1">
        //             <label htmlFor="otstatus" className="block text-sm font-medium text-gray-700">OT Status</label>
        //             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="otstatus"
        //                 onChange={(e) => {
        //                     setOtstatus(e.target.value);
        //                 }}
        //                 required>
        //                 <option disabled selected>Choose...</option>
        //                 <option value="yes">Yes</option>
        //                 <option value="no">No</option>
        //             </select>
        //         </div>

        //         <div className="col-span-1">
        //             <label htmlFor="otpayment" className="block text-sm font-medium text-gray-700">OT Payment</label>
        //             <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="otpayment"
        //                 onChange={(e) => {
        //                     setOtpayment(e.target.value);
        //                 }}
        //                 required />
        //         </div>
                
        //         <div className="col-span-1">
        //             <label htmlFor="bonus" className="block text-sm font-medium text-gray-700">Bonus</label>
        //             <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="bonus"
        //                 onChange={(e) => {
        //                     setBonus(e.target.value);
        //                 }}
        //                 required />
        //         </div>
                
                
        //         <div className="col-span-1">
        //             <label htmlFor="penaltyamount" className="block text-sm font-medium text-gray-700">Penalty Amount</label>
        //             <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="penaltyamount"
        //                 onChange={(e) => {
        //                     setPenaltyamount(e.target.value);
        //                 }}
        //                 required />
        //         </div>
        //         <div className="col-span-1">
        //             <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
        //             <input type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="salary"
        //                 onChange={(e) => {
        //                     setSalary(e.target.value);
        //                 }}
        //                 required />
        //         </div>

        //         <div className="col-span-1">
        //             <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                 Submit
        //             </button>
        //         </div>
        //         <div className="col-span-1">
        //             <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                 Back
        //             </button>
        //         </div>
        //     </form>
        // </div>

        <form>
          <center><h1>Add Payroll</h1></center>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                NIC
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nic"
                  id="nic"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                OT Status
              </label>
              <div className="mt-2">
                <select
                  id="otstatus"
                  name="otstatus"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                  <option selected>Choose...</option>
                  <option>Yes</option>
                  <option>no</option>

                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label  className="block text-sm font-medium leading-6 text-gray-900">
                OT Payment
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="otpayment"
                  id="otpayment"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Bonus
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="bonus"
                  id="bonus"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Penalty Amt
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="penaltyamt"
                  id="penaltyamt"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                salary
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="salary"
                  id="salary"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Add
        </button>
      </div>
          </form>
       

    )
}