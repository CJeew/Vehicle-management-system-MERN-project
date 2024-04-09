
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
import Customerlogin from "./Component/Customerlogin";
import Cmanager from "./Component/Cmanager";
import CustomerList from "./Component/CustomerList";
import CustomerReview from "./Component/CustomerReview";




//import Register from "./Component/Register";

// import Login from "./Component/Login"; 
// import Update from "./Components/Update";
// import Test from "./Components/Test";
//import Supplier_home from "./Component/Supplier_home";

//Booking------------------------------------------------------------------------------------------
import BookingPage from "./Component/BookingPage"; // import Booking Page
import BookingPageCustomerLogin from "./Component/BookingPageCustomerLogin";  // import Booking Customer Login Page
import BookingPageManagerLogin from "./Component/BookingPageManagerLogin";   // import Booking Manager Login Page
import AddBooking from "./Component/AddBooking";
import BookingList from "./Component/BookingList";
import BookRead from "./Component/BookRead";


import Home from "./Component/home";


//service
//import add package
import Addpkg from "./Component/Add_package";
//import servicehome
import Servicehome from "./Component/servicehome";
//import pkghome
import PkageHome from "./Component/Package_Homepage";
//import view package
import Viewpkg from "./Component/View_package";
import Viewpkg2 from "./Component/View_package2";
//import Edit package
import Pkgedithome from "./Component/Package_edithome";

import Editpkg from "./Component/Edit_package";
//import Delete package
import Deletepkg from "./Component/Delete_package"; 

//staff
import AddPayroll from "./Component/AddPayroll";
import AddStaff from "./Component/AddStaff";
import AddAttendance from "./Component/AddAttendance";
import AddAnnouncement from "./Component/AddAnnouncement";
import AddLeaveRequest from "./Component/AddLeaveRequest";
import StaffHome from "./Component/StaffHome";
import StaffDetails from "./Component/StaffDetails";
import EditStaff from "./Component/EditStaff";
import EmployeePayroll from "./Component/EmployeePayroll";
import EditPayroll from "./Component/EditPayroll";
import EditAttendance from "./Component/EditAttendance";
import EmployeeAttendance from "./Component/EmployeeAttendance";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import EditLeaveRequest from "./Component/EditLeaveRequest";
import LeaveRequest from "./Component/LeaveRequest";
import EditAnnouncement from "./Component/EditAnnouncement";
import EmployeeAnnouncement from "./Component/EmployeeAnnouncement";


  







// inventory
import Inventory_Menu from "./Component/Inventory/Inventory_Menu";
import ManageItems from "./Component/Inventory/ManageItems";
import Additems from "./Component/Inventory/Additems";  
import Updateitem from "./Component/Inventory/Updateitem";
import IssuedItems from "./Component/Inventory/Issueditems";
import IssuedItemsAdditems from "./Component/Inventory/issuedAdditems";

import IssuedEditItems from "./Component/Inventory/issuedUpdateitems";
import ManageOrders from "./Component/Inventory/manageorders";

import Addorderitems from "./Component/Inventory/addorders";
import OrderEditItems from "./Component/Inventory/manageorderupdate";













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

                  {/* Dulanka ---service and record */}
          <Route path="/addpkg" element={<Addpkg/>}/>
          <Route path="/servicehome" element={<Servicehome/>}/>
          <Route path="/PkageHome" element={<PkageHome/>}/>
          <Route path="/viewpkg2" element={<Viewpkg2/>}/>
          <Route path="/viewpkg" element={<Viewpkg/>}/>
          <Route path="/Pkgedithome" element={<Pkgedithome/>}/>
          <Route path="/editpkg/:id" element={<Editpkg/>}/>
         

          {/*---------Tavini-------------Booking------------------------------*/}
          <Route path="/bookCusLog" element={<BookingPageCustomerLogin/>}/>
          <Route path="/bookManageLog" element={<BookingPageManagerLogin/>}/>
          <Route path="/addBooking" element={<AddBooking/>}/>
          <Route path="/bookingList" element={<BookingList/>}/>
          <Route path="/bookRead" element={<BookRead/>}/>


          {/* <Route path="/test" element={<Test/>}/> */}


          <Route path="/Chome" element={<Chome/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Review" element={<Review/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Customerlogin" element={<Customerlogin/>}/>
          <Route path="/Cmanager" element={<Cmanager/>}/>
          <Route path="/CustomerList" element={<CustomerList/>}/>
          <Route path="/CustomerReview" element={<CustomerReview/>}/>
          



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



         

          
          <Route path="/editannouncement/:id" element={<EditAnnouncement/>}/>
          <Route path="/employeeannouncement" element={<EmployeeAnnouncement/>}/>
          
          



         

          <Route path="/inventory" element={<Inventory_Menu/>}/>
          <Route path="/manageitems" element={<ManageItems/>}/>
          <Route path="/additems" element={<Additems/>}/>
          <Route path="/updateitems/:id" element={<Updateitem/>}/>
          <Route path="/issueditems" element={<IssuedItems/>}/>
          <Route path="/issuedAdditems" element={<IssuedItemsAdditems/>}/>
          <Route path="/issuedupdateitems/:id" element={<IssuedEditItems/>}/>
          <Route path="/managedorders/" element={<ManageOrders/>}/>
          <Route path="/Addorder/" element={<Addorderitems/>}/>
          <Route path="/manageorderupdate/:id" element={<OrderEditItems/>}/>


                    
         
        </Routes>
        

      </div>
    </Router>
  );
}

export default App;

