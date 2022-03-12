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
                        <h3 className="title-2 fs-md-5 pt-5">Welcome To</h3>
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
                <div className='d-md-flex d-block justify-content-center align-items-center gap-3'>
                    <div>
                        <button className="left-button px-4">
                            <a target="_blank" href="https://drive.google.com/uc?export=download&amp;id=1tCbGlK1deWIneCCLjukzuOLzkpgBdCZq">Download Resume</a>
                        </button>
                    </div>
                    <div>
                        <button className="right-btn px-5 mt-4 mt-md-0"><a href="https://portfolio-cdfa4.firebaseapp.com/">See portfolio</a> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTitle;