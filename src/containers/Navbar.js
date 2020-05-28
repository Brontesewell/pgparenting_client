
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import ParentingNav from '../components/ParentingNav'
import Sidebar from "react-sidebar";
const mql = window.matchMedia(`(min-width: 800px)`);



class NavBar extends Component {
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
      return (
        <div>

        <img className ='logo-home' alt="Logo" src={Logo}/>
       
        <div class="menu-item-course">
        <h6 id="menu-item-p">PARENTING COURSE</h6>
        </div>
        
        <div class="menu-item-tips">
        <h6 id="menu-item-p">PARENTING TIPS</h6>
        </div>

        <div class="menu-item">
        <h6 id="menu-item-p">CO-PARENTING</h6>
        </div>



                    <Sidebar
                      sidebar={<div id="side-navbar">
                        <br></br>
                        <br></br>
                    
                        <Link to = '/home' className="sidenav-text">HOME</Link>
                      <br></br>
                      <br></br>
                      <Link to="/profile" className="sidenav-text">MY FAMILY</Link>
                      <br></br>
                      <br></br>
                      <Link to = '/about-us' className="sidenav-text">OUR MISSION</Link>
                      <br></br>
                      <br></br>
                      <Link to = '/shop' className="sidenav-text">SHOP</Link>
                      <br></br>
                      <br></br>
                      <Link to='/contact_us' className="sidenav-text">CONTACT US</Link>
                      <br></br>
                      <br></br>
                      <Link to = '/' className="sidenav-text" onClick={this.handleSignOut}>SIGN OUT</Link>
                      </div>
                    }
                      pullRight={this.state.pullRight}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ sidebar: { background: "#fff" } }}
                    >
                      <button type="button" id="menu-item-nav-threeline" class="button" onClick={() => this.onSetSidebarOpen(true)}>
                      ☰
                      </button>
                    </Sidebar>
            
{/* 
 
                  
        <div class="menu-item-nav">
       

              </div>
              
              
      
        
              </div> 
              
                   <div class="menu-item">
                          <h6 onClick={() =>  window.location.href='/co-parents'}  className="parenting-cos" id="menu-item-p">CO-PARENTING</h6>
          
                 
                          </div>
       
                
              
       <div class="menu-item-course">
                <h6 id="menu-item-p-course" >PARENTING COURSES</h6>
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
              <h6 id="menu-item-p">PARENTING TIPS</h6>
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
   
      
       */}
       {/* <div class="line-row"></div> */}
     
            
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
