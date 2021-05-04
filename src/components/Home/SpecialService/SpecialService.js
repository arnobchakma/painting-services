import React from 'react';
import './SpecialService.css';
import Fade from 'react-reveal/Fade';

const SpecialService = () => {

    return (
        <section className="featured-services pb-md-5 mt-5" >
            <div className="container">
            <h1 className="my-4 mt-5">OUR SPECIAL <span className="font-color">SERVICES</span></h1>
                <div className="row align-items-center background">
                    <Fade left>
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div className="ml-4">
                                    <img className="image-sizing icon" src={'https://i.ibb.co/xh9qGfn/home.png'} alt=""/>    
                                </div>
                                <div>
                                    <h5 className="font-color">Home Maintenance</h5>
                                    <p className="text-secondary">We have experience in <span className="font-color cursor">home maintenance</span> any surface from new constructions to cabinets in commercial properties. If you are doing your</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <img className="image-sizing icon" src={'https://i.ibb.co/HCVQKfb/prostyle.png'} alt=""/>    
                                </div>
                                <div>
                                    <h5 className="font-color">ProStyle Painting</h5>
                                    <p className="text-secondary">The <span className="font-color cursor">ProStyle Painting</span> homepage is designed as a one-stop source of information. Upon loading the page, you get access this job very easily.</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-md-6">
                            <img style={{width: "700px"}} className="img-fluid" src={'https://i.ibb.co/sCLkKdB/special-services.jpg'} alt=""/>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default SpecialService;