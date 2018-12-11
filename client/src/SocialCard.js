import React from 'react'; 
import './SocialCard.css'; 
import Front from './Front'; 
import Back from './Back'; 

class Card extends React.Component {
    render() {
        return (
            <div>
                <Front />
                <Back />
            </div>
        )
    }
}

export default Card; 