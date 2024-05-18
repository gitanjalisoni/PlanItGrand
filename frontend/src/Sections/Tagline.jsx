import React from 'react';
import tagline from "../../public/Tagline.jpg";


function Tagline() {
  return (<>
  <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
  <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-10">
    <h1 className="text-4xl font-bold">Hey there! What kind of epic event are you dreaming of?<br /> <span className="text-orange-500">Let's chat!</span></h1>
  <p className="text-xl">From birthdays to weddings, we plan events that wow. We take care of everything, so you can enjoy the party! </p>
  <label className="input input-bordered flex items-center gap-2 dark:bg-black dark:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn btn-active btn-neutral bg-black">Submit</button>
    </div>
    
  </div>
  <div className=" order-1 w-full md:w-1/2">
    <img src={tagline} className="w-90 h-70 rounded-md mt-12 p-10 shadow- "/>
  </div>
  </div>
  </>
  )
}

export default Tagline;
