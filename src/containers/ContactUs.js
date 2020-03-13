import React, {Component} from 'react';
import {connect} from 'react-redux'
import WelcomeNav from './WelcomeNav';

class ContactUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    {<WelcomeNav/>}
                </div>

        
                <div >
                    <h1>CONTACT USSS!!!!!!!!</h1>
                </div>
            </div>
        )
    }
}


export default ContactUs;
