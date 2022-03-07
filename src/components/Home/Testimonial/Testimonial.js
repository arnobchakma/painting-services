import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import './Testimonial.css';

const Testimonial = () => {
    const [loadReview, setLoadReview] = useState([]);

    useEffect(() => {
       fetch('https://cryptic-basin-05682.herokuapp.com/loadReviews')
          .then(res => res.json())
          .then(data => setLoadReview(data));
    }, []);

    return (
        <section className="testimonial">
            <div className="container text-center py-5 pt-5">
                <div className='normal-text-color'>
                    <h1>TESTIMONIAL</h1>
                </div>
                <div className="mt-4 row">
                    {
                        loadReview.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;