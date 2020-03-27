import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Parent from '../Parent.jpg'


class AboutUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    <Navbar />
                </div>

        
                <div id="about-us-div">
                        <h2 id="about-names">Mark and Stephanie Sewell</h2>

                    <div id="parents"><img className ='parents-photo' alt="parents" src={Parent}/></div>
                 <div id="about-us-text">
                        <h4 className="about-text">About Us</h4>
                        <p className="about-text">We are all about “better parenting for a better world”.  </p>
                        <p className="about-text">  We are creating a unique online experience to help parents in the art of parenting. On that journey, we wish to become a trusted source of parenting information and practical advice. </p> 
                        <p className="about-text"> “Success” to us means parents working together to grow and develop kids that are a blessing to themselves, their parents and their communities.</p>
                </div>
               
                </div>
            </div>
        )
    }
}


export default AboutUs;
