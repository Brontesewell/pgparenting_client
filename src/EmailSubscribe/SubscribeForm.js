import React, {Component} from 'react';
import {connect} from 'react-redux';
import editProfile from '../actions/editProfile'

class SubscribeForm extends Component {



    state = {
        subscribe: this.props.currentUser.subscribe,
    }

    handleChange = (e) => {
        // const {name, value} = e.target
        this.setState({
            subscribe: "true"
        })
        this.props.editProfile(e, this.props.history, this.state, this.props.currentUser.id)
    } 

    

    render () {  
        console.log(this.state.subscribe)
        const {subscribe} = this.state
        const {editProfile, history, currentUser} = this.props
        console.log(currentUser.subscribe)
        return (
            <div>
               <div id="newsletter">
                    <h4 id="newsletter-title">Sign up for <strong id="newsletter-logo">PG Parenting</strong> newsletter</h4>
                        <div class="row" id="newsletter-div">
                              <form class="col s12">
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
                             {currentUser.subscribe === "true" ? <button class="btn-newsletter-clicked" disabled>Subscribed ✓</button> :<button class="btn-newsletter" onClick={() => this.handleChange()}>Click Me!<i id="arrow-newsleeter" class="material-icons right"/> </button>}
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


  
 
  

