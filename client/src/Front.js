import React from 'react'; 
import profile from './images/dog.jpeg'; 

class CardFront extends React.Component {
    render() {
        return (
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src={profile} style={{width: "50%"}} alt="profile"/>
                        </div>

                        <div className='col-xs-6 side-front-content'>
                            <h2>Los Angeles</h2>
                            <h1>Full Stack Developer</h1>
                            <p>Aki is a passionate full-stack developer</p>
                            <p>Skills include React, Javascript, NodeJS, HTML, Bootstrap, CSS, Adobe Illustrator, Adobe Photoshop</p>
                            <p>She enjoys playing taiko (Japanese drums), watching cooking shows on Netflix, and finding good places to eat.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardFront; 