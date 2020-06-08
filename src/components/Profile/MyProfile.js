import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '../../containers/Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 

class MyProfile extends Component  {
    

    render() {
 
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div> 
        <div id = "leftbox"> 
 
            <h1 id="my-profile">My Profile</h1>
            
                <h3 className="p">Name: {first_name + ' ' + last_name}</h3>
                <h6 id="email-p"><strong>Email: </strong>{email}</h6>
                
                <Link to='/edit-profile'> <button id="edit-p" className="btn">Edit Profile</button></Link>
                    <br />
                <h3 id="my-children"> Children</h3>  
                <h5>Childrens Names</h5>
                        <Link to='/add-child'><button id="edit-p" className="btn">Add another Child</button></Link>
                        
               
                <br></br>
                <br></br>
                    {this.props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )}
                    <br></br>
                <br></br>
                <h3 id="my-children">Favourite Courses</h3> 
                <div className="line-favss"></div>
                <div className="">
                {this.props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
          

          
       

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