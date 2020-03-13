import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeNav extends Component {

    render() {
        return (
            <nav className="nav-wrapper teal">
                <div className="container">
                    <a href="/home"><h1 className ='logo'>PG <b>PARENTING</b></h1></a>
                    <ul id="nav-mobile" className="right">
                       <li><Link to='/signup-user'><i className="material-icons">Sign Up</i>Sign Up</Link></li>
                        <li><Link to='/signin-user'><i className="material-icons">Sign In</i>Sign In</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default WelcomeNav;
