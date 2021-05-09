import React from 'react';
import './Footer.css';
import FooterDetails from '../FooterDetails/FooterDetails';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    const info = [
        {name: "About Us" , link: "/About-us"},
        {name: "Contact Us" , link: "/Contact-us"},
        {name: "Terms of Use" , link: "/Terms-of-use"},
        {name: "Privacy Policy" , link: "/Privacy-policy"},
        {name: "Sitemap" , link: "/Sitemap"},
    ]
    const customer = [
        {name: "Login to Account" , link: "/Login"},
        {name: "Create an Account" , link: "/Create"},
        {name: "Your Cart" , link: "/Cart"},
        {name: "Shipping & Packaging" , link: "/Shipping"},
        {name: "Payment Options" , link: "/Payment"},
       
    ]
    const specialServices = [
        {name: "Fox Pro Painting" , link: "/Pro-painting"},
        {name: "ProStyle Painting" , link: "/ProStyle-painting"},
        {name: "JC Painting" , link: "/JC-painting"},
        {name: "Olympic Painting Pros" , link: "/Olympic-painting"},
        {name: "Fillo Painting" , link: "/Fillo-painting"},
        {name: "CertaPro Painters" , link: "/CertaPro-painters"},
        {name: "Five Star Painting" , link: "/Five-star-painting"}
    ]
    const ourServices = [
        {name: "Phinney Ridge Painting" , link: "/Phinney-painting"},
        {name: "Paragon Painting" , link: "/Paragon"},
        {name: "Miami Painting Services" , link: "/Miami-painting"},
        {name: "Diesel Painting" , link: "/Diesel-painting"},
        {name: "Allied Painters" , link: "/Allied-painters"},
        {name: "EmeraldPro Painting" , link: "/EmeraldPro-painting"},
        {name: "The Pro Painters" , link: "/The-pro-painters"}
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5 footer-bg p-3 mt-5">
                <div className="row pb-5">
                    <FooterDetails key={1} menuTitle="Info" menuItems={info}/>
                    <FooterDetails key={2} menuTitle="Our Services" menuItems={ourServices}/>
                    <FooterDetails key={3} menuTitle="Special Services" menuItems={specialServices}/>
                    <FooterDetails key={4} menuTitle="Customer" menuItems={customer}> 
                        <div className="mt-5">
                            <button className="button-style">Call now</button>
                        </div>
                    </FooterDetails>
                </div>
                <Fade left>
                    <div className="copyRight text-center text-white">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </Fade>
            </div>
        </footer>
    );
};

export default Footer;