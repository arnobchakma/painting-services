import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonial.css';
import Slider from "react-slick";

const Testimonial = () => {
   const [loadReview, setLoadReview] = useState([]);

   useEffect(() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/loadReviews')
         .then(res => res.json())
         .then(data => setLoadReview(data));
   }, []);

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
   };

   return (
      <section className="testimonial">
         <div className="container text-center py-5 pt-5">
            <div className='normal-text-color'>
               <h1>TESTIMONIAL</h1>
            </div>
            <div className="mt-4 row">
               <Slider {...settings}>
                  {
                     loadReview.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial}></TestimonialDetails>)

                  }
               </Slider>
            </div>
         </div>
      </section>
   );
};

export default Testimonial;