import React from "react"

export default function StaffHome(){

    return(
		<div class="h-screen w-screen bg-gray flex justify-center items-center">
      <div class="relative inline-flex  group">
        <a
          href="/staffdetails"
          title="ManageEmployee"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Manage Employee
        </a>
      </div>

      <dev>
        <a></a>{" "}
      </dev>

      <div class="relative inline-flex  group">
        <a
          href="/employeepayroll"
          title="Payroll"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Employee Payroll
        </a>
      </div>

      <dev>
        <a></a>{" "}
      </dev>

      <div class="relative inline-flex  group">
        <a
          href="#"
          title="LeaveRequest"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Leave Request
        </a>
      </div>

	  <dev>
        <a></a>{" "}
      </dev>

      <div class="relative inline-flex  group">
        <a
          href="#"
          title="Attendance"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Employee Attendance
        </a>
      </div>

	  <dev>
        <a></a>{" "}
      </dev>

      <div class="relative inline-flex  group">
        <a
          href="#"
          title="Announcement"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Announcement
        </a>
      </div>

    </div>

    )
}