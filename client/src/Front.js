import React from 'react'; 
import profile from './images/profile.jpeg'; 

class CardFront extends React.Component {
    render() {
        return (
            <div className='card-side side-front'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-6 col-md col-lg'>
                            <img src={profile} alt='profile'/>
                        </div>

                        <div className='col-xs-6 col-md col-lg side-front-content'>
                            {/* <h2>Los Angeles</h2> */}
                            <h1>Aki Imai</h1>
                            {/* <h2>Full Stack Developer</h2> */}
                            <p>A full-stack developer searching for the next opportunity to grow, learn, and contribute as part of a dedicated team that is motivated to help make the world a better place. </p>
                            <p>Her skills include React, Javascript, NodeJS, HTML, Bootstrap, CSS, Adobe Illustrator, Adobe Photoshop.</p>
                            <p>She enjoys playing Japanese taiko drums, watching cooking shows on Netflix, finding good places to eat, and playing Overcooked.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFront; 