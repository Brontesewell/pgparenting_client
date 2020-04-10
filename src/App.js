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
// import ParentingCourses from './components/ParentingCourses'
// import ParentingTips from './components/ParentingTips'
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
import CoParents from './Catagories/Co-Parents/CoParents'
import CoParentCourseInfo from './Catagories/Co-Parents/CoParentCourseInfo'
import AddKid from './containers/AddKid'
import AboutASP from './containers/AboutASP'
import JournalsPage from './components/JournalsPage'
import Email from './EmailSubscribe/Email'

import Baby from './Catagories/Baby/Baby'
import BabyCourseInfo from './Catagories/Baby/BabyCourseInfo'

import Toddler from './Catagories/Toddler/Toddler'
import ToddlerCourseInfo from './Catagories/Toddler/ToddlerCourseInfo'

import Pre_school from './Catagories/Pre-School/Pre_school';
import PreSchoolCourseInfo from './Catagories/Pre-School/PreSchoolCourseInfo';

import Primary_school from './Catagories/Primary-School/Primary_School';
import PrimaryCourseInfo from './Catagories/Primary-School/PrimaryCourseInfo';

import Preteen from './Catagories/Preteen/Preteen';
import PreteenCourseInfo from './Catagories/Preteen/PreteenCourseInfo';

import Teen from './Catagories/Teen/Teen';
import TeenCourseInfo from './Catagories/Teen/TeenCourseInfo';

import Young_Adults from './Catagories/Young-Adult/Young_Adult';
import YACourseInfo from './Catagories/Young-Adult/YACourseInfo';




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
                <Route exact path='/add-child' component={AddKid}/>
                
                <Route exact path='/co-parents' component={CoParents}/>
                <Route exact path='/co-parents/:id' component={CoParentCourseInfo}/>

                <Route exact path='/baby' component={Baby}/>
                <Route exact path='/baby/:id' component={BabyCourseInfo} />

                <Route exact path='/toddler' component={Toddler}/>
                <Route exact path='/toddler/:id' component={ToddlerCourseInfo}/>

                <Route exact path='/pre_school' component={Pre_school}/>
                <Route exact path='/pre_school/:id' component={PreSchoolCourseInfo}/>

                <Route exact path='/primary_school' component={Primary_school}/>
                <Route exact path='/primary_school/:id' component={PrimaryCourseInfo}/>

                <Route exact path='/preteen' component={Preteen}/>
                <Route exact path='/preteen/:id' component={PreteenCourseInfo}/>

                <Route exact path='/teen' component={Teen}/>
                <Route exact path='/teen/:id' component={TeenCourseInfo}/>

                <Route exact path='/young_adults' component={Young_Adults}/>
                <Route exact path='/young_adults/:id' component={YACourseInfo}/>

                <Route exact path='/edit-kid' component={EditKid}/>
                <Route exact path='/journal' component={JournalsPage} />
                <Route exact path='/journal/:id' component={JournalsPage} />
                <Route exact path='/about_scoring' component={AboutASP} />
                {/* <Route exact path='/quadrant' component={BehaviourQuadrant} /> */}
                <Route exact path='/email' component={Email} />


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
    currentUser: state.currentUser,
    users: state.users
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