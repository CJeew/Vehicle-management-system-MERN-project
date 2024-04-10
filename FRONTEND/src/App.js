
// import Header from "./Components/Header";
import Header from "./Component/Header";
// import Add_Supplier from "./Components/Add_Supplier";
import Add_Supplier from "./Component/Add_Supplier";
// import Delete from "./Components/Delete";
import Delete from "./Component/Delete";
// import Display from "./Components/Display";
import Display from "./Component/Display";

//Jobs
import Create_Job from "./Component/job";
import ViewJobs from "./Component/ViewJobs";
import JobDetails from "./Component/jobDetails";


//Customer
import Chome from "./Component/Chome";
import Register from "./Component/Register";
import Review from "./Component/Review";
import Profile from "./Component/Profile";




//import Register from "./Component/Register";

// import Login from "./Component/Login"; 
// import Update from "./Components/Update";
// import Test from "./Components/Test";
//import Supplier_home from "./Component/Supplier_home";

import BookingPage from "./Component/BookingPage"; // import Booking Page
import BookingPageCustomerLogin from "./Component/BookingPageCustomerLogin";  // import Booking Customer Login Page
import BookingPageManagerLogin from "./Component/BookingPageManagerLogin";   // import Booking Manager Login Page

import Home from "./Component/home";


//service
import Addpkg from "./Component/Add_package";
import Servicehome from "./Component/servicehome";

//staff
import AddPayroll from "./Component/AddPayroll";
import AddStaff from "./Component/AddStaff";
import AddAttendance from "./Component/AddAttendance";
import AddAnnouncement from "./Component/AddAnnouncement";
import AddLeaveRequest from "./Component/AddLeaveRequest";
import StaffHome from "./Component/StaffHome";
import StaffDetails from "./Component/StaffDetails";
import EditStaff from "./Component/AddLeaveRequest";
import EmployeePayroll from "./Component/EmployeePayroll";
import EditPayroll from "./Component/EditPayroll";
import EditAttendance from "./Component/EditAttendance";
import EmployeeAttendance from "./Component/EmployeeAttendance";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookNowPage from "./Component/BookNowPage";
import EditLeaveRequest from "./Component/EditLeaveRequest";
import LeaveRequest from "./Component/LeaveRequest";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Routes>
          {/* <Route path="" */}
          <Route path="/" element={  <Home/>}/>
          <Route path="/add" element={<Add_Supplier />} />
          <Route path="/display" element={<Display/>}/> 
          <Route path="/delete" element={<Delete/>}/>

          <Route path="/createjob" element={<Create_Job />} />
          <Route path="/viewjobs" element={<ViewJobs />} />
          <Route path="/job/:jobNumber" element={<JobDetails />} />


          {/* <Route path="/update" element={<Update/>}/> */}
          <Route path="/booking" element={<BookingPage/>}/>
          {/* <Route path="/customer" element={<Customerhome/>}/> */}
          <Route path="/addpkg" element={<Addpkg/>}/>
          <Route path="/servicehome" element={<Servicehome/>}/>
          <Route path="/bookCusLog" element={<BookingPageCustomerLogin/>}/>
          <Route path="/bookManageLog" element={<BookingPageManagerLogin/>}/>
          <Route path="/bookNow" element={<BookNowPage/>}/>

          {/* <Route path="/test" element={<Test/>}/> */}


          <Route path="/Chome" element={<Chome/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Review" element={<Review/>}/>
          <Route path="/Profile" element={<Profile/>}/>

          {/* ----------Sanjayan---------- */}
          <Route path="/addpayroll" element={<AddPayroll/>}/>
          <Route path="/addstaff" element={<AddStaff/>}/>
          <Route path="/addleaverequest" element={<AddLeaveRequest/>}/>
          <Route path="/addattendance" element={<AddAttendance/>}/>
          <Route path="/addannouncement" element={<AddAnnouncement/>}/>
          <Route path="/staffhome" element={<StaffHome/>}/>
          <Route path="/staffdetails" element={<StaffDetails/>}/>
          <Route path="/editstaff/:id" element={<EditStaff/>}/>
          <Route path="/employeepayroll" element={<EmployeePayroll/>}/>
          <Route path="/editpayroll/:id" element={<EditPayroll/>}/>
          <Route path="/editattendance/:id" element={<EditAttendance/>}/>
          <Route path="/employeeattendance" element={<EmployeeAttendance/>}/>
          <Route path="/editleaverequest/:id" element={<EditLeaveRequest/>}/>
          <Route path="/leaverequest" element={<LeaveRequest/>}/>
          
          
         
        </Routes>
        

      </div>
    </Router>
  );
}

export default App;

