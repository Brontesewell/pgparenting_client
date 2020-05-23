import {FormControl, Nav, Button, Navbar, Form} from 'react-bootstrap'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'


const WelcomeNav = props =>  {
    const { location } = props;
    // render() {
        return (
            <nav id="wecome-navbar">

                {/* <div className="container">
                 
                    <a href="/"><img className ='logo' alt="Logo" src={Logo}/></a>

                    <Link to='/contact-us' className="nav-links" >Contact Us</Link>
                      <Link to='/signup-user' className="nav-links" >Join Now</Link>
                        <Link to='/signin-user' className="nav-links">Login</Link>
                
      
                    </div> */}
                    

                    <>

                    <Navbar bg="light" variant="light">
                        <Navbar.Brand href="/"><img  alt="Logo" src={Logo}/></Navbar.Brand>
                        <Nav className="ml-auto" activeKey={location}>
                        <Nav.Link className="nav-links" href="/signin-user">Login</Nav.Link>
                        <Nav.Link  className="nav-links" href="/signup-user">Join Now</Nav.Link>
                        <Nav.Link  className="nav-links" href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar>
                    </>
       
             </nav>
        );
    }

// }

export default WelcomeNav;

