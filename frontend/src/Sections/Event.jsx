import React from 'react';
import Cards from "./Cards"
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Event() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-24 md:mt-16 items-center justify-center text-center">
        <h1 className=" text-2xl md:text-4xl"><span className='text-orange-500'>Plan It Grand:</span> Find Your Event Spark Here!</h1>
        <p className="mt-12 ">Planning an unforgettable event is easier than ever! Here you'll find a wide range of events, from grand festivals and corporate gatherings to intimate celebrations. Our expert event managers are here to help you navigate the planning process and create a truly special occasion.</p>
        <Link to= "/">
        <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">Back</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
        {list.map((item)=>(
          <Cards Key ={item.id} item={item}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Event
