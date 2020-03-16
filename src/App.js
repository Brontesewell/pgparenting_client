import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import Home from './containers/Home'   
import EditProfile from './containers/EditProfile'
import Profile from './components/Profile'
import ContactUs from './containers/ContactUs'
import ParentingCourses from './components/ParentingCourses'
import ParentingTips from './components/ParentingTips'
import CoParents from './components/CoParents'
import fetchAllCatagories from './actions/fetchAllCatagories'
import fetchAllUsers from './actions/fetchAllUsers'
import reAuth from './actions/reAuth'
import './App.css';
import SignIn from './containers/SignIn';

import Baby from './Catagories/Baby/Baby'
import Toddler from './Catagories/Teen'
import Pre_school from './Catagories/Pre_school';
import Primary_school from './Catagories/Primary_School';
import Preteen from './Catagories/Preteen';
import Teen from './Catagories/Teen';
import Young_Adults from './Catagories/Young_Adult';

class App extends React.Component {

  componentDidMount () {
      this.props.reAuth()
      this.props.fetchAllUsers()
      this.props.fetchAllCatagories()
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component ={Welcome}/>
            <Route exact path='/signup-user' component={SignUpUser}/>
            <Route exact path='/signin-user' component={SignIn} />
            <Route exact path='/contact-us' component={ContactUs} />
            { Object.keys(this.props.currentUser).length > 0 ?
            <>
              <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/edit-profile' component={EditProfile}/>
                <Route exact path='/parenting-courses' component={ParentingCourses}/>
                <Route exact path='/parenting-tips' component={ParentingTips}/>
                <Route exact path='/co-parents' component={CoParents}/>

                <Route exact path='/baby' component={Baby}/>
                <Route exact path='/toddler' component={Toddler}/>
                <Route exact path='/pre_school' component={Pre_school}/>
                <Route exact path='/primary_school' component={Primary_school}/>
                <Route exact path='/preteen' component={Preteen}/>
                <Route exact path='/teen' component={Teen}/>
                <Route exact path='/young_adults' component={Young_Adults}/>

              </Switch>
            </> : 
            <h6>Please Sign In</h6>
            }

          </Switch>
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
    fetchAllCatagories: ()=> dispatch(fetchAllCatagories())
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);