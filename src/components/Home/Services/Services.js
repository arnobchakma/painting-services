import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [allService, setAllService] = useState([]);
    
    useEffect(() => {
        fetch('https://cryptic-basin-05682.herokuapp.com/allServices')
            .then(res => res.json())
            .then(data => setAllService(data));
    }, []);

    return (
        <>
            <div className="container-xl py-5 pt-5">
                <div className="text-center pb-4 normal-text-color">
                    <h1>PAINTING <span className="font-color">SERVICES</span></h1>
                </div>
                <div className="text-center row">
                    {
                        allService.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;