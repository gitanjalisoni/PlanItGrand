import React from 'react'
import Navbar from '../Sections/Navbar'
import Bottom from '../Sections/Bottom'
import Contact from '../Sections/Contact'

function Contactus() {
  return (
    <> 
    <div>
    <Navbar /> 
    <div className="min-h-screen">
    <Contact/>
    </div>
    <Bottom />
    </div>
    </>
  )
}

export default Contactus
