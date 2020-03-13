import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WelcomeNav extends Component {

    render() {
        return (
            <nav id="wecome-navbar">
              
               
                <div className="container">
                  
            

                    <a href="/"><h4 className ='logo'>PG <b>PARENTING</b></h4></a>
                    {/* <img src='pgparentinglogo.png' /> */}
                    {/* <a href="/"><img class="img-responsive2" src="../pgparentinglogo.png"></a> */}

                      <Link to='/signup-user' className="nav-links" >Join Now</Link>
                        <Link to='/signin-user' className="nav-links">Login</Link>
                    <Link to='/contact-us' className="nav-links" >Contact Us</Link>
                
                </div>
            </nav>
        );
    }

}

export default WelcomeNav;

