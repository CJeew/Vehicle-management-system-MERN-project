import React from "react"



export default function StaffHome() {

  return (

    <div class="h-screen w-screen bg-gray flex justify-center items-center flex-wrap">
      <div class="relative inline-flex group mr-4 fire-container">
        <a
          href="/staffdetails"
          title="ManageEmployee"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Manage Employee
    
        </a>
      </div>

      <div class="relative inline-flex group mr-4 fire-container">
        <a
          href="/employeepayroll"
          title="Payroll"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Employee Payroll
          
        </a>
      </div>

      <div class="relative inline-flex group mr-4 fire-container">
        <a
          href="/addleaverequest"
          title="LeaveRequest"
          class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Leave Request
        </a>
      </div>

      <div class="flex flex-wrap">
        <div class="relative inline-flex group mr-4 fire-container">
          <a
            href="/employeeattendance"
            title="Attendance"
            class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Employee Attendance
          </a>
        </div>

        <div class="relative inline-flex group mr-4 fire-container">
          <a
            href="/employeeannouncement"
            title="Announcement"
            class="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white transition-all duration-200 bg-blue-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Announcement
          </a>
        </div>
      </div>
    </div>






  )
}