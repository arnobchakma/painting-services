import React from 'react';
import './FooterDetails.css';
import { Link } from 'react-router-dom';

const FooterDetails = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="font-color">{props.menuTitle ? props.menuTitle : " "}</h5>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link className="text-decoration" to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterDetails;