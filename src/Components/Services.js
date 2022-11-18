import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../assets/picture-3.jpg"
import img2 from "../assets/picture-4.jpg"

const Services = () => {
    return (
        <div className='services'>
      
      <Carousel infiniteLoop >
        <div>
            <img  src={img1} alt="item1" />
            <p className='legend'>MEARN stack</p>
        </div>

        <div>
            <img  src={img2} alt="item2" />
            <p className='legend'>24/7 Support</p>
        </div>
        </Carousel>      
        </div>
    );
};

export default Services;