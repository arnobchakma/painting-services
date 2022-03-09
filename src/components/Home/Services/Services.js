import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Slider from "react-slick";

const Services = () => {
   const [allService, setAllService] = useState([]);

   useEffect(() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/allServices')
         .then(res => res.json())
         .then(data => setAllService(data));
   }, []);

   // Slider Handling
   const service = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
   };

   return (
      <>
         <div className="container-xl py-5 pt-5">
            <div className="text-center pb-4 normal-text-color">
               <h1>PAINTING <span className="font-color">SERVICES</span></h1>
            </div>
            <div className="text-center row">
               <Slider {...service}>
                  {
                     allService.map(service => <ServiceDetails service={service}></ServiceDetails>)
                  }
               </Slider>
            </div>
         </div>
      </>
   );
};

export default Services;