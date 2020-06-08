import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from '../Children'
import CourseCollection from '../CourseCollection'
import Footer from '../../containers/Footer'
import BehaviourQuadrant from '../../containers/Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; 
import MyProfile from './MyProfile'

class Profile extends Component  {
    
    state={
        behaviour_1: [],
        behaviour_2: [],
        behaviour_3: [],
        behaviour_4: [],
        profilePage: false
    }

    componentDidMount(){
        this.props.currentUser.kids.map(kid => 
            kid.behaviour_score * kid.behaviour_progress <= 5 ?
            this.setState(prevState => ({
                behaviour_1: [...prevState.behaviour_1, ...this.state.behaviour_1.concat(kid)]
              })) 
            : (kid.behaviour_score * kid.behaviour_progress) >= 5 && (kid.behaviour_score * kid.behaviour_progress) <= 10 && kid.behaviour_progress == 2 ?
            this.setState(prevState => ({
                behaviour_2: [...prevState.behaviour_2, ...this.state.behaviour_2.concat(kid)]
              })) : (kid.behaviour_score * kid.behaviour_progress) >= 5 && (kid.behaviour_score * kid.behaviour_progress) <= 10 && kid.behaviour_progress >= 3 ?
            this.setState(prevState => ({
                behaviour_3: [...prevState.behaviour_3, ...this.state.behaviour_3.concat(kid)]
              })) : (kid.behaviour_score * kid.behaviour_progress) >= 11 ?
            this.setState(prevState => ({
                behaviour_4: [...prevState.behaviour_4, ...this.state.behaviour_4.concat(kid)]
              }))  : 
                    null
            )
    }

    clickProfile = () => {
        this.setState({
            profilePage: !this.state.profilePage
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
            <div className = "my-fam">
              
              <h4>My Profile</h4>
              <h4>Family Growth Tracker</h4>
              <h4 onClick={ () => this.clickProfile() && <MyProfile/> }>Kids</h4>
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
             {/* <MyProfile/>  */}

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