import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = ({ testimonial }) => {
   return (
      <div>
         <div className=" d-flex text-center p-3">
            <div>
               <img className='image-sizing' src={testimonial.image} alt="" />
            </div>

            <div>
               <h5 className="font-color">{testimonial.author}</h5>
               <p className="normal-paragraph-color">{testimonial.position}</p>
            </div>
         </div>

         <div className="p-3">
            <div>
               <p className="normal-paragraph-color">{testimonial.description}</p>
            </div>
            <div className='d-flex justify-content-center'>
               <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
               <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
               <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
               <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
               <img className="image-size" src={'https://i.ibb.co/JpnnGvw/star.png'} alt="" />
            </div>
         </div>
      </div>
   );
};

export default TestimonialDetails;