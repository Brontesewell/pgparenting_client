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
            <div class="profile-divs">
            <h3 id="my-profile">My Profile</h3>
            <br/>
                <div class="container">
                    <div class="row">
                    <Col lg={8}>
                            <h6 id="email-p"><strong>Name: </strong>{first_name + ' ' + last_name}</h6>
                            <h6 id="email-p"><strong>Email: </strong>{email}</h6>
                        </Col>

                        <Col lg={4} >
                            <Link to='/edit-profile'> <button id="edit-p" className="btn">Edit Profile</button></Link>
                            <Link to='/edit-profile'> <button id="edit-p" className="btn">Delete Account</button></Link>
                        </Col>
                    </div>
                </div>
            </div>
            
                


                    <div class="container">
                    <div class="row">
                    <Col lg={6} className="course-collection-profile">
                        <div>
                        <h3 id="my-children">Favourite Courses</h3>  
                    
                            {this.props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                        </div>
                    </Col>
          

                        <Col lg={5} className="children-profile">
                     
                            <h3 id="my-children"> Children</h3>  
                            <ul>
                            {this.props.currentUser.kids.map(kid => <li onClick={()=> this.props.clickKidMyP(kid)} id="kid-profile-li">{kid.name}</li> )}
                            </ul>
                      
               
                            
                            <Link to='/add-child'><button id="add-child-btn" className="btn">Add Child</button></Link>

                        </Col>
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