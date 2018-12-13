import React from 'react'; 

class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = [{ name:'linkedin', url:'https://linkedin.com/in/aki-imai/'}, { name: 'github', url:'https://github.com/akiimai' }, { name:'facebook', url: 'https://www.facebook.com/aki.imai'}]
        
        const linkList = profileLinks.map((link, index) => {
            return (
                <li key={index}>
                    <a href={link.url}>
                        <i className={'fab fa-' + link.name} ></i>
                    </a>
                </li>
            )
        })

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