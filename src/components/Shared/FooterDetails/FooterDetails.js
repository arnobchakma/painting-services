import React from 'react';
import './FooterDetails.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const FooterDetails = (props) => {
    return (
        <Fade bottom>
            <div className="col-md-3">
                <h5 className="font-color">{props.menuTitle ? props.menuTitle : " "}</h5>
                <ul className="list-unstyled mt-4">
                    {
                        props.menuItems.map((item, index) => <li key={index}><Link className="text-decoration" to={item.link} >{item.name}</Link></li>)
                    }
                </ul>
                {props.children && props.children}
            </div>
        </Fade>
    );
};

export default FooterDetails;