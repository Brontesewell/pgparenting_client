
import {connect} from 'react-redux'
import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, FormControl, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Logo from '../Logo.jpg'
import ParentingNav from '../components/ParentingNav'
import Sidebar from "react-sidebar";
import signOut from '../actions/signOut'
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
        this.props.signOut(e)
    }

    render() {

      return (
        <div >

<div className="navbar-homepage" >
        <img className ='logo-home' alt="Logo" src={Logo}/>


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
                      <Link to = '/' className="sidenav-text" onClick={(e) => this.handleSignOut(e)}>SIGN OUT</Link>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      {this.props.currentUser.email === "123@gmail.com" ? <Link to = '/admin-info' className="sidenav-text" >ADMIN</Link> : null }
                      </div>
                    }
                      pullRight={this.state.pullRight}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ sidebar: { background: "#fff" } }}
                    >
                      <a href="#" type="button" id="menu-item-nav-threeline" class="button-nav" onClick={() => this.onSetSidebarOpen(true)}>
                      ☰
                      </a>
                    </Sidebar>

 
                  
        
       
 
              
       <div class="menu-item-course">
                <h6 id="menu-item-p" >PARENTING COURSES ▼</h6>
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
              <h6 id="menu-item-p">PARENTING TIPS ▼</h6>
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
      

        <div class="menu-item">
        <h6 id="menu-item-p" >CO-PARENTING</h6>
        </div>
        </div>
                    <div id="side-nav-line-nav"></div>
                    <nav className="home-navbar-side">
                      <Navbar bg="light" expand="lg" className="navbar-home">
                      <Navbar.Brand className="navbar-brand-small" href="/"><img className="logo-small" alt="Logo" src={Logo}/></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                          <Nav.Link href='/home' className="sidenav-text">HOME</Nav.Link>
                          <NavDropdown title="PARENTING TIPS" id="basic-nav-dropdown" className="sidenav-p shadow-none">
                            <NavDropdown.Item href="/baby">0-12mths</NavDropdown.Item>
                            <NavDropdown.Item href="/toddler">1-2yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/pre_school"> 3-5yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/primary_school"> 6-10yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/preteen">11-12yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/teen">13-18yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/young_adults">19-25yrs</NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown title="PARENTING COURSES" id="basic-nav-dropdown" className="sidenav-p shadow-none">
                            <NavDropdown.Item href="/baby">0-12mths</NavDropdown.Item>
                            <NavDropdown.Item href="/toddler">1-2yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/pre_school"> 3-5yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/primary_school"> 6-10yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/preteen">11-12yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/teen">13-18yrs</NavDropdown.Item>
                            <NavDropdown.Item href="/young_adults">19-25yrs</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href='/co-parents' className="sidenav-text">CO-PARENTING</Nav.Link>
                          <Nav.Link href="/profile" className="sidenav-text">MY FAMILY</Nav.Link>
                          <Nav.Link href='/about-us' className="sidenav-text">OUR MISSION</Nav.Link>
                          <Nav.Link href='/shop' className="sidenav-text">SHOP</Nav.Link>
                          <Nav.Link href='/contact_us' className="sidenav-text">CONTACT US</Nav.Link>
                          <Nav.Link href='/' className="sidenav-text" onClick={this.handleSignOut}>SIGN OUT</Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                    </nav>
     
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
        signOut: () => dispatch({ type: "SIGN_OUT" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
