import React from 'react';
import {
  Routes,
  Route,
 
} from 'react-router-dom';

import './css/style.css';



// Import pages
import Dashboard from './pages/Dashboard';
import Packege from './pages/Packege';
import Home from './pages/Home';
import Login from './pages/Login';
import ShortPackege from './pages/ShortPackege';
import BigPackege from './pages/BigPackege';
import UpazilaMap from './pages/UpazilaMap';
import ZillaMap from './pages/ZillaMap';
import BS from './pages/BS';
import { ToastContainer } from "react-toastify";
import OtpVerification from './pages/OtpVerification';
function App() {



  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>

        <Route element={<Dashboard />}>
        <Route  path="/"  element={<Home/>}/>
        <Route  path="/packege" element={<Packege/>} />
        <Route  path="/login" element={<Login/>} />
        <Route path="/shortpackege" element={<ShortPackege/>}/>
        <Route path="/bigpackege" element={<BigPackege/>}/>
        <Route path="/upazila" element={<UpazilaMap/>}/>
        <Route path="/zila" element={<ZillaMap/>}/>
         <Route path="/bs" element={<BS/>}/>

         <Route path="/otpverify" element={<OtpVerification/>}/>
        </Route>
       

        
      </Routes>
    </>
  );
}

export default App;
