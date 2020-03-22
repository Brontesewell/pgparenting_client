
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"


class Footer extends Component {
 


    render() {
      
        return (
            <div id="footer">
<footer class="footer-distributed">

    <a href="/home"><img className ='logo-footer' alt="Logo" src={Logo}/></a>
    
    <div class="footer-left">
        <p class="footer-links">
            <a href="#" class="link-1">Home</a>
            
            <a href="#">Blog</a>
        
            <a href="#">About</a>
            
            <a href="#">Contact</a>
        </p>

        <p id="year-footer">PG Parenting © 2020</p>
    </div>

    <div class="footer-center">
        <h5 id="contact-footer">Connect with us</h5>
       <p id="icons-footer"> <FontAwesomeIcon icon={faFacebook} className="icon-f"/><FontAwesomeIcon icon={faInstagram} className="icon-f"/><FontAwesomeIcon icon={faYoutube} /></p>
        <p id="email-icon-footer"><FontAwesomeIcon icon={faEnvelope} id="email-footer" />pgparenting@gmail.com</p>
        


    </div>

    <div class="footer-right">

            <p class="footer-company-about"><span id="span-footer">About the company</span></p>
          
        <p id="about-footer-text"> Fusce euismod convallis velit, eu auctor lacus vehicula sit amet. Lorem ipsum dolor sit amet, consectateur adispicing elit. Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit.</p>

    

    </div>

</footer>
</div>
        );
    }

}


export default Footer;


