import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [allService, setAllService] = useState([]);
console.log(allService)
   useEffect (() => {
      fetch('https://cryptic-basin-05682.herokuapp.com/allServices')
         .then(res => res.json())
         .then(data => setAllService(data));
   }, []);
    return (
        <section className="services">
            <div className="container">
                <div className="text-center my-5">
                    <h1>OUR PAINTING <span className="font-color">SERVICES</span></h1>
                </div>
                <div className="text-center row">
                    {
                        allService.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;