import React from 'react'; 
import CardProfileLinks from './Links'; 
class CardBack extends React.Component {
    render() {
        return (
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Let's get in touch!</h1>
                    
                    <form formAction='' className='card-form'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <input name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
                            </div>
                        </div>
                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )   
    }
}

export default CardBack; 