import React from 'react';
import './SocialCard.css';
import Front from './components/Front';
import Back from './components/Back';
import BioFront from './components/BioFront';

class Card extends React.Component {
    render() {
        return (
            <div className='card-box'>
                <div className="card" id="bio">
                    <BioFront />
                </div>
                <div className="card" id="skills">
                </div>
                <div className="card" id="interests">
                </div>

                {/* <div className='card-body'>
                    <Front />
                    <Back />
                </div> */}
                {/* <div className='card-body'>
                    <Front />
                    <Back />
                </div>
                <div className='card-body'>
                    <Front />
                    <Back />
                </div> */}
            </div>
        )
    }
}

export default Card; 