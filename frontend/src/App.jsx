import React from 'react';
import Home from "./home/Home";
import {Navigate, Route, Routes} from "react-router-dom"
import Events from './Events/Events';
import Signup from './Sections/Signup';
import Contactus from './Contact/Contactus';
import Aboutus from './About/Aboutus';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser]=useAuth()
  console.log(authUser);
  return (<>
    <div className="dark:bg-black dark:text-white">
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/event" element={authUser?<Events/>:<Navigate to="/signup"></Navigate>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/contact" element={<Contactus/>}/>
      <Route path = "/about" element={<Aboutus/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  );
}

export default App
