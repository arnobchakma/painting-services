import React from 'react';
import './PainterTeam.css';

const PainterTeam = ({ painter }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card single-part">
                <div className="img-wrapper">
                    <img className="img-size" src={painter.painterImg} alt="" />
                </div>
                <div className="text-center">
                    <h5 className="font-color mt-3">{painter.name}</h5>
                    <p className='text-secondary'>{painter.position}</p>
                </div>
            </div>
        </div>
    );
};

export default PainterTeam;