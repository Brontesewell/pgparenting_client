import React, {Component} from 'react';
import {connect} from 'react-redux';

class SubscribeForm extends Component {



    state = {
        subscribe: "",
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }


    

    render () {  
        console.log(this.state.email)
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
                             {this.props.currentUser.subscribe === "true" ? <button>Subscribed</button> :<button class="btn-newsletter" type="submit" name="action">Click Me!<i id="arrow-newsleeter" class="material-icons right"/> </button>}
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

export default connect(mapStateToProps, null)(SubscribeForm);


  
 
  

