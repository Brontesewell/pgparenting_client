import React, { Component } from 'react';
import {connect} from 'react-redux'
import Navbar from '../containers/Navbar'
import {Link} from 'react-router-dom'
import Children from './Children'
import CourseCollection from './CourseCollection'
import Footer from '../containers/Footer'
import BehaviourQuadrant from '../containers/Quadrants/BehaviourQuadrant'
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

class Profile extends Component  {
    
    state={
        behaviour_1: [],
        behaviour_2: [],
        behaviour_3: [],
        behaviour_4: [],
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

    render() {
 
    const {first_name, last_name, email} = this.props.currentUser
    return (
        <div >
            
               {/* {<Navbar/>} */}
            
            <div id="profiles">
                <h1 id="my-family-title">My Family</h1>
                <div id="line-family"></div>
            <div className = "my-fam">
            <h1 id="my-profile">Profile</h1>
             <div className="line-profile"></div>
                <h3 className="p">{first_name + ' ' + last_name}</h3>
                <h6 id="email-p"><strong>Email: </strong>{email}</h6>
              
              
                    <button onClick={()=> this.props.history.push('/edit-profile')} id="edit-p" className="btn">Edit Profile</button>
                   
            </div>



            <div id = "boxes"> 
            <div id = "leftbox"> 
                <h3 id="my-children"> Children</h3>  
                <div className="line-child"></div>
                        <Link to='/add-child'><button id="edit-p" className="btn">Add another Child</button></Link>
                        
               
                <br></br>
                <br></br>
                    {this.props.currentUser.kids.map(kid => <div className="children-div"><Children kid={kid}/></div> )}
            </div>



            <div id ="quadrantss">
            <h3 id="my-children">Children Quadrant</h3> 
                <div className="line-favs"></div>
                        <Link to='/about_scoring'><button id="about-s-p" >Family Report Info</button></Link>
               
                < BehaviourQuadrant currentUser={this.props.currentUser} behaviour_1={this.state.behaviour_1} behaviour_2={this.state.behaviour_2} behaviour_3={this.state.behaviour_3} behaviour_4={this.state.behaviour_4}/>
               
            </div>
              
            <div id = "middlebox"> 
                <h3 id="my-children">Favourite Courses</h3> 
                <div className="line-favss"></div>
                <div className="">
                {this.props.currentUser.courses.map(course => <CourseCollection course={course}/> )}
                </div>
            </div> 
              
          
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