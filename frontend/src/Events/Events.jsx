import React from 'react'
import Navbar from '../Sections/Navbar'
import Event from '../Sections/Event'
import Bottom from '../Sections/Bottom'

function Events() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
      <Event/>
      </div>
      <Bottom/>
    </>
  )
}

export default Events;
