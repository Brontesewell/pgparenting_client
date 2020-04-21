import React, {Component} from 'react';
import {connect} from 'react-redux';
import editProfile from '../actions/editProfile'
import { Link } from "react-router-dom";


class SubscribeForm extends Component {



    state = {
        subscribe: this.props.currentUser.subscribe,
    }

    handleChange = (e) => {
        // const {name, value} = e.target
        this.setState({
            subscribe: "true"
        })
    } 

    

    render () {  
        console.log(this.props.editProfile)
        const {subscribe} = this.state
        const {editProfile, history, currentUser} = this.props
        console.log(currentUser.subscribe)
        return (
            <div>
               <div id="newsletter">
                    <h6 id="newsletter-title">Sign up for <strong id="newsletter-logo">PG Parenting</strong> newsletter</h6>
                        <div class="row" id="newsletter-div">
                              <form className = 'col s12' onSubmit={(e)=> editProfile(e, history, this.state, currentUser.id)}>
                                  <div class="row">
                                   {/* <div class="input-field col s6">
                                        <input id="first_name" type="text" class="validate"/>
                                         <label for="first_name">First Name</label>
                                    </div>

                                   <div class="input-field col s6">
                                           <input id="last_name" type="text" class="validate"/>
                                          <label for="last_name">Last Name</label>
                                     </div> */}




                                   <div class="row">
                                  {/* <div class="input-field col s12">
                                         <input id="email" type="email" class="validate"  onChange={this.handleChange}/>
                                         <label id="emails" for="email">Email</label>
                                 </div> */}
                                 </div> 
                                {currentUser.subscribe === "true" ? <button class="btn-newsletter-clicked" disabled>Subscribed ✓</button> :  <div>
                        
                        <label>
                        <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
                         <span>{currentUser.email}</span>
                        </label>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button className="btn-newsletter" type="submit">Confirm</button>
                        </div>}
                          </div>
                        </form>
                    </div>
                    </div>
      </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

const mapsToDispatchProps = dispatch => {
    return {
        editProfile: (e, history, state, id) => dispatch(editProfile(e, history, state, id)),
    }
}

export default connect(mapStateToProps, mapsToDispatchProps)(SubscribeForm);


  
 
  

