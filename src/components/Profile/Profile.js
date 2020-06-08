import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '../../containers/Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import MyProfile from './MyProfile';
import FamilyQuad from './FamilyQuads'

class Profile extends Component  {

    state={
        profilePage: true,
        quadrantPage: false,
    }

    clickProfile = () => {
        this.setState({
            profilePage: true,
            quadrantPage: false,
        })
    }

    clickQuadrant =() =>{
        this.setState({
            quadrantPage: true,
            profilePage: false
        })
    }

    render() {
 
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div >
            
               {/* {<Navbar/>} */}
            
            <div id="profiles">

                <h1 id="my-family-title">My Family</h1>
                <div id="line-family"></div>

                
            <div className = "side-nav-profile">
              
              <h4 onClick={ () => this.clickProfile()}>My Profile</h4>
              <h4 onClick={()=> this.clickQuadrant()}>Family Growth Tracker</h4>
              <h4 >Kids</h4>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="/add-child" class="btn-direct">Add Child</a>
              
            </div>



            <div id = "boxes"> 
            {/* <div id = "leftbox"> 
            <MyProfile/> */}
                {this.state.profilePage === true ? <MyProfile/> : null}
                {this.state.quadrantPage === true ? <FamilyQuad/> : null}
            {/* </div> */} 



            {/* <div id ="quadrantss">
            <h3 id="my-children">Children Quadrant</h3> 
                <div className="line-favs"></div>
                        <Link to='/about_scoring'><button id="about-s-p" >Family Report Info</button></Link>
               
                < BehaviourQuadrant currentUser={this.props.currentUser} behaviour_1={this.state.behaviour_1} behaviour_2={this.state.behaviour_2} behaviour_3={this.state.behaviour_3} behaviour_4={this.state.behaviour_4}/>
               
            </div> */}
              
            {/* <div id = "middlebox"> 
            </div> 
               */}
          
        </div> 

        </div>
        <ScrollUpButton/>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(Profile);