import React from 'react';

function Cards({ item }) {
  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-xl image-full mt-3 mb-6 my-3 hover:scale-105 transition-transform duration-300 dark:bg-black dark:text-white">
  <figure><img src={item.image} style={{ width: '100%', height: '300px', objectFit: 'cover' }} /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}
    <div className="badge text-orange-500">{item.price}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-transparent text-orange-500">Connect</button>
    </div>
  </div>
</div>
  );
}

export default Cards;

