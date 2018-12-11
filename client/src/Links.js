import React from 'react'; 

class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['linkedin', 'facebook', 'github']
        const linkList = profileLinks.map((link, index) => 
            <li key={index}>
                <a href='http://www.wikipedia.com'>
                    <i className={'fa-fa' + link} ></i>
                </a>
            </li>
        )

        return (
            <div className='card-social-links'>
                <ul className='social-links'>
                    {linkList}
                </ul>
            </div>
        )
    }
}

export default CardProfileLinks; 