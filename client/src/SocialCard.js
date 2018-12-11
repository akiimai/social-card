import React from 'react'; 
import './SocialCard.css'; 
import Front from './Front'; 
import Back from './Back'; 

class Card extends React.Component {
    render() {
        return (
            <div className='card-container'>
                <div className='card-body'>
                    <Front />
                    <Back />
                </div>
            </div>
        )
    }
}

export default Card; 