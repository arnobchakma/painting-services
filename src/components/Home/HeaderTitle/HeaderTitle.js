import React from 'react';
import './HeaderTitle.css';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

const HeaderTitle = () => {
    return (
        <div className="container">
            <div className="text-center text-white ">
                <div className="pt-5">
                    <Fade left><h1 className="title pt-5">Painting Services</h1></Fade>
                    <Fade right><h2 className="title-2">World Best Painting Services</h2></Fade>
                    <Typical
                    className="text-white typical"
                        steps={['', 1000, 'We are always trying to best to satisfied our customer', 800]}
                        loop={Infinity}
                    />
                </div>
                <div>
                    <button className="button">VIEW MORE DETAILS</button>
                    <button className="right-btn"><a href="https://arnob-portfolio.web.app/">VIEW PORTFOLIO</a> </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;