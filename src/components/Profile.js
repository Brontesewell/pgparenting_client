import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from './Children'
import CourseCollection from './CourseCollection'
import Footer from '../containers/Footer'
import BehaviourQuadrant from '../Quadrants/BehaviourQuadrant'

class Profile extends Component  {
    
    state={
        behaviour_1: [],
        behaviour_2: [],
        behaviour_3: [],
        behaviour_4: [],
        academic_1: [],
        academic_2: [],
        academic_3: [],
        academic_4: [],
        sport_1: [],
        sport_2: [],
        sport_3: [],
        sport_4: [],
        character_1: [],
        character_2: [],
        character_3: [],
        character_4: [],
    }

    componentDidMount(){
        this.props.currentUser.kids.map(kid => (kid.behaviour_score * kid.behaviour_progress) <= 5 ?
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
              })) : null
            )
    }

    render() {
    console.log(this.state.behaviour_1)
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div >
            <div className = 'row'>
               {<Navbar/>} 
            </div>
            <div id="profiles">
                <h1 id="my-family-title">My Family</h1>
                <div id="line-family"></div>
            <div className = "my-fam">
            <h1 id="my-profile">Profile</h1>
             <div className="line-profile"></div>
                <h3 className="p">{first_name + ' ' + last_name}</h3>
                <h6 id="email-p"><strong>Email: </strong>{email}</h6>
              
                <div >
                    <Link to='/edit-profile'><button id="edit-p" className="btn">Edit Profile</button></Link>
                    </div>
            </div>



            <div id = "boxes"> 
            <div id = "leftbox"> 
                <h3 id="my-children"> Children</h3>  
                <div className="line-child"></div>
                        <Link to='/add-child'><button id="edit-p" className="btn">Add another Child</button></Link>
                        <br></br>
                        <Link to='/about_scoring'><button id="about-s-p" className="btn">About Achievement Scoring and Progress</button></Link>
               
                <br></br>
                <br></br>
                    {this.props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )}
            </div>



            <div id ="quadrant">
            <h3 id="my-children">Family Quadrant</h3> 
                <div className="line-favs"></div>
               
                < BehaviourQuadrant behaviour_1={this.state.behaviour_1} behaviour_2={this.state.behaviour_2} behaviour_3={this.state.behaviour_3} behaviour_4={this.state.behaviour_4}/>
                {/* {this.props.currentUser.kids.map(kid => < BehaviourQuadrant kid={kid} />)} */}
            </div>
              
            <div id = "middlebox"> 
                <h3 id="my-children">Favourite Courses</h3> 
                <div className="line-favs"></div>
                <div className="">
                {this.props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
            </div> 
              
          
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

export default connect(mapStateToProps)(Profile);