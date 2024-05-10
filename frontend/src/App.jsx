import React from 'react';
import Home from "./home/Home";
import {Route, Routes} from "react-router-dom"
import Events from './Events/Events';
import Signup from './Sections/Signup';
import Contactus from './Contact/Contactus';
import Aboutus from './About/Aboutus';

function App() {
  return (<>
    <div className="dark:bg-black dark:text-white">
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/event" element={<Events/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/contact" element={<Contactus/>}/>
      <Route path = "/about" element={<Aboutus/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App
