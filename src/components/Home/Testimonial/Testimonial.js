import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    const [loadReview, setLoadReview] = useState([]);

    useEffect(() => {
       fetch('https://cryptic-basin-05682.herokuapp.com/loadReviews')
          .then(res => res.json())
          .then(data => setLoadReview(data));
    }, []);

    return (
        <section className="testimonial">
            <div className="container text-center">
                <div>
                    <h1>TESTIMONIAL</h1>
                </div>
                <div className="mt-5 row">
                    {
                        loadReview.map(testimonial => <TestimonialDetails testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;