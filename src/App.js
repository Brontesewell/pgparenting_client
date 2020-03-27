import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
import fetchAllJournals from './actions/fetchAllJournals'
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

import AboutASP from './containers/AboutASP'

import JournalsPage from './components/JournalsPage'


class App extends React.Component {

  componentDidMount () {
      this.props.reAuth()
      this.props.fetchAllUsers()
      this.props.fetchAllCatagories()
      this.props.fetchAllKids()
      this.props.fetchAllJournals()
  }


  render(){
    console.log(this.props.currentUser)
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
                {/* <Route exact path='/parenting-courses' component={ParentingCourses}/>
                <Route exact path='/parenting-tips' component={ParentingTips}/> */}
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
                <Route exact path='/course/:id' component={CourseInfo} />
                <Route exact path='/journal' component={JournalsPage} />
                <Route exact path='/journal/:id' component={JournalsPage} />
                <Route exact path='/about_scoring' component={AboutASP} />
                {/* <Route exact path='/quadrant' component={BehaviourQuadrant} /> */}

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
    fetchAllKids: ()=> dispatch(fetchAllKids()),
    fetchAllJournals:()=> dispatch(fetchAllJournals())
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);