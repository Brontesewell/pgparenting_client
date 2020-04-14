import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import ParentingNav from '../components/ParentingNav'
import Sidebar from "react-sidebar";
const mql = window.matchMedia(`(min-width: 800px)`);


class Navbar extends Component {
    container = React.createRef();
    constructor(props) {
      super(props);
      this.state = {
        firstName: this.props.currentUser.first_name,
        sidebarDocked: mql.matches,
        sidebarOpen: false,
        pullRight: false
      };
      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
      this.setState({
        pullRight: true
      })
    }
  
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open});
    }
    
     
   
    mediaQueryChanged() {
      this.setState({ sidebarDocked: mql.matches, sidebarOpen: false});
    }

    // clickButton = () => {
    //   this.setState({
    //     button: "X"
    //   })
    // }



    handleSignOut = e => {
        localStorage.clear()
        this.props.clearCurrentUser()
    }

    render() {
      const {firstName} = this.state
      // console.log(firstName)
        return (
            <div>
       

                    <Sidebar
        sidebar={<div id="side-navbar">
          <br></br>
        <h5 className="sidenav-text-name">Welcome, {firstName}</h5>
          <br></br>
        <br></br>
      
          <Link to = '/home' className="sidenav-text">Home</Link>
         <br></br>
        <br></br>
        <Link to="/profile" className="sidenav-text">My Family</Link>
         <br></br>
        <br></br>
        <Link to = '/about-us' className="sidenav-text">Our Mission</Link>
         <br></br>
        <br></br>
        <Link to = '/shop' className="sidenav-text">Shop</Link>
         <br></br>
        <br></br>
        <Link to='/contact_us' className="sidenav-text">Contact Us</Link>
        <br></br>
        <br></br>
        <Link to = '/' className="sidenav-text" onClick={this.handleSignOut}>Sign Out</Link>
        </div>
      }
        pullRight={this.state.pullRight}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#8597C5" } }}
      >
        <button type="button" id="menu-item-nav-threeline" class="button" onClick={() => this.onSetSidebarOpen(true)}>
        ☰
        </button>
      </Sidebar>
     

            <div className="container">
                <a href="/home"><img className ='logo-home' alt="Logo" src={Logo}/></a>
        {/* <h3 id="welcome-user-nav" >Welcome, {firstName}</h3> */}
 
                  
        <div class="menu-item-nav">
       
                    {/* <button type="button" id="menu-item-nav-threelines" class="button">☰</button> */}
                    {/* <div class="container">
                   <ul>
          
                           <li><Link to = '/home'>Home</Link></li>
                            <li><Link onClick={() =>  window.location.href="/profile" } >My Family</Link></li>
                            <li><Link to = '/about-us'>Our Mission</Link></li>
                            <li><Link to = '/shop' >Shop</Link></li>
                            <li><Link to='/contact_us'>Contact Us</Link></li>
                            <li><Link to = '/' onClick={this.handleSignOut}>Sign Out</Link></li>
                         
                   </ul> 
                   </div>      */}
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
