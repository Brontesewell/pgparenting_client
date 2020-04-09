import React, { Component } from 'react';
import { connect } from 'react-redux'
import signUpUser from '../actions/signUpUser'
import Logo from '../Logo.jpg'
import { Link } from "react-router-dom";

export class SignUpUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        subscribe: '',
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    
    // handleSubscribe = (e) => {
    //     // const {subscribe, value} = e.target
    //     this.setState({
    //         subscribe: true
    //     })
    // }

    render() {
       const { firstName, lastName, email, password, subscribe } = this.state
       const {history} = this.props
        return (
           
            <div className="container-signup">
                <h4 id="sign_in">Sign Up</h4>
                
                 {/* <a href="/"><img className ='logo-signin' alt="Logo" src={Logo}/></a> */}
              
               
                <form onSubmit={(e) => this.props.signUpUser(e, this.state, history)}>
                                <div class="row">
                                   <div class="input-field col s6">
                                   <label>First Name</label>
                                    <input type="text" name="firstName" placeholder="First name" value={firstName} onChange={this.handleChange}/>
                                   </div>

                                  <div class="input-field col s6">
                                  <label>Last Name</label>
                                <input type="text" name="lastName" placeholder="Last name" value={lastName} onChange={this.handleChange}/>

                                  </div>
                        
                   
                       <div className="email-password">
                        <label>Email</label>
                        <input type='email' name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                    
                    
                        <label>Password</label>
                        <input type='password' name="password" placeholder="Password" value={password} onChange={this.handleChange}/>
                        
                        </div>
                        
                                  </div>
                        <h5>Email Preference</h5>
                        <label>
                        <input type="checkbox" name="subscribe" class="filled-in" onChange={this.handleChange} value="true" checked={subscribe === 'true'}/>
                         <span>PG Parenting Newsletter</span>
                        </label>

                    <button  id="sign-up-button" className="btn-large" type="submit">Next</button>
                    <br></br>
                <Link to='/signin-user' className="links-signup" >Or Login</Link>
                
                </form>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (e, state, history) => dispatch(signUpUser(e, state, history))
    }
}

export default connect(null, mapDispatchToProps)(SignUpUser);