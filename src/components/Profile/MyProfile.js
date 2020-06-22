import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '../Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import {Col} from 'react-bootstrap'


class MyProfile extends Component  {
    

    render() {
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div> 
        <div id = "leftbox"> 
 
            <h3 id="my-profile">My Profile</h3>
            <br/>
                <div class="container">
                    <div class="row">
                    <Col lg={9}>
                            <h6 id="email-p"><strong>Name: </strong>{first_name + ' ' + last_name}</h6>
                            <h6 id="email-p"><strong>Email: </strong>{email}</h6>
                        </Col>

                        <Col lg={3}>
                            <Link to='/edit-profile'> <button id="edit-p" className="btn">Edit Profile</button></Link>
                            <Link to='/edit-profile'> <button id="edit-p" className="btn">Delete Account</button></Link>
                        </Col>
                    </div>
                </div>
            
                <br/>
                <br />


                    <div class="container">
                    <div class="row">
                        <div class="col-md">
                        <h3 id="my-children">Favourite Courses</h3>  
                    
                <div className="">
                {this.props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
          
                        </div>

                        <div class="col-md">
                     
                            <h3 id="my-children"> Children</h3>  
                            <ul>
                            {this.props.currentUser.kids.map(kid => <li id="kid-profile-li">{kid.name}</li> )}
                            </ul>
                      
               
                             <br/>
                            <Link to='/add-child'><button id="add-child-btn" className="btn">Add Child</button></Link>

                        </div>
                    </div>
                </div>
                
                <br></br>
                <br></br>
                    {/* {this.props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )} */}
                    <br></br>
                <br></br>
                      
                        
               


          
       

                </div>
      
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(MyProfile);