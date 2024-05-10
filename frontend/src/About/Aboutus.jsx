import React from 'react'
import Navbar from '../Sections/Navbar'
import Bottom from '../Sections/Bottom'
import About from '../Sections/About'

function Aboutus() {
  return (
    <> 
    <div>
    <Navbar /> 
    <div className="min-h-screen">
    <About />
    </div>
    <Bottom />
    </div>
    </>
  )
}

export default Aboutus
