import React from 'react';
import './SocialCard.css';
import BioFront from './components/BioFront';
import BioBack from './components/BioBack';
import SkillsFront from './components/SkillsFront';
import SkillsBack from './components/SkillsBack';
import HobbyFront from './components/HobbyFront';
import HobbyBack from './components/HobbyBack';

class Card extends React.Component {
    render() {
        return (
            <div className='card-box'>
                <div className="card" id="bio">
                    <BioFront />
                    <BioBack />
                </div>
                <div className="card" id="skills">
                    <SkillsFront />
                    <SkillsBack />
                </div>
                <div className="card" id="interests">
                    <HobbyFront />
                    <HobbyBack />
                </div>
            </div>
        )
    }
}

export default Card; 