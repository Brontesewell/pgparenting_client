import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import SignUpUser from './containers/SignUpUser'
import Home from './containers/Home'   

import Profile from './components/Profile'
import EditProfile from './containers/EditProfile'

import fetchAllUsers from './actions/fetchAllUsers'
import reAuth from './actions/reAuth'
import './App.css';


class App extends React.Component {

  componentDidMount () {
      this.props.reAuth()
      this.props.fetchAllUsers()
  }


  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component ={Welcome}/>
            <Route exact path='/signup-user' component={SignUpUser}/>
            
            { Object.keys(this.props.currentUser).length > 0 ?
            <>
              <Switch>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/edit-profile' component={EditProfile}/>
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
  }
}
  
export default connect(mapStateToProps, mapsToDispatchProps)(App);