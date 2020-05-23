import { Nav, Navbar,} from 'react-bootstrap'
import React, { Component } from 'react';
import Logo from '../Logo.jpg'


const WelcomeNav = () =>  {
        return (
            <nav id="wecome-navbar">

                    
                    <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/"><img className="logo" alt="Logo" src={Logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link className="nav-links" href="/signin-user">Login</Nav.Link>
                        <Nav.Link  className="nav-links" href="/signup-user">Join Now</Nav.Link>
                        <Nav.Link  className="nav-links" href="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
       
             </nav>
        );
    }

export default WelcomeNav;

