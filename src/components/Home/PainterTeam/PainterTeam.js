import React from 'react';
import './PainterTeam.css';

const PainterTeam = ({painter}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card single-part">
                <div className="img-wrapper">
                    <img className="img-size" src={painter.painterImg} alt=""/>
                </div>
                <div className="text-center">
                    <h5 className="font-color">{painter.name}</h5>
                    <h6>{painter.position}</h6>
                </div>
            </div>
        </div>
    );
};

export default PainterTeam;