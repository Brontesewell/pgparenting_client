import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'


class WelcomeNav extends Component {

    render() {
        return (
            <nav id="wecome-navbar">
              
               
                <div className="container">
                  
            

                    {/* <a href="/"><h4 className ='logo'>PG <b>PARENTING</b></h4></a> */}
                 
                    <a href="/"><img className ='logo' alt="Logo" src={Logo}/></a>
                    

                    <Link to='/contact-us' className="nav-links" >Contact Us</Link>
                      <Link to='/signup-user' className="nav-links" >Join Now</Link>
                        <Link to='/signin-user' className="nav-links">Login</Link>
                
                </div>
            </nav>
        );
    }

}

export default WelcomeNav;

