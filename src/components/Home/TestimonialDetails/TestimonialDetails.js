import React from 'react';
import './TestimonialDetails.css';
import Fade from 'react-reveal/Fade';

const TestimonialDetails = ({testimonial}) => {
    return (
        <div className="col-md-4">
            <div className=" d-flex text-center p-3">
                <Fade bottom>
                    <div className="">
                        <img style={{width: "70%"}} src={testimonial.image} alt=""/>
                    </div>
                
                    <div className="text-center lh-1">
                        <h5 className="font-color">{testimonial.author}</h5>
                        <p className="text-secondary">{testimonial.position}</p>
                    </div>
                </Fade>
            </div>
            <Fade bottom>
                <div className="text-left p-2">
                    <p className="text-secondary">{testimonial.description}</p>
                    <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                    <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                    <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                    <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                    <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt=""/>
                </div>
            </Fade>
            
        </div>
    );
};

export default TestimonialDetails;