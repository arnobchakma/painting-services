import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className=" d-flex text-center p-3">
                <div className="">
                    <img style={{width: "70%"}} src={testimonial.image} alt=""/>
                </div>
                <div className="text-center lh-1">
                    <h5 className="font-color">{testimonial.author}</h5>
                    <p className="text-secondary">{testimonial.position}</p>
                </div>
            </div>
            <div className="text-left p-2">
                <p className="text-secondary">{testimonial.description}</p>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
            </div>
            
        </div>
    );
};

export default TestimonialDetails;