import React from 'react';
import { useHistory } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = ({service}) => {
    const history = useHistory();
   const handleOrder = e => {
      history.push('/placeOrder', { params: e });
   };

    return (
        <div className="col-md-4 p-2">
            <img className="image-sizing" src={service.image} alt=""/>
            <h5 className="my-3 font-color">{service.title}</h5>
            <p className="text-secondary">{service.details}</p>
            <button onClick={() => handleOrder(service)} className="button-style">Add to Cart</button>
        </div>
    );
};

export default ServiceDetails;