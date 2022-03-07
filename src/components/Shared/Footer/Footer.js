import React from 'react';
import './Footer.css';
import Fade from 'react-reveal/Fade';
import logo from '../../../image/logo/Coffee-logo-design-on-transparent-background-PNG.png';

const Footer = () => {

    return (
        <footer className="footer-background">
            <div className="container-xl p-3 mt-5">

                {/* Footer wrapper */}
                <div className='row'>

                    {/* first cols */}
                    <div className='col-lg-3 col-md-6 text-center'>
                        <div >
                            <img style={{ width: "100px", height: '100px' }} className="img-fluid mb-5" src={logo} alt="" />
                        </div>

                        <div className=''>
                            <div className='flex'>
                                {/* icon */}
                                <div className='normal-paragraph-color'>
                                    <p>Road 3, Block J, Baridhara </p>
                                    <p> Dhaka 1212</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>arnobchakma05@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    0-159-114-7295
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second cols */}
                    <div className='col-lg-3 col-md-6 text-center'>
                        <div className='mt-5 mb-4 normal-text-color'>
                            <h4>Services</h4>
                        </div>
                        <div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Paragon Painting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Diesel Painting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Allied Painting</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third cols */}
                    <div className='col-lg-3 col-md-6 text-center'>
                        <div className='mt-5 mb-4 normal-text-color'>
                            <h4>Supporting Hours</h4>
                        </div>
                        <div className='normal-paragraph-color'>
                            <p> 24 hours, Daily</p>
                        </div>
                    </div>

                    {/* Forth cols */}
                    <div className='col-lg-3 col-md-6 text-center'>
                        <div className='mt-5 mb-4 normal-text-color'>
                            <h4>Services</h4>
                        </div>
                        <div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Paragon Painting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Diesel Painting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {/* icon */}
                                </div>
                                <div className='normal-paragraph-color'>
                                    <p>Allied Painting</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* bottom part */}
                    <Fade left duration={2000}>
                        <div className="copyRight text-center normal-paragraph-color py-4">
                            <p>Copyright {(new Date()).getFullYear()} | Privacy Policy | All Rights Reserved</p>
                        </div>
                    </Fade>
                </div>

            </div>
        </footer>
    );
};

export default Footer;