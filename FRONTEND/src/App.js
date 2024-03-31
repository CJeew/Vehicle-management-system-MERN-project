
// import Header from "./Components/Header";
import Header from "./Component/Header";
// import Add_Supplier from "./Components/Add_Supplier";
import Add_Supplier from "./Component/Add_Supplier";
// import Delete from "./Components/Delete";
import Delete from "./Component/Delete";
// import Display from "./Components/Display";
import Display from "./Component/Display";
//import Update from "./Component/Update";
import Create_Job from "./Component/job";

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
import Home from "./Component/home";


import Addpkg from "./Component/Add_package";


import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

//Staff Management
import AddPayroll from "./StaffManagement/AddPayroll";
import AddStaff from "./StaffManagement/AddStaff";
import AddLeaveRequest from "./StaffManagement/AddLeaveRequest";
import AddAttendance from "./StaffManagement/AddAttendance";
import AddAnnouncement from "./StaffManagement/AddAnnouncement";
import StaffHome from "./StaffManagement/StaffHome";
import StaffDetails from "./StaffManagement/StaffDetails";
import EditStaff from "./StaffManagement/EditStaff";
import EmployeePayroll from "./StaffManagement/EmployeePayroll";
import EditPayroll from "./StaffManagement/EditPayroll";
import EditAttendance from "./StaffManagement/EditAttendance";
import EmployeeAttendance from "./StaffManagement/EmployeeAttendance";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      
        <Routes>
          {/* <Route path="" */}
          <Route path="/" element={  <Home/>}/>
          <Route path="/add" element={<Add_Supplier />} />
          <Route path="/createjob" element={<Create_Job />} />
          <Route path="/display" element={<Display/>}/> 
          <Route path="/delete" element={<Delete/>}/>
          {/* <Route path="/update" element={<Update/>}/> */}
          <Route path="/booking" element={<BookingPage/>}/>
          {/* <Route path="/customer" element={<Customerhome/>}/> */}
          <Route path="/addpkg" element={<Addpkg/>}/>
          <Route path="/bookCusLog" element={<BookingPageCustomerLogin/>}/>

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
          
         
        </Routes>
        

      </div>
    </Router>
  );
}

export default App;

