import React, {Component} from 'react';
import {connect} from 'react-redux'
import Navbar from './Navbar'
import Parent from '../Parent2.jpg'


class AboutUs extends Component {


    
    render () {  
        
        return (
            <div>
                <div className = 'row'>
                    <Navbar />
                </div>

                <div id="about-us-div">

                        <h6 id="about-names">ABOUT US</h6>

                    <div id="about-us-inside-div">
                        
                        

                    <div id="parents"><img className ='parents-photo' alt="parents" src={Parent}/>
                    <h2 id="quote-about">We are all about “better parenting for a better world”</h2>
                    <br></br> <br></br>
                    <a  href='/contact_us' id="button-image-about">Contact Us</a></div>
                 <div id="about-us-text">
                <h5 className="about-text-title">Mark and Stephanie Sewell</h5>
                <h6 className="about-text-co-founder"><i>Co-Founders and Parenting Professionals</i></h6>

                        
                        <p className="about-text">We are all about “better parenting for a better world”.  We are creating a unique online experience to help parents in the art of parenting. On that journey,
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey, 
                         we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. On that journey,
                          we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.
                        On that journey, we wish to become a trusted source of parenting information and practical advice.We are creating a unique online experience to help parents in the art of parenting. 
                        On that journey, we wish to become a trusted source of parenting information and practical advice.</p>
                        {/* <p className="about-text">  We are creating a unique online experience to help parents in the art of parenting. On that journey, we wish to become a trusted source of parenting information and practical advice. </p> 
                        <p className="about-text"> “Success” to us means parents working together to grow and develop kids that are a blessing to themselves, their parents and their communities.</p> */}
                </div>
               
                </div>
            </div>
        </div>
        )
    }
}


export default AboutUs;
