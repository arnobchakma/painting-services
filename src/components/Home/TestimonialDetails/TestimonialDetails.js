import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className=" d-flex text-center p-3">
                <div>
                    <img style={{ width: "70%" }} src={testimonial.image} alt="" />
                </div>

                <div className="text-center">
                    <h5 className="font-color">{testimonial.author}</h5>
                    <p className="normal-paragraph-color">{testimonial.position}</p>
                </div>
            </div>

            <div className="text-left p-3">
                <p className="normal-paragraph-color">{testimonial.description}</p>
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
                <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
            </div>
        </div>
    );
};

export default TestimonialDetails;