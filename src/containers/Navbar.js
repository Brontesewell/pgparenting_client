import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import ParentingNav from '../components/ParentingNav'


class Navbar extends Component {
 

    container = React.createRef();
    state = {
      firstName: this.props.currentUser.first_name,
      button: "☰",
    };


    clickButton = () => {
      this.setState({
        button: "X"
      })
    }



    handleSignOut = e => {
        localStorage.clear()
        this.props.clearCurrentUser()
    }

    render() {
      const {firstName} = this.state
      // console.log(firstName)
        return (
            <div>
       

            <div className="container">
                <a href="/home"><img className ='logo-home' alt="Logo" src={Logo}/></a>
        {/* <h3 id="welcome-user-nav" >Welcome, {firstName}</h3> */}
 
                  
        <div class="menu-item-nav">
                    
                    <button type="button" id="menu-item-nav-threelines" class="button">{this.state.button}</button>
                    <div class="container">
                   <ul>
          
                           <li><Link to = '/home'>Home</Link></li>
                            <li><Link onClick={() =>  window.location.href="/profile" } >My Family</Link></li>
                            <li><Link to = '/about-us'>Our Mission</Link></li>
                            {/* <li><Link to='/conversation'>Chatroom</Link></li> */}
                            <li><Link to = '/shop' >Shop</Link></li>
                            <li><Link to='/contact_us'>Contact Us</Link></li>
                            <li><Link to = '/' onClick={this.handleSignOut}>Sign Out</Link></li>
                         
                   </ul> 
                   </div>     
              </div>
              
              
      
        
              </div> 
              
                   <div class="menu-item">
                          <h6 onClick={() =>  window.location.href='/co-parents'}   id="menu-item-p">Co-Parenting</h6>
                 
                          </div>
       
                
              
       <div class="menu-item">
                <h6 id="menu-item-p">Parenting Courses</h6>
                   <ul>
                   
                        <li className="parent-lis"><a href="/baby">0-12mths</a></li>
                       <li className="parent-lis"><a href="/toddler">1-2yrs</a></li>
                        <li className="parent-lis"><a href="/pre_school"> 3-5yrs</a></li>
                        <li className="parent-lis"><a href="/primary_school"> 6-10yrs</a></li>
                         <li className="parent-lis"><a href="/preteen">11-12yrs</a></li>
                        <li  className="parent-lis"><a href="/teen">13-18yrs</a></li>
                        <li className="parent-lis"><a href="/young_adults">19-25yrs</a></li>
                      
                   </ul>
        </div>
       
        <div class="menu-item-tips">
              <h6 id="menu-item-p">Parenting Tips</h6>
                   <ul>
          
                   <li className="parent-lis"><a href="/baby">0-12mths</a></li>
                       <li className="parent-lis"><a href="/toddler">1-2yrs</a></li>
                        <li className="parent-lis"><a href="/pre_school"> 3-5yrs</a></li>
                        <li className="parent-lis"><a href="/primary_school"> 6-10yrs</a></li>
                         <li className="parent-lis"><a href="/preteen">11-12yrs</a></li>
                        <li  className="parent-lis"><a href="/teen">13-18yrs</a></li>
                        <li className="parent-lis"><a href="/young_adults">19-25yrs</a></li>
                   </ul>
        </div>
        
       
        <br></br>
   
      
      <div class="line-row"></div>
{/* 
                <ParentingNav/> */}
            
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
