import React from 'react';
import {Link} from "react-router-dom"
function About() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-20 md:mt-16 p-4 items-center justify-center text-center">
        <h1 className=" text-2xl md:text-4xl "><span className='text-orange-500'>Plan It Grand:</span>Crafting Grand Events for Every Occasion</h1>
        <p className="mt-12 ">At Plan It Grand, we don't just plan events, we orchestrate experiences. We're a team of passionate and detail-oriented event management students dedicated to turning your dream event into a reality that surpasses expectations.
        <br />
        Fueled by creativity and fueled by collaboration, we believe that every celebration, from milestone graduations to unforgettable festivals, deserves the grand treatment.  Our comprehensive services ensure a smooth and stress-free planning process, allowing you to focus on the joy of the occasion.</p>
        <h2 className="text-3xl text-center mt-9 text-orange-500">Why Choose Plan It Grand?</h2>
        <p className="mt-2 text-left"><span className='text-orange-500'>Unleash Your Vision:</span> We listen closely to your ideas and transform them into a cohesive and spectacular event.
        <br />
        <span className='text-orange-500'>Stress-Free Planning:</span> Leave the logistics to us. We handle everything from vendor coordination to budget management, keeping you informed every step of the way.
        <br />
        <span className='text-orange-500'>Expertise You Can Trust:</span> Our team is constantly learning and innovating, ensuring your event leverages the latest trends and best practices.
        <br />
        <span className='text-orange-500'>Network of Trusted Vendors:</span> We have established relationships with top-tier vendors, securing you the best services at competitive rates.
        <br />
        <span className='text-orange-500'>Unforgettable Experience:</span> Our meticulous planning and unwavering dedication ensure your event is not just grand, but truly unforgettable for you and your guests.</p>

        <h2 className="text-3xl text-center mt-9 text-orange-500">Ready to plan your grand event?</h2>
        <p>Contact us today for a free consultation and let's discuss how we can turn your vision into a reality!</p>

        <Link to= "/">
        <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 duration-300">Home</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default About
