import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css';
import Fade from 'react-reveal/Fade';

const ServiceDetails = ({ service }) => {
   const history = useHistory();

   // Handle collected order
   const handleOrder = e => {
      history.push('/placeOrder', { params: e });
   };

   return (
      <Fade bottom>
         <div className="py-3">
            <img className="image-sizing" src={service.image} alt="" />
            <h5 className="my-3 font-color">{service.title}</h5>
            <p className="normal-paragraph-color">{service.details}</p>
            <button onClick={() => handleOrder(service)} className="button-style">Add to Cart</button>
         </div>
      </Fade>  
   );
};

export default ServiceDetails;