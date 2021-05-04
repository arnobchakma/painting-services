import React from 'react';
import './PainterTeam.css';
import Fade from 'react-reveal/Fade';

const PainterTeam = ({painter}) => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card single-part">
                <Fade right>
                    <div className="img-wrapper">
                        <img className="img-size" src={painter.painterImg} alt=""/>
                    </div>
                    <div className="text-center">
                        <h5 className="font-color">{painter.name}</h5>
                        <h6>{painter.position}</h6>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default PainterTeam;