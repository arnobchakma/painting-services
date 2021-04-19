import React from 'react';
import './HeaderTitle.css';

const HeaderTitle = () => {
    return (
        <div className="text-center text-white">
            <h1 className="title">Painting Services</h1>
            <h2 className="title-2">World best painting services</h2>
            <h3 className="title-3">We are always trying to best to satisfied our customer</h3>
            <div>
                <button className="button">VIEW MORE DETAILS</button>
                <button className="right-btn">VIEW PORTFOLIO</button>
            </div>
        </div>
    );
};

export default HeaderTitle;