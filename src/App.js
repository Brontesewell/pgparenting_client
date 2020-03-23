import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import Home from './containers/Home'   
import EditProfile from './containers/EditProfile'
import EditKid from './containers/EditKid'
import Profile from './components/Profile'
import ContactUs from './containers/ContactUs'
import ParentingCourses from './components/ParentingCourses'
import ParentingTips from './components/ParentingTips'
import CoParents from './components/CoParents'
import fetchAllCatagories from './actions/fetchAllCatagories'
import fetchAllUsers from './actions/fetchAllUsers'
import fetchAllKids from './actions/fetchAllKids'
import reAuth from './actions/reAuth'
import './App.css';
import SignIn from './containers/SignIn'
import AboutUs from './containers/AboutUs'
import ShopList from './containers/ShopList'
import ContactUsHome from './containers/ContactUsHome'

import Baby from './Catagories/Baby'
import Toddler from './Catagories/Toddler'
import Pre_school from './Catagories/Pre_school';
import Primary_school from './Catagories/Primary_School';
import Preteen from './Catagories/Preteen';
import Teen from './Catagories/Teen';
import Young_Adults from './Catagories/Young_Adult';
import CourseInfo from './Catagories/Layout/CourseInfo'
import AddKid from './containers/AddKid'

import Rooms from './messages/Rooms';
import RoomShow from './messages/RoomShow';

class App extends React.Component {


  state = {
    currentUser: this.props.currentUser,
    allRooms: [],
    currentRoom: {
      room: {}, 
      users: [],
      messages: []
    }
  }

  componentDidMount () {
    this.props.reAuth()
    this.props.fetchAllUsers()
    this.props.fetchAllCatagories()
    this.props.fetchAllKids()
    
    fetch('http://localhost:3000/rooms')
    .then(resp => resp.json())
    .then(result => {
      this.setState({
        allRooms: result.data
      })
    })
  }

  updateAppStateRoom = (newRoom) => {
    this.setState({
      currentRoom: {
        room: newRoom.room.data,
        users: newRoom.users,
        messages: newRoom.messages
      }
    })
  }

  getRoomData = (id) => {
    fetch(`http://localhost:3000/rooms/${id}`)
    .then(response => response.json())
    .then(result => {
      this.setState({
        currentRoom: {
          room: result.data,
          users: result.data.attributes.users,
          messages: result.data.attributes.messages
        }
      })
    })
  }

  subscribeToRoom = (event) => {
    const room_id = event.target.id
    this.state.currentUser ? (this.postFirstMessage(room_id)) : (alert('You must be logged in to subscribe to a room.'))
  }

  postFirstMessage = (roomId) => {
    window.history.pushState(null, null, `/rooms/${roomId}`)
    const message = {
      content: `${this.state.currentUser.email} has joined this room!`,
      user_id: this.state.currentUser.id,
      room_id: roomId
    }
    fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({message: message})
    })
    .then(resp => resp.json())
    .then(result => {
        console.log(result)
    })
  }

  render(){
    console.log(this.state.currentRoom)
    return (
      <div className="App">
        <Router>
            {/* { this.props.currentUser ? ( */}
           
              <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/contact_us' component={ContactUsHome} />
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/shop' component={ShopList}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/edit-profile' component={EditProfile}/>
                <Route exact path='/parenting-courses' component={ParentingCourses}/>
                <Route exact path='/parenting-tips' component={ParentingTips}/>
                <Route exact path='/co-parents' component={CoParents}/>
                <Route exact path='/add-child' component={AddKid}/>

                <Route exact path='/baby' component={Baby}/>
                <Route exact path='/toddler' component={Toddler}/>
                <Route exact path='/pre_school' component={Pre_school}/>
                <Route exact path='/primary_school' component={Primary_school}/>
                <Route exact path='/preteen' component={Preteen}/>
                <Route exact path='/teen' component={Teen}/>
                <Route exact path='/young_adults' component={Young_Adults}/>
                <Route exact path='/edit-kid' component={EditKid}/>
                <Route exact path='/course' component={CourseInfo} />

              <Route exact path='/rooms' render={ (props) => 
            <Rooms 
              allRooms={this.state.allRooms}
              currentUser={this.state.currentUser}
              handleSubscribe={this.subscribeToRoom}
            /> } />


          <Route exact path='/rooms/:id' render={ (props) => 
            <RoomShow
              {...props}
              cableApp={this.props.cableApp}
              getRoomData={this.getRoomData}
              updateApp={this.updateAppStateRoom}
              roomData={this.state.currentRoom}
              currentUser={this.state.currentUser}
            />} />

            <Route exact path='/' component ={Welcome}/>
            <Route exact path='/signup-user' component={SignUpUser}/>
            <Route exact path='/signin-user' component={SignIn} />
            <Route exact path='/contact-us' component={ContactUs} />
              </Switch>
              
          {/* //   ) : (
          //     <Switch>
          //   {/* <Route exact path='/' component ={Welcome}/>
          //   <Route exact path='/signup-user' component={SignUpUser}/>
          //   <Route exact path='/signin-user' component={SignIn} />
          //   <Route exact path='/contact-us' component={ContactUs} /> */}
          {/* // </Switch> */}
        

        </Router>
      </div>
    );
  }

}
  
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapsToDispatchProps = dispatch => {
  return{
    reAuth: () => dispatch(reAuth()),
    fetchAllUsers: ()=> dispatch(fetchAllUsers()),
    fetchAllCatagories: ()=> dispatch(fetchAllCatagories()),
    fetchAllKids: ()=> dispatch(fetchAllKids())
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);