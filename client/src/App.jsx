import React from 'react'
import {Routes, Route} from 'react-router-dom'
// import Navbar from '../component/Landing/component/Navbar'
import About from './pages/About'
import LandingPage from './pages/LandingPage'
import Service from "./pages/Service";
import Contact from './pages/Contact'
// import Login1 from '../component/Login/LoginPatient';
import Signup from './component/Signup/Signup';
// import DriverLogin from './../component/DriverLogin/DriverLogin';
import Dashboard from './pages/Dashboard';
import Loginwith from './pages/Loginwith';
import LoginPatient from './component/Login/LoginPatient'
import DriverLogin from './component/DriverLogin/DriverLogin';
import FullLayout from './component/dashboard/layouts/FullLayout';
import Ambulance from './pages/Ambulance';
import Notification from './pages/Notification';
import NearestHospital from './pages/NearestHospital';
import DriverSignup from './component/DriverSignup/DriverSignup';
import FullLayouts from './component/driverdashboard/layouts/FullLayouts';
import dashboarddrive from "./pages/dashboarddrive";
import Accept from './pages/Accept';
export default function App() {
  return (
   
    <Routes>
    <Route path="/" exact Component={LandingPage} />
    <Route path="/contact" exact Component={Contact} />
    <Route path="/services" exact Component={Service} />
    <Route path="/about" exact Component={About} />
    <Route path="/loginpatient" Component={LoginPatient} />
    <Route path="/driverlogin" Component={DriverLogin} />
    <Route path="/loginwith" Component={Loginwith} />
    <Route path="/signup" Component={Signup} />
    <Route path="/driversignup" Component={DriverSignup} />
    <Route path="/dashboarddrive" Component={FullLayouts} >
      <Route path="/dashboarddrive" exact Component={dashboarddrive}/>
      <Route path="/dashboarddrive/accept" exact Component={Accept}/>
    </Route>
    <Route path="/dashboard"  Component={FullLayout}>
      <Route path="/dashboard" exact  Component={Dashboard} />
      <Route path="/dashboard/ambulance" exact  Component={Ambulance} />
      <Route path="/dashboard/nearesthospital" exact Component={NearestHospital} />
      <Route path="/dashboard/notification" exact Component={Notification}/>
    </Route>
  </Routes>
   
  )
}
