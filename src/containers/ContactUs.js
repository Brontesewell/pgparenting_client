import React, {Component} from 'react';
import {connect} from 'react-redux'
import WelcomeNav from './WelcomeNav';
import ReactContactForm from 'react-mail-form';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
class ContactUs extends Component {


    
    render () {  
        
        return (
            <div>
               
                    {<WelcomeNav/>}
               

                    <div id ="contact-us-image">

                   
                    <div className="contact-us-div">
                   
                            <h2 id="contact-us-title">Contact Us</h2>
                         

                            <h5 className="contact-options"><span id="contact-options-title">Email: </span>support@pgparenting.com</h5>
                            <h5 className="contact-options"><span id="contact-options-title">Phone: </span> +1 828 6366</h5>
                            <h5 className="contact-options"><span id="contact-options-title">Location:</span> San Francisco, California</h5>
                            <br></br>
                            <div id="send-gmail-contact"> 
                            <h5 className="contact-options">Or Email us on your Gmail:</h5>
                            <ReactContactForm to="jumpinggirlnz@icloud.com" />
                            </div>

                    </div>

                    </div> 

                    <div id ="contact-us-image-small">
                    <MDBContainer className="contact-us-div-small">
                
                <MDBCol md="8">
                   
                    {/* <div className="contact-us-div-small"> */}

                            <h2 id="contact-us-title-small">Contact Us</h2>

                            <h5 className="contact-options-s"><span id="contact-options-title">Email: </span>support@pgparenting.com</h5>
                            <h5 className="contact-options-s"><span id="contact-options-title">Location:</span> San Francisco, California</h5>
                            <h5 className="contact-options-s"><span id="contact-options-title">Phone: </span> +1 828 6366</h5>
                            <br></br>
                            <div id="send-gmail-contact-small"> 
                            <h5 className="contact-options-small">Or Email us on your Gmail:</h5>
                            <ReactContactForm to="jumpinggirlnz@icloud.com" />
                            </div>

                    {/* </div> */}
                </MDBCol>
                
                </MDBContainer>

</div> 
             
     </div>
        )
    }
}


export default ContactUs;
