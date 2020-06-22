import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '..//Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import MyProfile from './MyProfile';
import FamilyQuad from './FamilyQuads'
import KidProfile from './KidProfile'

class Profile extends Component  {

    state={
        profilePage: true,
        quadrantPage: false,
        kidPage: false,
        selectedChild: null
    }

    clickProfile = () => {
        this.setState({
            profilePage: true,
            quadrantPage: false,
            kidPage: false,
        })
    }

    clickQuadrant =() =>{
        this.setState({
            quadrantPage: true,
            profilePage: false,
            kidPage: false,
        })
    }

    clickKid =(kid) =>{
        this.setState({
            quadrantPage: false,
            profilePage: false,
            kidPage: true,
            selectedChild: kid
        })
    }

    clickKidMyP =(kid) =>{
        this.setState({
            quadrantPage: false,
            profilePage: false,
            kidPage: true,
            selectedChild: kid
        })
    }

    render() {
 console.log(this.state.selectedChild)
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div >
        <Navbar/>
        <div >
            
               {/* {<Navbar/>} */}
            
            <div id="profiles">

                {/* <h1 id="my-family-title">My Family</h1> */}
                {/* <div id="line-family"></div> */}

                
            <div className = "side-nav-profile">

            <h2 id="my-family-title">My Family</h2> 
              <a href="/add-child" class="add-child-side"> <i class="fas fa-plus"></i>  Child </a>
              <a href="/add-child" class="add-child-side"> <i class="fas fa-cog"></i> </a>
              <a href="/add-child" class="add-child-side"> <i class="fas fa-sign-out-alt"></i> Logout</a>
              <br></br>
              <br></br>
            <div id="side-nav-line"></div>
              
              <h4 className="profile-sidenav" style={{cursor: 'pointer'}} onClick={ () => this.clickProfile()}>My Profile</h4>
              <h4 className="profile-sidenav" style={{cursor: 'pointer'}} onClick={()=> this.clickQuadrant()}>Family Growth Tracker</h4>
              <br></br>
              <br></br>
       
              <h4 id="side-children-title">Children:</h4>
              {this.props.currentUser.kids.map(kid => <h4 className="profile-sidenav" onClick={()=> this.clickKid(kid)} style={{cursor: 'pointer'}} >{kid.name}</h4>)}
             
              <br></br>
              <br></br>
              
            </div>



            <div id="boxes"> 
            {/* <div id = "leftbox"> 
            <MyProfile/> */}
                {this.state.profilePage === true ? <MyProfile clickKidMyP={this.clickKidMyP}/> : null}
                {this.state.quadrantPage === true ? <FamilyQuad/> : null}
                {this.state.kidPage === true ? <KidProfile selectedChild={this.state.selectedChild}/> : null}
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
        {/* <div id="line-home"></div> */}
                <Footer/>
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