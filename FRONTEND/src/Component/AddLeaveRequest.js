import React from "react"

export default function AddLeaveRequest(){

    return(

    //   <form>
    //   <center><h1>Add Leave Request</h1></center>
    //   <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //     <div className="sm:col-span-3">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         NIC
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="nic"
    //           id="nic"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>
    //     </div>
  
    //     <div className="sm:col-span-3">
    //       <label className="block text-sm font-medium leading-6 text-gray-900">
    //         Name
    //       </label>
    //       <div className="mt-2">
    //         <input
    //           type="text"
    //           name="name"
    //           id="name"
    //           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //         />
    //       </div>
    //     </div>

    //     <div className="col-span-full">
    //             <label className="block text-sm font-medium leading-6 text-gray-900">
    //               Reason
    //             </label>
    //             <div className="mt-2">
    //               <textarea
    //                 type="text"
    //                 name="reason"
    //                 id="reason"
    //                 rows={5}
    //                 cols={12}
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               />
    //             </div>
    //           </div>
        
  
    //   <div className="mt-6 flex items-center justify-end gap-x-6">
    //     <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
    //       Cancel
    //     </button>
    //     <button
    //       type="submit"
    //       className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    //       Add
    //     </button>
    //   </div>
    // </form>


      <form >
        <center><h1>Add Leave Request</h1></center>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              NIC
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="nic"
                id="nic"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="name"
                id="name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
            </div>
          </div>

          <div class="sm:col-span-3 sm:col-start-1">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              Date (From)
            </label>
            <div class="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label class="block text-sm font-medium leading-6 text-gray-900">
              No of days
            </label>
            <div class="mt-2">
              <input
                type="number"
                name="noofdays"
                id="noofdays"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />
            </div>
          </div>

          <div class="col-span-full">
            <label htmlFor="street-address" class="block text-sm font-medium leading-6 text-gray-900">
              Reason
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="address"
                id="address"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

              />

            </div>
          </div>



        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Add
          </button>
        </div>
      </form>



    )
}