import React from 'react';
import './HeaderTitle.css';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

const HeaderTitle = () => {
    return (
        <div className="container">
            <div className="text-center text-white ">
                <div className="pt-5">
                    <Fade right><h3 className="title-2 pt-5">Welcome To</h3></Fade>
                    
                    <h1 className="title">
                        <Typical
                        className="text-white typical"
                            steps={['', 1000, 'PAINTING SERVICE', 900]}
                            loop={Infinity}
                        />
                    </h1>
                    <h5 className="mb-4">We are always trying to best to satisfied our customer</h5>
                </div>
                
                <div>
                    <button className="button ml-4 download-resume">
                            <a target="_blank" href="https://drive.google.com/uc?export=download&amp;id=1S6xBgYFqUmpZB6FLZfgvGb4e4eyBSgje">Download My Resume</a>
                    </button>
                    
                    <button className="right-btn"><a href="https://arnob-portfolio.web.app/">See my portfolio</a> </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;