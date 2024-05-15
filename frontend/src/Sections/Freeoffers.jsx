import React from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";


function Freeoffers() {
    const filterData = list.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className="max-w-screen-2xl md:min-w-screen container mx-auto md:px-20 px-4">
        <div>
        <h1 className="dont-semibold text-xl pb-5 text-orange-500">Free expert advices</h1>
        <p>Stuck on your event planning? Get instant advice from experienced event managers! Join our FREE chat and ask all your questions. Our experts are here to help you plan a flawless event.</p>
        </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freeoffers;
 