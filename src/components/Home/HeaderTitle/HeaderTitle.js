import React from 'react';
import './HeaderTitle.css';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

const HeaderTitle = () => {
    return (
        <div className="container">
            <div className="text-center pt-3">
                <div className="pt-5">
                    <Fade right>
                        <h3 className="title-2 pt-5">Welcome To</h3>
                    </Fade>

                    <h1 className="title py-4">
                        <Typical
                            className="typical"
                            steps={['', 1000, 'PAINTING SERVICE', 200]}
                            loop={Infinity}
                        />
                    </h1>
                    <h5 className="mb-5 normal-paragraph-color">We are always trying to best to satisfied our customer</h5>
                </div>

                {/* button part */}
                <div>
                    <button className="button ml-4 download-resume">
                        <a target="_blank" href="https://drive.google.com/uc?export=download&amp;id=1tCbGlK1deWIneCCLjukzuOLzkpgBdCZq">Download Resume</a>
                    </button>

                    <button className="right-btn px-5"><a href="https://arnob-portfolio.web.app/">See portfolio</a> </button>
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;