import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import ParentingNav from '../components/ParentingNav'


class Navbar extends Component {
 

    container = React.createRef();
    state = {
      open: false,
      firstName: this.props.currentUser.first_name,
    };

    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    };

    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };

    handleSignOut = e => {
        localStorage.clear()
        this.props.clearCurrentUser()
    }

    render() {
      const {firstName} = this.state
        return (
            <div>
       

            <div className="container">
                <a href="/home"><img className ='logo-home' alt="Logo" src={Logo}/></a>
        <h3 id="welcome-user-nav" >Welcome, {firstName}</h3>
                        <div className="App">
                    <div className="container-nav" id="overlay" ref={this.container}>
                      <button type="button" class="button" onClick={this.handleButtonClick}>
                        ☰
                      </button>
                      {this.state.open && (
                        <div class="container">
                          <ul>
                            <li><Link to = '/home' >Home</Link></li>
                            <li>Our Mission</li>
                            <li><Link to = '/profile' >My Family</Link></li>
                            <li>Chatroom</li>
                            <li>Shop</li>
                            <li>Contact Us</li>
                            <li><Link to = '/' onClick={this.handleSignOut}>Sign Out</Link></li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div> 

                <ParentingNav/>
            
            </div>
        );
    }

}

const mapStateToProps = state => {
  return {
      currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
    return {
        clearCurrentUser: () => dispatch({ type: "CLEAR_CURRENT_USER" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
