import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'

class AboutUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    <Navbar />
                </div>

        
                <div >
                    <h1>ABOUT USS/OUR MISSION!!!!!!!!</h1>
                </div>
            </div>
        )
    }
}


export default AboutUs;
