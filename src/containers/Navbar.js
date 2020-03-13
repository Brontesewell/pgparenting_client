import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    
    handleSignOut = e => {
        localStorage.clear()
        this.props.clearCurrentUser()
    }

    render() {
        return (
            <nav className="nav-wrapper teal">
                <div className="container">
                    <a href="/home"><h1 className ='logo'>N O <b>W A S T E</b></h1></a>
                    <ul id="nav-mobile" className="right">
                       <li><Link to = '/home'><i className="material-icons">home</i>Home</Link></li>
                        <li><Link to = '/profile'><i className="material-icons">account_circle</i>Profile</Link></li>
                        <li><Link to = '/' onClick={this.handleSignOut}>SIGN OUT</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        clearCurrentUser: () => dispatch({ type: "CLEAR_CURRENT_USER" })
    }
}

export default connect(null, mapDispatchToProps)(Navbar);
